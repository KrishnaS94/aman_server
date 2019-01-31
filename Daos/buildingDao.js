var con = require('../Mysql_config/DBConfig.js');
var dbFunc = require('../Mysql_config/Connection.js');
const fs   = require('fs');
function building(buildingobject){
    return new Promise(async(resolve, reject)=>{
        console.log(buildingobject,"=>buildingobject");
        var id = buildingobject.id;
       var owner_id=buildingobject.owner_id;
       var type=buildingobject.type;
       var address=buildingobject.address;
        var Buildingname = buildingobject.Buildingname;
        var lat = buildingobject.lat;
        var lon = buildingobject.lon;
      //  console.log("hdfkldhjfdlkh",data)

        var sql = await("INSERT INTO Buildings(owner_id ,type,address,Buildingname,lat,lon) VALUES ('"+ owner_id + "','" +type + "','" + address + "','" + Buildingname +"','" + lat +"','" + lon +"')");
        con.query(sql, function (err, result) {
        if (err) throw err;
        dbFunc.connectionRelease;
        //logger.fatal("DataBase ERR:",err)
        console.log(result,"inserted.......")
        con.query("select * from Buildings", function(err, res) {
            // if (err) throw err;
            // const row = res[0];
            // // Got BLOB data:
            // const data = row.data;
            // console.log("BLOB data read!");
            // // Converted to Buffer:
            // const buf = new Buffer(data, "binary");
            // Write new file out:
            // fs.writeFileSync(outputfile,data);
            // console.log("New file output:", outputfile);
          });
        })
        
        // function readImageFile(file) {
        //   // read binary data from a file:
        //   const bitmap = fs.readFileSync(file);
        //   const data= new Buffer(bitmap);
        //   return data;
        // }
   
       resolve({
            Message: "Add Building done",
           
          })
        })
    }

module.exports={
   building:building
}



