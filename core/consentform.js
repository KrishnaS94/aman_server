
var consent = require('../Daos/consentformDao.js')
module.exports={
    consentform:consentform
}
function consentform(consentformobject) {
    console.log(consentformobject,"consentformobject")
   return new Promise(async (resolve, reject) => {
       var responseObj = {};

       var user = consent.consent(consentformobject).then((data) => {
           console.log(user, "user")
           responseObj.data = data;
           responseObj.errors = [];
           responseObj.meta = {};

           resolve(responseObj);
       }).catch((error) => {
           responseObj.data = [];
           responseObj.errors = [error];
           responseObj.meta = {};
       });
   })
}
