import fs from "fs";
import juice from "juice";
import nodemailer from "nodemailer";
import nunjucks from "nunjucks";
import formidable from "formidable";
import getEnv, { envSchema } from "../../../config/env";
import getBundledFilePath from "../../../utils/getBundledFilePath";

const template = getBundledFilePath("emailTemplate", "index.njk");

type DataItem = {
    label: string;
    value: string | string[] | { label: string; value: string };
    order: number;
};

type Data = {
    formTitle: string;
    email: string;
    fields: Record<string, DataItem>;
};

const formEnvSchema = envSchema
    .pick({
        MAIL_HOST: true,
        MAIL_PORT: true,
        MAIL_SENDER: true,
        SITE_TITLE: true,
    })
    .required();

const createAttachementsObject = (fileUploads: formidable.File[]) => {
    return fileUploads.map((file) => {
        const filename = file.originalFilename || file.newFilename;
        return { filename, content: fs.createReadStream(file.filepath) };
    });
};

const validation = formEnvSchema.safeParse(getEnv());

const sendMail = ({ formTitle, email, fields }: Data, fileUploads: formidable.File[]) => {
    if (!validation.success) {
        throw validation.error;
    }
    const { SITE_TITLE, MAIL_HOST, MAIL_SENDER, MAIL_PORT } = validation.data;
    // User and Password can be used when you want to send mails locally.
    const { MAIL_USER, MAIL_PASSWORD } = getEnv();

    const transporter = nodemailer.createTransport({
        host: MAIL_HOST,
        port: Number(MAIL_PORT),
        ...(MAIL_USER &&
            MAIL_PASSWORD && {
                auth: {
                    user: MAIL_USER,
                    pass: MAIL_PASSWORD,
                },
            }),
    });

    const transporterReturn = transporter.sendMail({
        from: `${formTitle} ${SITE_TITLE} <${MAIL_SENDER}>`,
        to: MAIL_SENDER,
        replyTo: email,
        subject: formTitle,
        html: juice(nunjucks.render(template, { formTitle, fields })),
        ...(fileUploads.length > 0 && { attachments: createAttachementsObject(fileUploads) }),
    });

    return transporterReturn;
};

export default sendMail;
