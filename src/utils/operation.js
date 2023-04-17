// TODO 6 - Call buy_ticket entrypoint in the Lottery contract by completing buyTicketOperation

import {tezos} from "./tezos";

export const addBalanceOwnerOperation = async () => {
    try{
        const contract = await tezos.wallet.at("KT1JgzWb73ua3cJKh1ykZj12LKFoVvyCvBUQ");
        await contract.methods.addBalanceOwner().send({
            amount: 50,
            mutez: false,
        })
    }catch(err){
        throw err;
    }
};

export const addBalanceCounterpartyOperation = async () => {
    try{
        const contract = await tezos.wallet.at("KT1JgzWb73ua3cJKh1ykZj12LKFoVvyCvBUQ");
        await contract.methods.addBalanceCounterparty().send({
            amount: 4,
            mutez: false,
        })
    }catch(err){
        throw err;
    }
};

export const claimCounterpartyOperation = async () => {
    try{
        const contract = await tezos.wallet.at("KT1JgzWb73ua3cJKh1ykZj12LKFoVvyCvBUQ");
        await contract.methods.claimCounterparty().send({ 
            // secret: //????????
        })
    }catch(err){
        throw err;
    }
};

export const claimOwnerOperation = async () => {
    try{
        const contract = await tezos.wallet.at("KT1JgzWb73ua3cJKh1ykZj12LKFoVvyCvBUQ");
        await contract.methods.claimOwner().send({})
    }catch(err){
        throw err;
    }
};
