import nodemailer from "nodemailer";

export const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  console.log(req.body)
  
  // For demonstration, we use credentials from environment variables
  const adminEmail = process.env.ADMIN_EMAIL; // e.g. admin@example.com
  const adminPassword = process.env.ADMIN_PASSWORD; // e.g. secret123

  if (email === adminEmail && password === adminPassword) {
    // Send a login confirmation email via Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your email address
        pass: process.env.EMAIL_PASS, // your email password or app password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email, // sending email to the admin
      subject: "Admin Login Successful",
      text: "You have successfully logged in as admin.",
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error("Error sending login email:", err);
      } else {
        console.log("Login email sent:", info.response);
      }
    });

    // Set a cookie (for demo purposes, not httpOnly so we can read it on client)
    res.cookie("adminToken", "loggedin", { maxAge: 3600000 }); // 1 hour expiration
    return res.status(200).json({ message: "Login successful" });
  } else {
    return res.status(401).json({ error: "Invalid credentials" });
  }
};
