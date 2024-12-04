const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Function to send an email
const sendEmail = async (recipient, subject, body) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: recipient,
      subject,
      html: body,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent: ${info.messageId}`);
    return info;
  } catch (error) {
    console.error(`Failed to send email: ${error.message}`);
    throw new Error("Error sending email");
  }
};

module.exports = { sendEmail };
