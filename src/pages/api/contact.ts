import * as nodemailer from "nodemailer";

export const ContactApi = async (req: any, res: any) => {
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.strato.com",
        auth: {
            user: "planter@stijnaa.nl",
            pass: process.env.PASSWORD,
        },
    });
    await new Promise((resolve, reject) => {
        transporter.verify((err: Error | null, success: true) => {
            if (err) {
                console.log(err);
                reject(err);
                res.status(501).json({ msg: "connection could not bee made", error: err });
            } else {
                console.log("Server is ready to take our messages");
                resolve(success);
            }
        });
    });

    const emailForPlanter = {
        from: "planter@stijnaa.nl",
        to: "stijnaa@gmail.com",
        subject: `Aanvraag van ${req.body.email}`,
        html: `<a href="mailto:${req.body.email}">${req.body.email}</p>`,
    };

    const emailForClient = {
        from: "planter@stijnaa.nl",
        to: req.body.email,
        subject: "Bevestiging Planter.nl",
        html: `
    <p>We hebben je aanvraag ontvangen! We gaan er zo snel mogelijk mee aan de slag.</p>
    <p>Groetjes Tjerk van Planter.nl</p>`,
    };

    await new Promise((resolve, reject) => {
        // send mail
        transporter.sendMail(emailForPlanter, (err: Error | null, info: nodemailer.SentMessageInfo) => {
            if (err) {
                console.log(err);
                reject(err);
                res.status(501).json({ msg: "connection could not bee made", error: err });
            } else {
                console.log("Server is ready to take our messages");
                resolve(info);
            }
        });

        transporter.sendMail(emailForClient, (err: Error | null, info: nodemailer.SentMessageInfo) => {
            if (err) {
                console.log(err);
                reject(err);
                res.status(501).json({ msg: "connection could not bee made", error: err });
            } else {
                console.log("Server is ready to take our messages");
                resolve(info);
            }
        });
    });
    res.status(200).json();
};

export default ContactApi;
