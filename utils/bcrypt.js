const bcrypt =require('bcrypt');

const encryptAndDecrypt={
    hashPwd(originalPwd){
        const hashPwd = bcrypt.hashSync(originalPwd,10);
        return hashPwd
    },

    matchPwd(orignalPwd, hashPwd){
        const matchedOrNot = bcrypt.compareSync(orignalPwd, hashPwd);
        return matchedOrNot;
    }
}

module.exports = encryptAndDecrypt;