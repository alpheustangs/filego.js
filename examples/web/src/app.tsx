import type { FileChunk, SplitResult } from "@filego/ts";

import * as React from "react";

import { split } from "@filego/ts";

type APIResponse<Data> = {
    status: "success" | "error";
    message?: string;
    data?: Data;
};

const URL: string = "http://localhost:4001";
const maxRetry: number = 3;

const App = (): React.JSX.Element => {
    // declarations
    const retry = React.useRef<number>(0);
    const fileInput = React.useRef<HTMLInputElement>(null);

    const [id, setID] = React.useState<string>("");
    const [file, setFile] = React.useState<File | undefined>(void 0);
    const [error, setError] = React.useState<string | undefined>(void 0);

    // function
    const onTextInputChange = (
        e: React.ChangeEvent<HTMLInputElement>,
    ): void => {
        setID(e.target.value);
    };

    const onFileInputChange = (
        e: React.ChangeEvent<HTMLInputElement>,
    ): void => {
        setFile(e.target.files?.[0] ?? void 0);
    };

    const upload = async (): Promise<void> => {
        try {
            // init
            setError(void 0);
            retry.current = 0;

            // check blank
            if (!id) throw new Error("ID not found");
            if (!file) throw new Error("File not found");

            let fileSize: number = 0;
            let totalChunks: number = 0;
            let chunks: FileChunk[] = [];

            // to perform upload request
            const uploadRequest = async (index: number): Promise<void> => {
                const formData: FormData = new FormData();

                formData.append("id", id);
                formData.append("index", index.toString());
                formData.append("blob", chunks[index].blob);

                await fetch(`${URL}/upload`, {
                    method: "POST",
                    body: formData,
                });
            };

            // to check if missing
            const checkRequest = async (): Promise<void> => {
                if (retry.current >= maxRetry) {
                    throw new Error("Missing chunks");
                }

                const missing: number[] = [];

                const formData: FormData = new FormData();

                formData.append("id", id);
                formData.append("fileSize", fileSize.toString());
                formData.append("totalChunks", totalChunks.toString());

                const data: APIResponse<{ missing: number[] }> = await (
                    await fetch(`${URL}/check`, {
                        method: "POST",
                        body: formData,
                    })
                ).json();

                if (data.status === "error") {
                    switch (data.message) {
                        case "missing": {
                            if (data.data?.missing) {
                                missing.push(...data.data.missing);

                                for (
                                    let i: number = 0;
                                    i < missing.length;
                                    i++
                                ) {
                                    await uploadRequest(missing[i]);
                                }

                                retry.current++;

                                await checkRequest();
                            }
                            break;
                        }
                        case "size": {
                            throw new Error("Size not match");
                        }
                        default: {
                            throw new Error("Unknown error");
                        }
                    }
                }
            };

            // to merge chunks
            const mergeRequest = async (): Promise<void> => {
                const formData: FormData = new FormData();

                formData.append("id", id);
                formData.append("name", file.name);

                const data: APIResponse<void> = await (
                    await fetch(`${URL}/merge`, {
                        method: "POST",
                        body: formData,
                    })
                ).json();

                if (data.status === "error") {
                    throw new Error(data.message ?? "Unknown error");
                }
            };

            // split
            const splitted: SplitResult = await split({
                file,
                chunkSize: 2 * 1024 * 1024,
            });

            fileSize = splitted.fileSize;
            totalChunks = splitted.totalChunks;
            chunks = splitted.chunks;

            for (let i: number = 0; i < chunks.length; i++) {
                await uploadRequest(i);
            }

            await checkRequest();

            await mergeRequest();

            setID("");
            setFile(void 0);
            if (fileInput.current) fileInput.current.value = "";
        } catch (e: unknown) {
            console.error(e);
            setError(e instanceof Error ? e.message : "Unknown error");
        }
    };

    return (
        <>
            <label>{"ID: "}</label>
            <input
                type="text"
                title="ID"
                value={id}
                onChange={onTextInputChange}
            />
            <br />
            <br />
            <input
                ref={fileInput}
                type="file"
                title="Click to upload"
                onChange={onFileInputChange}
            />
            <br />
            <br />
            <input type="submit" title="Upload" onClick={upload} />
            <br />
            <br />
            <div style={{ color: "red" }}>{error ?? ""}</div>
        </>
    );
};

export default App;
