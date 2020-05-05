const fs = require("fs");

module.exports.decodeHexFileContent = (filePath) => {
  return new Promise((resolve, reject) => {
    try {
      const file = fs.readFileSync(filePath).toString();
      const decode = Buffer.from(file, "hex").toString("utf8");
      resolve(decode);
    } catch (e) {
      reject(e);
    }
  });
};
