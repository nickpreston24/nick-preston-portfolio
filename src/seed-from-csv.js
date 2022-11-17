//https://www.npmjs.com/package/csvtojson

const csv = require("csvtojson");
const XRegExp = require("xregexp");
const cp = require("child_process");
// const { media_pattern } = require("./patterns");
const media_pattern = `
(?<filename>\\w+-?\\w+\\.\\w{3})
\s*
(?<url> \(.*\))
  `;

let download = async function (uri, filepath) {
  if (!uri || !filepath) {
    console.warn("could not curl for file" + filepath);
    return 0;
  }
  console.log("uri :>> ", uri);
  let command = `curl ${uri} > ${filepath}`;

  console.log("command :>> ", command);
  let result = cp.execSync(command);
  console.log("result :>> ", result);
};

async function download_image_with_curl(
  url,
  filename = "img",
  folder = "../img/icons/"
) {
  let file_path = folder + filename?.trim();
  let uri = url?.trim()?.replace(/[\(\)]/g, "");

  if (!!uri && !!file_path) {
    console.log(`Downloading ${filename} to ${file_path}...`);
    await download(uri, file_path);
  }
}

function seed_to_file(infile, outfile) {
  const fs = require("fs");
  csv()
    .fromFile(infile)
    .then((json) => {
      console.log("json found for " + infile + "?", !!json);
      fs.writeFileSync(outfile, JSON.stringify(json));

      json.forEach((element) => {
        const date = XRegExp(media_pattern, "x");

        let match = XRegExp.exec(element.Media, date);
        const { url, filename } = match?.groups || {};
        download_image_with_curl(url, filename);
      });
    });
}

seed_to_file("./Projects-Grid view.csv", "projects.json");
seed_to_file("./Technologies-Grid view.csv", "technologies.json");
