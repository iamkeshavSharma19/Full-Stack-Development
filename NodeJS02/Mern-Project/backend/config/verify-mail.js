import path from "node:path";
import fs from "node:fs";
import handleBars from "handlebars";
import nodemailer from "nodemailer";

export const verifyEmail = async (token, email) => {
  //&writing the path of "template.hbs"
  const filePath = path.join(import.meta.dirname, "template.hbs");
  const emailTemplateSource = fs.readFileSync(filePath, "utf-8");
  //~compile method will return us a function
  const template = handleBars.compile(emailTemplateSource);
  let htmlToSend = template({ token: encodeURIComponent(token) });

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  const mailConfiguration = {
    from: process.env.MAIL_USER,
    to: email,
    subject: "Email Verification",
    html: htmlToSend,
  };

  transport.sendMail(mailConfiguration, (err, info) => {
    if (err) {
      throw new Error(err);
    }
    console.log("Email sent successfully", info);
  });
};
