import express from "express";
import twilio from "twilio";

const router = express.Router();

router.post("/send-sms", (req, res) => {
  const accountSid = "AC615721aeff5d9003e99d20e7e96e7509";
  const authToken = "f280a919fa06836cb6914e8e9fa37bc9";
  const client = twilio(accountSid, authToken);

  const { name, location, mobileNo, items, bill, date, time } = req.body;

  async function createMessage(
    data = { name, location, mobileNo, items, bill, date, time }
  ) {
    try {
      const message = await client.messages.create({
        body: `Hi ${data.name}, your order:\n ${data.items} is ready,\n location is ${data.location} Complete your Payment of ${data.bill} now\n and send a screenshot to confirm, FUCK YOU `,
        from: "whatsapp:+14155238886",
        to: "whatsapp:+918433038283",
      });

      console.log(message.body);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  createMessage();

  res.json({ message: "Order received successfully!" });
});

export default router;
