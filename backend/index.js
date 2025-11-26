import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

// --- ROUTE: Handle form submissions ---
app.post("/submit-form", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "Missing fields" });
  }

  try {
    // Configure email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // Or use custom SMTP like "smtp.office365.com"
      auth: {
        user: process.env.EMAIL_USER, // your Gmail
        pass: process.env.EMAIL_PASS, // your app password
      },
    });

    // Prepare email content
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.RECEIVER_EMAIL, // your receiving email
      subject: subject || "New Contact Form Message",
      text: `
        You got a new message from your portfolio contact form:
        -----------------------------------------------------
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    console.log(" Email sent successfully");
    res.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error(" Email error:", error);
    res.status(500).json({ success: false, error: "Failed to send email" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
