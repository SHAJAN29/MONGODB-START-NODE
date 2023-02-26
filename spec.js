const os = require("os");

console.log(`freerem: ${(os.freemem() / 1024 / 1024 / 1024).toFixed(2)}`);

console.log(`total mem: ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)}`);

console.log(`total cpu: ${os.cpus()}`);
console.log(`version: ${os.version()}`);
