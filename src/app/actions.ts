"use server"

import { sendEmail } from "@/lib/emailjs";

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, message: "All fields are required." };
  }

  const response = await sendEmail({ name, email, message });
  return response;
}

// export async function submitContactForm(formData: FormData) {
//   // Simulate a delay
//   await new Promise((resolve) => setTimeout(resolve, 1000))

//   const name = formData.get("name")
//   const email = formData.get("email")
//   const message = formData.get("message")

//   // Here you would typically send an email or save to a database
//   console.log("Form submission:", { name, email, message })

//   return {
//     message: "Thanks for your message! I'll get back to you soon.",
//   }
// }

