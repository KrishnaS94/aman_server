var building = require('../Daos/buildingDao.js')
module.exports={
    buildings:buildings
}
function buildings(buildingobject) {
    console.log(buildingobject,"buildingobject")
   return new Promise(async (resolve, reject) => {
       var responseObj = {};

       var user = building.building(buildingobject).then((data) => {
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