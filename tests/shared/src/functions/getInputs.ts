import * as path from "node:path";

import * as fse from "fs-extra";

const getInputs = ({
    dir,
    fileNames,
}: {
    dir: string;
    fileNames: string[];
}): string[] => {
    const inputs: string[] = [];

    for (const fileName of fileNames) {
        if (fse.existsSync(path.join(dir, fileName))) {
            inputs.push(path.join(dir, fileName));
        }
    }

    return inputs;
};

export { getInputs };
