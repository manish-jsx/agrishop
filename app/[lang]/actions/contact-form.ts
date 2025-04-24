"use server"

import { z } from "zod"

// Define the form schema for validation
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

export type ContactFormState = {
  errors?: {
    name?: string[]
    email?: string[]
    phone?: string[]
    subject?: string[]
    message?: string[]
    _form?: string[]
  }
  success?: boolean
  message?: string
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  // Validate form data
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  })

  // If validation fails, return errors
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
      message: "Please correct the errors in the form.",
    }
  }

  // Get the validated data
  const { name, email, phone, subject, message } = validatedFields.data

  try {
    // In a real application, you would send this data to your backend or email service
    // For now, we'll simulate a successful submission with a delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Return success state
    return {
      success: true,
      message: "Thank you for your message! We will get back to you soon.",
    }
  } catch (error) {
    // Return error state
    return {
      errors: {
        _form: ["An error occurred while submitting the form. Please try again."],
      },
      success: false,
      message: "Failed to submit the form. Please try again.",
    }
  }
}
