const nodemailer = require('nodemailer');
require('dotenv').config({ path: '.env' });

export default async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.NEXT_SMTP_USER,
      pass: process.env.NEXT_SMTP_PASSWORD,
    },
  });

  const mailData = {
    from: email,
    to: 'devdaniel0426@gmail.com',
    subject: `Contact form submission from ${name}`,
    html: `<p>You have a contact form submission</p>
    <p><strong>Name</strong> : ${name}</p>
    <p><strong>Email</strong> : ${email}</p>
    <p><strong>Message</strong> : ${message}</p>`,
  };

  await transporter.sendMail(mailData, (err) => {
    if (err) {
      console.log(err.message);
      res.json(500);
    }
    res.json({ code: 200, status: 'message sent' });
  });
};
