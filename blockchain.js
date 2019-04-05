
class BlockChain {

    constructor(){
        this.chain = [];
        this.pendingTxs = [];
    }
    createNewBlock(nonce,prevBlockHash,hash){
        const newBlock = {
            index: this.chain.length + 1,
            timestamp: Date.now(),
            txs: this.pendingTxs,
            nonce,
            prevBlockHash,
            hash
        }
        this.pendingTxs = [];
        this.chain.push(newBlock);
        return newBlock;
    }
    getLastBlock(){
        return this.chain[this.chain.length-1]
    }

    createNewTx(sender,amount,receipt){
        const newTx ={
            sender,
            amount,
            receipt
        };
        this.pendingTxs.push(newTx);
        return this.getLastBlock()['index']+1;
    }
}

module.exports = BlockChain;