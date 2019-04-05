const BlockChain = require('../blockchain');
const expect = require('chai').expect;



describe('blockchain test', () => {
    it('value should be right', () => {

        const blockchain = new BlockChain();

        blockchain.createNewBlock(123, 'last_hash1', 'nowhash');
        blockchain.createNewBlock(124, 'last_hash2', 'nowhash2');
        blockchain.createNewBlock(125, 'last_hash3', 'nowhash3');

        expect(blockchain.chain[0].index).to.equal(1);
        expect(blockchain.chain[0].nonce).to.equal(123);
        expect(blockchain.chain[0].prevBlockHash).to.equal('last_hash1');
        expect(blockchain.chain[0].hash).to.equal('nowhash');

    });
});

