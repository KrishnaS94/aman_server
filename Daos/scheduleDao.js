const con = require('../Mysql_config/DBConfig');


function schedule_insert(values) {

    return new Promise( function (resolve,reject){
       values =[values]
       console.log("values",values)
        let qry= "INSERT INTO Schedule(building_id,schedule_time,requestdate) VALUES ? ";
       con.query(qry,  [values] ,function(err,result){
        if(err) { console.log("something",err)
            return reject({ 
                "status": 400, 
                "body": 'Cannot insert the data' })}
            else{
            return resolve({ result});
            }
            
        }); 
    })
}

module.exports={
    schedule_insert : schedule_insert
}