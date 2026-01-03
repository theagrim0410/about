const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());



app.get("/", (req, res) => {
  res.status(200).send("Backend is running!");
});

app.post("/", async (req, res) => {
  console.log("POST / endpoint hit");
  res.status(200).json({ success: true, message: "Server is up and running" });
});

app.get("/message", (req, res) => {
  res.status(200).send("Message endpoint is working!");
});

app.post("/message", async (req, res) => {
  const { name, email, subject, message} = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "All required fields missing",
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL,
      subject: subject || "New Contact Message",
      html: `
        <h3>New Contact Form Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
