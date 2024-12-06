let stage = index.indexInit;
let fps = 60;

setInterval(() => stage = stage(),fps/1000);

console.log("updated")