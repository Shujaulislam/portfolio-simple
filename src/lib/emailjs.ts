"use client"

import emailjs from '@emailjs/browser';

interface EmailParams {
  name: string;
  email: string;
  message: string;
}

export const sendEmail = async ({ name, email, message }: EmailParams) => {
  try {
    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      {
        from_name: name,
        from_email: email,
        message,
        to_name: 'Shuja',
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );

    if (response.status === 200) {
      return { success: true, message: 'Message sent successfully!' };
    }
    throw new Error('Failed to send message');
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Failed to send message. Please try again.' };
  }
}