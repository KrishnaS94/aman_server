const con = require('../Mysql_config/DBConfig');


function Appeal_insert(params) {

    return new Promise( function (resolve,reject){
        // console.log("hiiiii",params)
        params =[params]
        sql= "INSERT INTO Appeal (service,Description) VALUES ? ";
       con.query(sql,  [params] ,function(err,result){
        if(err) { console.log("something",err)
            return reject({ "status": 400, "body": 'Cannot insert the data' })}
            else{
                //  console.log(result,"achieved")
            return resolve({ result});
            }
            
        }); 
    })
}

module.exports={
    Appeal_insert : Appeal_insert
}