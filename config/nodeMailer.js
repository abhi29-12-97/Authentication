import nodemailer from "nodemailer";
let transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "abhigarg7099@gmail.com", // generated ethereal user
    pass: "8929119242", // generated ethereal password
  },
});
