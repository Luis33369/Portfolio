"use server"

interface EmailData {
  name: string
  email: string
  message: string
}

export async function sendEmail(data: EmailData) {
  const serviceId = process.env.EMAILJS_SERVICE_ID
  const templateId = process.env.EMAILJS_TEMPLATE_ID
  const publicKey = process.env.EMAILJS_PUBLIC_KEY

  console.log("[v0] EmailJS config check:", {
    hasServiceId: !!serviceId,
    hasTemplateId: !!templateId,
    hasPublicKey: !!publicKey,
  })

  if (!serviceId || !templateId || !publicKey) {
    return { 
      success: false, 
      error: `Email service not configured. Missing: ${!serviceId ? 'EMAILJS_SERVICE_ID ' : ''}${!templateId ? 'EMAILJS_TEMPLATE_ID ' : ''}${!publicKey ? 'EMAILJS_PUBLIC_KEY' : ''}`.trim()
    }
  }

  try {
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
          to_name: "Luis Dario",
        },
      }),
    })

    console.log("[v0] EmailJS response status:", response.status)

    if (!response.ok) {
      const errorText = await response.text()
      console.log("[v0] EmailJS error response:", errorText)
      return { success: false, error: `EmailJS error: ${errorText}` }
    }

    return { success: true }
  } catch (error) {
    console.error("[v0] EmailJS error:", error)
    return { success: false, error: "Failed to send email. Please try again." }
  }
}
