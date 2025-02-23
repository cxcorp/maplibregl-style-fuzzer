import fs from "node:fs";
import { ErrorReport } from "./ErrorReporter";
import { type Writable } from "node:stream";

const writeMarkdownReport = (stream: Writable, reports: ErrorReport[]) => {
  stream.write(`# Table of contents\n`);
  stream.write("\n");
  for (let i = 1; i < reports.length + 1; i++) {
    stream.write(
      `[${i}. ${getFirstLine(reports[i - 1].errorStack).replace(
        /"/g,
        '\\"'
      )}](#${i})\n`
    );
  }
  stream.write("\n");

  let i = 1;
  for (const { errorStack, exampleStyle } of reports) {
    stream.write(`## ${i}\n`);
    stream.write("\n");

    stream.write("### Stack\n");
    stream.write("\n");
    stream.write("```\n");
    stream.write(errorStack);
    stream.write("\n");
    stream.write("```\n");
    stream.write("\n");

    stream.write("### Example\n");
    stream.write("\n");
    stream.write("```\n");
    stream.write(JSON.stringify(JSON.parse(exampleStyle), null, 2));
    stream.write("\n");
    stream.write("```\n");
    stream.write("\n");
    i++;
  }
};

const getFirstLine = (s: string) => s.split("\n")[0];

export const writeMarkdownReportToFile = async (
  fileName: string,
  reports: ErrorReport[]
) => {
  const stream = fs.createWriteStream(fileName, {
    encoding: "utf-8",
  });

  writeMarkdownReport(stream, reports);

  return new Promise<void>((resolve, reject) => {
    stream.close((err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
};
