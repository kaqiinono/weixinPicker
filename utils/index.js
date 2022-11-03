import path from "path";
import shell from "shelljs";
import fs from "fs";

const pickFolder = {
  Image: ["*.pic_hd.jpg", "*.pic.jpg"],
  Video: ["*.mp4"],
  File: ["*.pdf", "*.doc"],
};

export async function findFiles({ mainPath, nameReflection, bakeFolder }) {
  for (let name in nameReflection) {
    const nameObj = nameReflection[name];
    for (let fileType in pickFolder) {
      if (nameObj.exclude?.includes(fileType)) {
        continue;
      }
      for (let fileSuffix of pickFolder[fileType]) {
        const filePath = path.join(mainPath, name, fileType, fileSuffix);
        if (!fs.existsSync(path.join(mainPath, name, fileType))) {
          continue;
        }
        let folderName = nameObj.name;
        if (fileType === "File") {
          folderName = "";
        }
        const backFolder = path.join(
          bakeFolder,
          fileType,
          fileType === "File" ? "" : nameObj.name
        );

        if (!fs.existsSync(backFolder)) {
          fs.mkdirSync(backFolder);
        }
        await shell.cp("-f", filePath, backFolder);
      }
    }
  }
  await shell.exit();
}
