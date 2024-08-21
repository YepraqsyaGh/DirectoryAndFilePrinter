import * as fs from 'fs';
import * as path from 'path';

const fileRelativePath = "../node_modules"
const filePath: string = path.join(__dirname, fileRelativePath);

const isDirectory = (fsPath: string): boolean | undefined => {
    const stats = fs.statSync(fsPath);
    return stats.isDirectory()
}

const printer = (fsPath: string, position: string = "  -") => {
    const filenames = fs.readdirSync(fsPath);

    filenames.forEach((filename: string) => {
        const newPath = path.join(fsPath, filename);
        if (isDirectory(newPath)) {
            console.log(position + filename + "(Directory)");
            printer(newPath, position + "  -");
        } else {
            console.log(position + filename + "(File)");
        }
    })
}

const directoryAndFilePrinter = (fsPath: string): void => {
    const basename: string = path.basename(filePath);

    if (isDirectory(fsPath)) {
        console.log(basename + "(Directory)");
        printer(fsPath);
    } else {
        console.log(basename + "(File)");
    }

}


directoryAndFilePrinter(filePath);
