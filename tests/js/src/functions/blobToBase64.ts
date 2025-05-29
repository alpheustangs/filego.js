const blobToBase64 = (blob: Blob): Promise<string> => {
    return new Promise((resolve, reject): void => {
        const reader: FileReader = new FileReader();

        reader.onload = (): void => {
            const base64String: string = reader.result as string;
            const data: string = base64String.split(",")[1] as string;
            resolve(`data:${blob.type};base64,${data}`);
        };

        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
};

export { blobToBase64 };
