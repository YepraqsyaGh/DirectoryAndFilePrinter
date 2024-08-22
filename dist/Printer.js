"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const filePath = path.resolve(__dirname, '..', 'node_modules');
const isDirectory = (fsPath) => {
    const stats = fs.statSync(fsPath);
    return stats.isDirectory();
};
const printer = (fsPath, position = "  -") => {
    const filenames = fs.readdirSync(fsPath);
    filenames.forEach((filename) => {
        const newPath = path.join(fsPath, filename);
        if (isDirectory(newPath)) {
            console.log(position + filename + "(Directory)");
            printer(newPath, position + "  -");
        }
        else {
            console.log(position + filename + "(File)");
        }
    });
};
const directoryAndFilePrinter = (fsPath) => {
    const basename = path.basename(filePath);
    if (isDirectory(fsPath)) {
        console.log(basename + "(Directory)");
        printer(fsPath);
    }
    else {
        console.log(basename + "(File)");
    }
};
directoryAndFilePrinter(filePath);
