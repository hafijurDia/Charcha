//***THIS IS A SERVER SCRIPT-TO SEND AUTOMATED EMAIL***

const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function EmailSender() {

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "mail.nilamhouse.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "secret@nilamhouse.com", // generated ethereal user
      pass: "Smartman#1", // generated ethereal password
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
      }
  });

  const options={
    from: "secret@nilamhouse.com", // sender address
    to: "farukuzzaman@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  }
//
//   send mail with defined transport object
  let info = await transporter.sendMail(
    options  );
 console.log(info)
 
}

//test succeded
//EmailSender()

