var con = require('../Mysql_config/DBConfig.js');
var dbFunc = require('../Mysql_config/Connection.js');
module.exports={
    assement_get:assement_get
}
function assement_get(){
    return new Promise(async(resolve, reject)=>{
var sql= "SELECT Schedule.schedule_time, Buildings.buildingname, Schedule.status,Schedule.requestdate FROM Schedule INNER JOIN Buildings ON Schedule.building_id=Buildings.id;"
con.query(sql,function(err,result){
    if(err) { console.log("something",err)
        return reject({ "status": 400, "body": 'Cannot insert the data' })}
        else{
              console.log(result,"achieved")
        return resolve({result});
        }
    });  
});
}
