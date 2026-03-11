//?operating system module => it provides utilities to get the information regarding the system (os platform, total memory, uptime, name, arch)

import os from "node:os";

// console.log(os);

console.log(os.totalmem());

console.log(os.freemem());
console.log(os.arch());
console.log(os.hostname());

//!cpus() ==> it returns the total cores that your laptop has
console.log("cores: ", os.cpus().length);
//?it directly returns the total number of cores, no need to use the length property
console.log(os.availableParallelism());

