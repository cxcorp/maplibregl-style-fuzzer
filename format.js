const fs = require("node:fs");
const path = require("node:path");

const dirpath = path.join(__dirname, "./seeds");
const files = fs.readdirSync(dirpath);

for (const file of files) {
  const fpath = path.join(dirpath, file);
  const json = fs.readFileSync(fpath, "utf-8");
  fs.writeFileSync(fpath, JSON.stringify(JSON.parse(json)), "utf-8");
}
