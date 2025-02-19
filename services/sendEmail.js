import nodemailer from 'nodemailer';
import dotenv from "dotenv";

dotenv.config();
// Email Setup
const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    port: 465,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
});

const sendEmail = async (referral) => {
    const receiver = {
        from : process.env.USER_EMAIL,
        to : referral.referee_email,
        subject : `You have been referred 🎉🎉`,
        text : `Hello ${referral.referee_name}, your friend ${process.env.EMAIL_USER} has referred you for the course ${referral.course} at Accredian. Copy and paste above mentioned email to avail 20% discount 🥳` 
    }

    await transporter.sendMail(receiver);
}

export default sendEmail;
