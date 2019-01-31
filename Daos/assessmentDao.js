var con = require('../Mysql_config/DBConfig.js');
var dbFunc = require('../Mysql_config/Connection.js');

function assessment_insert(values){
        return new Promise((resolve, reject)=>{
            var id=values.id
       var status=values.status
       console.log("dkfhd",status)
       console.log(values,"hiii")
        var sql = "UPDATE Schedule SET status = '" + status + "' WHERE id = '" + id + "'";
        console.log(sql,"dql")
                con.query(sql, function (err, result) {
                if (err) throw err;
                dbFunc.connectionRelease;
        //logger.fatal("DataBase ERR:",err)
        console.log(result,"update.......")
       resolve({
            Message: "consent done",
                  })
        })
    })
}
module.exports={
   assessment_insert: assessment_insert
}