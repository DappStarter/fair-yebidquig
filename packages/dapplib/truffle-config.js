require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame foot north raise pitch mixed install enroll slot general'; 
let testAccounts = [
"0xcce29e8cb158ce887915a6d509c178f9de2785e3a65051830db757a0f83dc2c6",
"0x39e31315e604c705dafe32c0e2fbb13e554ba2ffddd16f0f1896597c41a05d04",
"0xbaa9ee438916bb9422be8fee027475272a4e941c6c63baeb042145746aef79ef",
"0xd7d57f109ce2e677a16c9b47eef870b9aa61b2b33f292c678f0b60b31f48d623",
"0x91178f37080b2240759d1101f4a4f4e3fb78940a61cea64fc920d282f999998a",
"0x7b162744d220a8c78cbc60f9ea5045467f1e8841f3e9923e73c6f8862b298e8a",
"0xf4950c2dcc616594dfc0403969d93e5dbfe38590ea5f83f9ee3c394cefd29eea",
"0x24f2a61a8bb7219802d189006d27880709255992b92f2fc32e724e1251b44edf",
"0x3077961ba5934c00b14d0bd24829ca23e7d4dbc9a0e0a6ba8b087fa49d6f799d",
"0x5e33238ce91b3c6c83dc899be1977cc6b844838a0e08e8b9d529415e8d7633f9"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
