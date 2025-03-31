const os = require('os');

function cpu(){
    console.log(os.cpus());
}

setTimeout(cpu, 4000);

console.log(os.hostname());

console.log(os.freemem());

console.log(os.type());




