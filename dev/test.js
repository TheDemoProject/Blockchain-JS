const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

const previousBlockHash = 'ddfd';
const currentBlockData = [
    {
        amount: 10,
        sender: 'dd',
        recipient: 'sdf'
    },
    {
        amount: 10,
        sender: 'dd',
        recipient: 'sdf'
    },
    {
        amount: 101,
        sender: 'dd',
        recipient: 'sdf'
    }
];
const nonce = 100;

console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));