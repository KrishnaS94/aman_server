var con = require('../Mysql_config/DBConfig.js');
var dbFunc = require('../Mysql_config/Connection.js');
var registerform = require('../Daos/registerDao.js');
var otpfun = require('../utils/otp.js');
var emailotpfun = require('../utils/email');
const SendOtp = require('sendotp');
const sendOtp = new SendOtp('254625AbVGrmks5c2c92bd');
var bcSdk = require('../Fabric_SDK/invoke');

function register(registerobject){
    return new Promise( async (resolve, reject)=>{
        var email_id = registerobject.email;
       
        console.log("hai");
        console.log(!email_id)
        if(!email_id){
          console.log("email is not null")
         return reject({
            "status":400,
            "message":"Please provide Mandatory fields",
            "رسالة": "يرجى تقديم حقول إلزامية"
          })
        }
        else{
   
           var result = await registerform.verify_user(registerobject)
      
        console.log(result.result.length != 0);
       
        dbFunc.connectionRelease;
        if(result.result.length != 0){
      return reject({
          "status":409,
          "message":"User Already Registered",
                  الرسالة: "مستخدم مسجل بالفعل",
        })
        }
        else{	
          var otp1 = await otpfun.otpgen();
          var otp = otp1.otp
          console.log("in core before mail")
          await emailotpfun.emailotp(email_id,otp)
           var result =  await registerform.insert_user(registerobject,otp)
          let id = email_id;
           var userdetails = {
               "userId" : id,
                "transactionstring" : registerobject 
           }
           bcSdk.updatetransaction({ updatedetails: userdetails})
        console.log(result,"inserted.......")
       return resolve ({   status: 200,
       "message": "You are successfully registered",
       الرسالة: "أنت مسجل بنجاح"}) 
       }
      }
      });
}
module.exports={
    register:register
}