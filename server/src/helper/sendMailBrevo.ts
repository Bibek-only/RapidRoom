import { BrevoClient } from '@getbrevo/brevo';

const brevo = new BrevoClient({
  apiKey: process.env.BREVO!,
});

async function sendMail() {
  try {
    const result = await brevo.transactionalEmails.sendTransacEmail({
      subject: "Your Subject Here",
      htmlContent: "<h1>Hello</h1><p>This is a test email.</p>",
      sender: { name: "Your Name / Project", email: "your-verified-sender@gmail.com" },
      to: [{ email: "recipient@example.com", name: "Recipient Name" }],
    });
    console.log("Email sent:", result);
  } catch (err) {
    console.error("Send failed:", err);
  }
}

sendMail();