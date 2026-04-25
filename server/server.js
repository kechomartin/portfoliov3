const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// 1. Health Check Route (Good for Cloud Monitoring)
app.get('/', (req, res) => {
  res.send('Server is running smoothly! 🚀');
});

// 2. Transporter Configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // This must be a 16-character App Password
  },
});

// 3. Contact Route
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Portfolio: ${subject || 'New Message'} from ${name}`,
    html: `
      <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
        <h2 style="color: #7f77dd;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="background: #f9f9f9; padding: 15px; border-radius: 8px;">${message}</p>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('✅ Mail sent successfully to:', process.env.EMAIL_USER);
    res.status(200).json({ success: true, message: 'Mail sent!' });
  } catch (error) {
    console.error('Mail Error:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});