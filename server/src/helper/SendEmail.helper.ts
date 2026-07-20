import { transporter } from "../utils/NodemailerSetup.js";
import { BrevoClient } from "@getbrevo/brevo";

const brevo = new BrevoClient({
    apiKey: process.env.BREVO!,
});

type sendEamilType = {
    to: string;
    subject: string;
    text: string;
};

export const sendEmail = async (obj: sendEamilType) => {
    console.log(obj.subject, obj.to, obj.text);
    try {
        const result = await brevo.transactionalEmails.sendTransacEmail({
            subject: obj.subject,
            htmlContent: obj.text,
            sender: { name: "Rapid Room", email: "bibekbibek966@gmail.com" },
            to: [{ email: obj.to, name: "bibek" }],
        });
        console.log("Email sent:", result);
        return true;
    } catch (err) {
        console.error("Send failed:", err);
        return false; // let the caller know it actually failed
    }
};

export const sendEmail2 = (obj: sendEamilType) => {
    const mailOptions = {
        from: process.env.GOOGLE_EMAIL!,
        to: obj.to,
        subject: obj.subject,
        text: obj.text,
    };

    return transporter.sendMail(mailOptions);
};
