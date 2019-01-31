
var con = require('../Mysql_config/DBConfig.js');
var dbFunc = require('../Mysql_config/Connection.js');


function login(loginobject) {

  return new Promise( function (resolve,reject){
      // console.log("hiiiii",params)
     var email_id=loginobject.email_id;
     console.log("in dao",email_id);
      //var password=loginobject.password;
      var sql = "SELECT  * FROM Residents where email_id ='" + email_id + "'";
     con.query(sql,function(err,result){
      if(err) { console.log("something",err)
          return reject({ "status": 400, "body": 'Cannot insert the data' })}
          else{
                console.log(result,"achieved")
          return resolve({ result});
          }
          
      }); 
  })
}
module.exports={
    login:login
}