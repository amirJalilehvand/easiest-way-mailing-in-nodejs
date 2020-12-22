const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');

const transporter = nodemailer.createTransport({
     service: 'gmail',
     auth: {
         xoauth2: xoauth2.createXOAuth2Generator({
             user: '<your email>',
             pass:'<your password>',
             clientId: 'clientId you recieve from google API console',
             clientSecret: 'client sercret you recieve from google API console',
             refreshToken:'refresh token you recieve from google api playground'
         })
     }
 })

const mailOptions = {
    from: 'sender email',
    to:'reciever email',
    subject:'subject of mail',
    text:'text of mail'
}

transporter.sendMail(mailOptions , function(err,res){
    if(err){
        console.log(err);
    }else{
        console.log('mail has sent');
    }
})