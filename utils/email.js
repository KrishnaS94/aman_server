
const nodemailer = require('nodemailer');
function emailotp(email,otp){
   // return new Promise((resolve,reject)=>{
var encodedMail = new Buffer(email).toString('base64');
     console.log("in email.js")
     console.log(email,"email");
     console.log(otp.otp,"otp");
var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: "sanedservices2019@gmail.com",
    pass: "Sanedwebservices1!"
  }
 });

   var link = "https://sanedbackend.herokuapp.com/email/verify?mail=" + encodedMail;
 
var mailOptions = {
  transport: transporter,
  from: "Saned Services" + "<sanedservices2019@gmail.com>",
  to: email,
  subject: 'Saned Service-OTP Verification',

  html: "Email confirmation from Saned services,<br> Your one time password is.<br> " + otp.otp + "<br>" +
    "تأكيد بالبريد الإلكتروني من خدمات أمان ، <br> Your One time password is. <br>" + otp.otp

};
console.log("after mail options");
 transporter.sendMail(mailOptions, (error, info) => {
  
  if (error) {
    console.log("Mail send error: ", error);
   // return reject({ "status": 400, "body": 'Cannot fetch the data' })}
  }
  else {
    console.log(result,"achieved")
//return resolve('success');
}

})
   // })
}

module.exports={
    emailotp:emailotp
}

       