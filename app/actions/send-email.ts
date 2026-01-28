"use server"

import emailjs from "@emailjs/browser"

interface EmailData {
  name: string
  email: string
  message: string
}

export async function sendEmail(data: EmailData) {
  const serviceId = process.env.EMAILJS_SERVICE_ID
  const templateId = process.env.EMAILJS_TEMPLATE_ID
  const publicKey = process.env.EMAILJS_PUBLIC_KEY

  if (!serviceId || !templateId || !publicKey) {
    return { success: false, error: "Email service not configured" }
  }

  try {
    await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
      },
      publicKey
    )
    return { success: true }
  } catch (error) {
    console.error("EmailJS error:", error)
    return { success: false, error: "Failed to send email" }
  }
}
