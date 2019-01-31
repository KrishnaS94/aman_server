var con = require('../Mysql_config/DBConfig.js');
var dbFunc = require('../Mysql_config/Connection.js');

function consent(consentformobject){
    return new Promise((resolve, reject)=>{
        console.log(consentformobject,"=>consentformobject");
        var consent_id= consentformobject.consent_id;
        var facp_working_condition = consentformobject.facp_working_condition
        var facp_readiness =consentformobject.facp_readiness;
        var annual_maintenance_contract =consentformobject.annual_maintenance_contract;
        var sql = "INSERT INTO Consentform(consent_id, facp_working_condition,facp_readiness,annual_maintenance_contract) VALUES ('" + consent_id + "','" + facp_working_condition + "','" +facp_readiness + "','" + annual_maintenance_contract + "')";
        con.query(sql, function (err, result) {
        if (err) throw err;
        dbFunc.connectionRelease;
        //logger.fatal("DataBase ERR:",err)
        console.log(result,"inserted.......")
       resolve({
            Message: "consent done",
                  })
        })
    })
}
module.exports={
    consent:consent
}