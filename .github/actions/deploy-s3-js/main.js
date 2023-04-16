const core = require("@actions/core");
const github = require("@actions/github");
const exec = require("@actions/exec");

function run() {
  // 1) Get some input values
  const bucket = core.getInput("bucket", { required: true });
  const bucketRegion = core.getInput("bucket-region", { required: true });
  const distFolder = core.getInput("dist-folder", { required: true });

  core.notice("Hello from my custom JavaScript Action!");
  core.notice(`${bucket} / ${bucketRegion} / ${distFolder}`);

  // 2) upload files
  const s3Uri = `s3://${bucket}`;
  const s3Command = `aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`;
  // exec.exec(s3Command);
  core.notice(s3Command);
}

run();
