var buildings = require('../Daos/getBuildingsDao.js')
module.exports={
  getbuildings:getbuildings
}
function getbuildings(buildingobject) {
  console.log(buildingobject,"buildingobject")
 return new Promise(async (resolve, reject) => {
     var responseObj = {};

     var user = buildings.buildings(buildingobject).then((data) => {
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