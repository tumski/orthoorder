const { exec } = require("child_process");
const path = require("path");

// Run the TypeScript server with ts-node
const tsNode = path.join(__dirname, "node_modules", ".bin", "ts-node");
const serverProcess = exec(`${tsNode} --esm server.ts`, {
  env: {
    ...process.env,
    NODE_OPTIONS: "--experimental-specifier-resolution=node",
  },
});

serverProcess.stdout.on("data", (data) => {
  console.log(data.toString());
});

serverProcess.stderr.on("data", (data) => {
  console.error(data.toString());
});

serverProcess.on("close", (code) => {
  console.log(`Server process exited with code ${code}`);
});
