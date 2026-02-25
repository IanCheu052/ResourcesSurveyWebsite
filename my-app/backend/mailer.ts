import nodemailer from "nodemailer";
import dotenv from "dotenv";
import "server-only";
dotenv.config();

//Testing the transporter, you can remove this after you confirm that the transporter works
const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: process.env.NODEMAILER_EMAIL, // your email
        pass: process.env.NODEMAILER_PASS // the app password you generated, paste without spaces
    },
    secure: true,
    port: 465
});
(async () => {
  await transporter.sendMail({
  from: process.env.NODEMAILER_EMAIL, // your email
  to: process.env.NODEMAILER_EMAIL, // the email address you want to send an email to
  subject: "Contact Form Submission", // The title or subject of the email
  html: "<h1>Contact Form Submission</h1><p>A new contact form submission has been received.</p>" // I like sending my email as html, you can send \
           // emails as html or as plain text
});

console.log("Email sent");
})();


// export async function sendEmail({
//   subject,
//   html,
//   user
// }: {
//   subject: string;
//   html: string;
//   user: string;
// }) {
//   try {
//     await transporter.sendMail({
//       from: process.env.NODEMAILER_EMAIL,
//       to: process.env.NODEMAILER_EMAIL,
//       subject,
//       html
//     });
//     console.log("Email sent FROM" + user);
//   } catch (error) {
//     console.error(error);
//   }
// }

export async function sendEmail(subject: string, html: string) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASS
    }
  });

  await transporter.sendMail({
    from: process.env.NODEMAILER_EMAIL,
    to: process.env.NODEMAILER_EMAIL,
    subject,
    html
  });
}