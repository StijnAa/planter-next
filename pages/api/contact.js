const ContactApi = async (req, res) => {
  require("dotenv").config();
  let nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.strato.com",
    auth: {
      user: "planter@stijnaa.nl",
      pass: process.env.password,
    },
    secure: true,
    rateDelta: 10000,
    rateLimit: 1, // max 1 messages/second
  });
  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
        res.status(500).json();
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  const mailData = {
    from: "planter@stijnaa.nl",
    to: "stijnaa@gmail.com",
    subject: `Aanvraag van ${req.body.name}`,
    html: `<div><p>Name: ${req.body.name}</p>
    <p>Email: ${req.body.email}</p>
    <p>Phone: ${req.body.phone}</p>
    <p>Length: ${req.body.length}</p>
    <p>Width: ${req.body.width}</p>
    <p>Height: ${req.body.height}</p>
    <p>Wood: ${req.body.wood}</p>
    <p>Fixture: ${req.body.fixture}</p>
    <p>Water System: ${req.body.waterSystem ? "Yes" : "No"}</p>
    <p>Light System: ${req.body.lightSystem ? "Yes" : "No"}</p>
    <p>Installment: ${req.body.installment ? "Yes" : "No"}</p></div>`,
  };

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
        res.status(500).json();
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });
  res.status(200).json();
};

export default ContactApi;
