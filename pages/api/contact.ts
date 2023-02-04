import * as dotenv from "dotenv";
import * as nodemailer from "nodemailer";

dotenv.config();

export const ContactApi = async (req: any, res: any) => {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.strato.com",
    auth: {
      user: "planter@stijnaa.nl",
      pass: process.env.PASSWORD,
    },
    secure: true,
  });
  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
        res
          .status(501)
          .json({ msg: "connection could not bee made", error: error });
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  const date = new Date();
  const emailForPlanter = {
    from: "planter@stijnaa.nl",
    to: [process.env.TOEMAILONE, process.env.TOEMAILTWO],
    subject: `Aanvraag van ${req.body.name} om ${date}`,
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

  const emailForClient = {
    from: "planter@stijnaa.nl",
    to: req.body.email,
    subject: `Bevestiging Aanvraag Planter.nl`,
    html: `
    <h3>Hey ${
      req.body.name
    }, we hebben je aanvraag ontvangen! We gaan er zo snel mogelijk mee aan de slag.</h3>
    <div><p>Name: ${req.body.name}</p>
    <p>Email: ${req.body.email}</p>
    <p>Phone: ${req.body.phone}</p>
    <p>Length: ${req.body.length}</p>
    <p>Width: ${req.body.width}</p>
    <p>Height: ${req.body.height}</p>
    <p>Wood: ${req.body.wood}</p>
    <p>Fixture: ${req.body.fixture}</p>
    <p>Water System: ${req.body.waterSystem ? "Yes" : "No"}</p>
    <p>Light System: ${req.body.lightSystem ? "Yes" : "No"}</p>
    <p>Installment: ${req.body.installment ? "Yes" : "No"}</p></div>
    
    <h4>Groetjes Tjerk van Planter.nl</h4>`,
  };

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(emailForPlanter, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
        res.status(502).json({ msg: "mail could not be send", error: err });
      } else {
        console.log(info);
        resolve(info);
      }
    });
    transporter.sendMail(emailForClient, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
        res.status(502).json({ msg: "mail could not be send", error: err });
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });
  res.status(200).json();
};

export default ContactApi;
