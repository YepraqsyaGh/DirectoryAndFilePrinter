"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var filePath = "/home/user/Desktop/Node/DirectoryAndFilePrinter/node_modules";
var isDirectory = function (fsPath) {
    var stats = fs.statSync(fsPath);
    return stats.isDirectory();
};
var printer = function (fsPath, position) {
    if (position === void 0) { position = "  -"; }
    var filenames = fs.readdirSync(fsPath);
    filenames.forEach(function (filename) {
        var newPath = path.join(fsPath, filename);
        if (isDirectory(newPath)) {
            console.log(position + filename + "(Directory)");
            printer(newPath, position + "  -");
        }
        else {
            console.log(position + filename + "(File)");
        }
    });
};
var directoryAndFilePrinter = function (fsPath) {
    var basename = path.basename(filePath);
    if (isDirectory(fsPath)) {
        console.log(basename + "(Directory)");
        printer(fsPath);
    }
    else {
        console.log(basename + "(File)");
    }
};
directoryAndFilePrinter(filePath);
