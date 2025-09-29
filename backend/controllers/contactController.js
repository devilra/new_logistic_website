const nodemailer = require("nodemailer");

exports.sendContactForm = async (req, res) => {
  try {
    const { name, email, company, phone, country, postcode, enquiry } =
      req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Website Contact" <${process.env.ADMIN_EMAIL}`,
      to: "rockerraja906@gmail.com", //admin email
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email,
      html: `
        <h2>New Enquiry</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Company:</b> ${company || "N/A"}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Country:</b> ${country}</p>
        <p><b>Postcode:</b> ${postcode}</p>
        <p><b>Enquiry:</b> ${enquiry}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res
      .status(200)
      .json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};
