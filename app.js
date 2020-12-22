const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');

const transporter = nodemailer.createTransport({
     service: 'gmail',
     auth: {
         xoauth2: xoauth2.createXOAuth2Generator({
             user: 'amir.rma69@gmail.com',
             pass:'Gb696969+',
             clientId: '838971535835-14khqk8ppqlb4icnd0u86oa6dme6hngd.apps.googleusercontent.com',
             clientSecret: 'YN_eIpAht-mTDd4PGlVrgDnw',
             refreshToken:'1//04zdcCGtNi5jaCgYIARAAGAQSNwF-L9IrIHVdoczda0zEtg2up4HQfH-AMZruSq6Y8Np5Kj3slqhfFu5R7iw3g9ReALlxOZf2xEU'
         })
     }
 })

const mailOptions = {
    from: 'amir.rma69@gmail.com',
    to:'amirajpc69@gmail.com',
    subject:'test',
    text:'hi amoqli'
}

transporter.sendMail(mailOptions , function(err,res){
    if(err){
        console.log(err);
    }else{
        console.log('mail has sent');
    }
})