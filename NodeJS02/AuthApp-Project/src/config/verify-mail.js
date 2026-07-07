import nodeMailer from "nodemailer";
//!first parameter will accept token and the second parameter will accept email.
export const verify = async (token, email) => {
  //!STEP 1: CREATE A TRANSPORT
  const transport = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.AUTH_USER,
      pass: process.env.AUTH_PASS,
    },
  });

  //? STEP2: CONFIGURE A MAIL
  const mailConfiguration = {
    from: process.env.AUTH_USER,
    to: email,
    //?we also have to write the subject of email
    subject: "Verification Email",
    //?whatever be the body of the email, we will write that inside the html
    html: `
      
      <h1>Welcome User</h1>
      <p>Please verify yourself</p>
      <a href='http://localhost:5173/verify-email/${token}'>
      <button >Verify</button>
      </a>
    `,
  };

  //~ STEP3: SEND A MAIL
  //& second parameter is the err first callback
  transport.sendMail(mailConfiguration, (err, info) => {
    if (err) {
      throw new Error(err);
    }

    console.log("Email sent successfully", info);
  });
};
