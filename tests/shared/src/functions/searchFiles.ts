import * as fs from "node:fs";
import * as path from "node:path";

type SearchFilesOptions = {
    dir: string;
};

const searchFiles = (options: SearchFilesOptions): string[] => {
    const { dir } = options;

    const result: string[] = [];
    const files: string[] = fs.readdirSync(dir);

    const ignoreList: string[] = [".gitignore", ".gitkeep"];

    for (const file of files) {
        if (ignoreList.includes(file)) continue;
        if (fs.statSync(path.join(dir, file)).isFile()) {
            result.push(path.join(dir, file));
        }
    }

    return result;
};

export type { SearchFilesOptions };
export { searchFiles };
