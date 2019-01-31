const cors = require('cors');
var login = require('./core/login.js')
var consentform = require('./core/consentform.js')
var register = require('./core/register.js')
let Appeal = require('./core/Appeal');
var history = require('./core/history');
var building = require('./core/building');
var assesserview = require('./core/assesserview');
var schedule = require('./core/schedule');
var getBuildings= require('./core/getBuildings');
var assessment= require('./core/assessment');
const con = require('./Mysql_config/DBConfig');

module.exports = router => {
//=======================loginservice==================================================//
    router.post('/login', cors(), function(req, res){
        var loginobject= req.body;
        login.loginuser(loginobject)
        .then(result=>{
                 res.send({
                     result:result,
                
            })
          })
        .catch(err => res.status(err.status).json({
            message: err.message

        }))
      })
//=======================registerservice===============================================//
      router.post('/register', cors(), function(req, res){
          
        var registerobject= req.body;
        console.log("register object",registerobject)
        register.register(registerobject)
        .then(result=>{
                 res.send({
                     result:result,
               
            })
          })
        .catch(err => res.status(err.status).json({
            message: err.message
        }))
      })
      router.post('/consentform', cors(), function(req, res){
        var consentformobject= req.body;
        consentform.consentform(consentformobject)
        .then(result=>{
                 res.send({
                     result:result,
                
            })
          })
        .catch(err => res.status(err.status).json({
            message: err.message
        }))
      })
//=============================schedule====================================
router.post('/schedules', cors(), function(req, res){
    //   var id=""
    var schedule_time= req.body.schedule_time
    var requestdate=req.body.requestdate
    var building_id = req.body.building_id
    var type=req.body.type
   // schedule.schedule(building_id,schedule_time,requestdate,)

    if (!schedule_time || !requestdate) {

        res
            .status(400)
            .json({
                message: 'Please enter the details completely !'
            });

    }
    else {

        schedule.schedule(building_id,schedule_time,requestdate)
        .then(result => {
        res.send({
            "message": "schedule details saved",
            "status": true,
            result:result,
           
       });


              
            })
        .catch(err => res.status(err.status).json({
            message: err.message
        }))
    }
})
//=======================================================================
      router.post('/getdetails', cors(), function(req, res){
        var id= req.body.id;
        history.getHistory(id)
        .then(result=>{
                 res.send({
                     result:result,
                
            })
          })
        .catch(err => res.status(err.status).json({
            message: err.message
        }))
      })
    router.post('/Appeal', cors(), (req, res) => {
        const Appeal_Object = req.body;
        console.log(Appeal_Object)
        Appeal.Appeal(Appeal_Object)
                .then(result => {
                    console.log(result)
                    res
                        .status(result.status)
                        .json({
                            message: result,
                         });
    
                })
                .catch(err => res.status(err.status).json({
                    message: err.message
                }).json({
                    status: err.status
                }));
        
    });

//===================================addbuilding=============================================//
router.post("/emailotpverification", cors(), (req, res) => {
    var otp = req.body.otp;
    console.log(otp);
    var email_id = req.body.email_id;
   console.log(otp);
   con.query("SELECT * FROM Residents where otp='" + otp+ "'", function(error, results, fields) {
     if (error) {
       throw error;
     } else {
     
       if (results.length != 0) {
        
         if (results[0].otp == req.body.otp) {
           
           var verify_email = "Y"
           con.query("UPDATE Residents SET verify_email = '" + verify_email + "' WHERE otp = '" + results[0].otp + "'", function(error, results, fields) {});
           res.send({
             status: "true",
             "message": "You are successfully registered",
             الرسالة: "أنت مسجل بنجاح"
           });
         }} else {
           res.send({
             status: "false",
             "message": "Invalid one time password",
             رسالة: "كلمة مرور غير صالحة مرة واحدة"
           });
         }
       }
   });
   });
router.post('/AddsingleBuilding', cors(), function(req, res){
    var buildingobject= req.body;
   // var image=req.body.image
   
    
    // const inputfile = "data.png";
    // const outputfile = "output.png";
    
    // Read buffer of an image file:
   // const data = readImageFile(inputfile); // `data`'s type is Buffer
    
//       else {
//          // INSERT THE FILE NAME OF IMAGE INTO MYSQL
//          connection.connect(); 
//          connection.query('INSERT INTO images VALUES ?', 
//          {file : newPath }, function(err) { 
//          if (err) {
//              res.status(500);
//              res.send(err);
//          }
//          else {
//              connection.end();
//              res.status(200);
//              res.send({ status: "Success" });
//           }
//          });
//       }
//     });
//   }
//  var file = fs.readFileSync(__dirname + "/images" + "/" + req.file.originalname);
// var file = __dirname + "/images" + "/" + req.file.originalname;


// var imageData = fs.readFileSync(__dirname + "/images" + "/" + req.file.originalname);
// Image.create({
// 	type: 'png',
// 	name: 'JSA Banner',
// 	data: imageData
// }).then(image => {
// 	try{
// 		fs.writeFileSync(__dirname + '/static/assets/tmp/tmp-jsa-header.png', image.data);		
        
// 		// exit node.js app
// 		process.exit(0);
// 	}catch(e){
// 		console.log(e);
// 	}
// })
// var Image= {
//     img: fs.readFileSync(__dirname + '/static/assets/tmp/tmp-jsa-header.png'),
//     file_name: 'Dog'
// };

// console.log("image",Image)
    building.buildings(buildingobject)
    .then(result=>{
             res.send({
                 result:result,
            message: "mock mock"
        })
      })
    .catch(err => res.status(err.status).json({
        message: err.message
    }))



});
//===================================getbuildings======================================================//
router.post('/getBuildings', cors(), function(req, res){
    var buildingobject= req.body;
    console.log(buildingobject,"data");
    getBuildings.getbuildings(buildingobject)
    .then(result=>{
             res.send({
                 result:result,
            message: "mock mock"
        })
      })
    .catch(err => res.status(err.status).json({
        message: err.message
    }))
  })
//=======================================================================================================

router.post('/Assessment', cors(), function(req, res){
    var id= req.body.id
     var status=req.body.status
    //  assessment.assessment(id,status)
  
      if (!id || !status.trim()) {
  
          res
              .status(400)
              .json({
                  message: 'Please enter the details completely !'
              });
  
      }
      else {
  
         assessment.assessment(id,status)
          .then(result => {
          res.send({
              "message": "schedule details saved",
              "status": true,
              result:result,
             
         });
  
  
                
              })
          .catch(err => res.status(err.status).json({
              message: err.message
          }))
      }
  });
  //==========================assesser-view=====================================================//
  router.get('/assesser-view', cors(), function(req, res){
    assesserview.assesserview()
    .then(result=>{
             res.send({
                 result:result.result.result,
            
        })
      })
    .catch(err => res.status(err.status).json({
        message: err.message
    }))
  })

}

