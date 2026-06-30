"use server"

export async function sendContactMessage(
  email: string,
  subject: string,
  message: string
) {
  await fetch(process.env.WEBHOOK!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      embeds: [
        {
          color: 0x22c55e,
          title: "New Contact Message",
          fields: [
            {
              name: "Email",
              value: `\`\`\`${email}\`\`\``,
            },
            {
              name: "Subject",
              value: `\`\`\`${subject}\`\`\``,
            },
            {
              name: "Message",
              value: `\`\`\`${message}\`\`\``,
            },
          ],
          timestamp: new Date(),
        },
      ],
    }),
  })
}
