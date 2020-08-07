const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

bitcoin.createNewBlock(1234, 'prehash1322', 'hash23323');
bitcoin.createNewBlock(1234, 'prehash1322', 'hash23323');
bitcoin.createNewBlock(1234, 'prehash1322', 'hash23323');

console.log(bitcoin);