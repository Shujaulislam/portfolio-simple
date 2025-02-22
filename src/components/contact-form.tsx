"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { sendEmail } from "@/lib/emailjs"

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [pending, setPending] = useState(false)
  const [message, setMessage] = useState("")
  const [errors, setErrors] = useState<FormErrors>({})

  const validateForm = (formData: FormData): FormErrors => {
    const errors: FormErrors = {};
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const messageText = formData.get("message") as string;

    if (!name || name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters long";
    }

    if (!email) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!messageText || messageText.trim().length < 10) {
      errors.message = "Message must be at least 10 characters long";
    }

    return errors;
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setPending(false);
      return;
    }

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const messageText = formData.get("message") as string;

    try {
      const response = await sendEmail({ name, email, message: messageText });
      setMessage(response.message);
      if (response.success) {
        event.currentTarget.reset();
        setErrors({});
      }
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setPending(false);
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <Input 
            id="name" 
            name="name" 
            required 
            className="transition-all duration-200 focus:scale-[1.02] focus:ring-2 focus:ring-primary"
            onChange={handleInputChange}
          />
          {errors.name && (
            <p className="text-sm text-red-500 mt-1">{errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <Input 
            id="email" 
            name="email" 
            type="email" 
            required 
            className="transition-all duration-200 focus:scale-[1.02] focus:ring-2 focus:ring-primary"
            onChange={handleInputChange}
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email}</p>
          )}
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <Textarea 
            id="message" 
            name="message" 
            required 
            className="transition-all duration-200 focus:scale-[1.02] focus:ring-2 focus:ring-primary resize-none"
            onChange={handleInputChange}
          />
          {errors.message && (
            <p className="text-sm text-red-500 mt-1">{errors.message}</p>
          )}
        </div>
        <Button type="submit" className="w-full transition-all duration-200 hover:scale-105 active:scale-95" disabled={pending}>
          {pending ? "Sending..." : "Send Message"}
        </Button>
        {message && <p className="text-sm text-center mt-4 text-muted-foreground">{message}</p>}
      </form>
    </Card>
  )
}

