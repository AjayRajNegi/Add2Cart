import express from "express";
import twilio from "twilio";

const router = express.Router();

router.post("/send-sms", (req, res) => {
  const accountSid = "AC1dab5973b0ed726993e681700c60d8d9";
  const authToken = "6fdfe93ecd7de1b41864b0b5b50f29ab";

  const client = twilio(accountSid, authToken);

  const { name, location, mobileNo, items, bill, date, time } = req.body;

  async function createMessage(
    data = { name, location, mobileNo, items, bill, date, time }
  ) {
    try {
      const message = await client.messages.create({
        body: `Hi ${data.name}, your order:\n${data.items.join(
          "\n"
        )} is ready,\nLocation is ${data.location}.\nThe bill generated is ${
          data.bill
        }.\nThe mobile number of customer is ${data.mobileNo}`,
        from: "whatsapp:+14155238886",
        to: "whatsapp:+917500277575",
      });

      console.log(message.body);
      console.log(data);
      console.log(data.mobileNo);
    } catch (error) {
      console.error(error);
    }
  }
  createMessage();

  res.json({ message: "Order received successfully!" });
});

export default router;
