require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner knife flush space stomach dash six prosper gown light army gather'; 
let testAccounts = [
"0x68d3186ad7e7913927220a17c46889e63428dc85635eea06d031bf6a14ed2ae4",
"0x5fb542126a95a6deade4a5048ba2e075d579c2fd8b8503c82162c74de0fe2e25",
"0x8d10b0d9e27921974528ff5481be1697191715740bd7cbc0af4c8e54f02a8f70",
"0x0a7dc1a92cd308710e12964da64f905da7c1ceb4ca8703d29e3a97ad7c93b728",
"0x3ac142fbd43b674c7bb1e09ac23ace15817bd60f6dbfef9a9a95744748e84ef3",
"0xd5d65d21692a3b4757be9ba44502cb759a739605e7ba6c6548500da76ae6bfc7",
"0x0834fdb2c8cd03a08e1f30936dd7145858588fc976d0443a6e777ef5ad175008",
"0x0551707908f67231a406b15273065096c35b40ae7892e44a54e72787ab1cdd59",
"0x5b95fd0fb192cc95a36a033e6492cf3f6b1439f12dc15da545207c2a1d395446",
"0x0fa92cdd577f80295fb0d33d0fd1dc346f890594ab62c7221624d40b30b53cfe"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

