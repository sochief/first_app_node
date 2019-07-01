const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

//Template string
console.log(`\n\n\n\nTotal Memory: ${totalMemory}`);
console.log(`\n\n\nFree Space: ${freeMemory}\n\n\n\n`);
