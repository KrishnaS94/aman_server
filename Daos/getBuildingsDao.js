var con = require('../Mysql_config/DBConfig.js');
var dbFunc = require('../Mysql_config/Connection.js');

function buildings(buildingobject){
  return new Promise((resolve, reject)=>{
      console.log(buildingobject,"=>buildingobject");
     // var id = buildingobject.id;
     var buildingname=buildingobject.buildingname;
   //   var type=buildingobject.type;
   //   var address=buildingobject.address;
   //   var buildingname=buildingobject.buildingname;


      var sql = "SELECT  * FROM Buildings";
      //var sql = await("INSERT INTO Buildings(owner_id ,type,address,Buildingname) VALUES ('"+ owner_id + "','" +type + "','" + address + "','" + Buildingname +"')");
      con.query(sql, function (err, result) {
      if (err) throw err;
      dbFunc.connectionRelease;
      //logger.fatal("DataBase ERR:",err)
      console.log(result,"inserted.......")
     resolve({
          Message: "get Buildings done",
           result:result
        })
      })
  })
}
module.exports={
 buildings:buildings
}