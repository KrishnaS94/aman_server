let insertquery = require('../Daos/scheduleDao')
//const message = require('../Util/messages')
//const language_detect = require('../Util/language_detect')
 let date = require('date-and-time');
 let moment = require('moment')



exports.schedule =(building_id,schedule_time,requestdate) =>{

    return new Promise(async(resolve, reject) => {
     var scheduledata={
        //  "id":id,
        "schedule_time":schedule_time,
        "requestdate":requestdate
     }
    //  let schedule_time = scheduleobject.schedule_time;
    // let requestdate = scheduleobject.requestdate;
    let today = new Date();
   let schedule_date = moment(today).format("YYYY/MM/DD HH:mm:ss");
    let data =[building_id,schedule_time,requestdate]
    console.log(data,"query")
    console.log(schedule_date,"schedule date")
    let query=insertquery.schedule_insert(data)
       console.log(query !=0,"data inserted")
     
       return  resolve({
        status: 200,
        message:"Appeal Done",
        
        
    })
})
           };