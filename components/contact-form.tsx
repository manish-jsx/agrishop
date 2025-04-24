"use client"
import { useFormState } from "react-dom"
import { useFormStatus } from "react-dom"
import { submitContactForm, type ContactFormState } from "@/app/[lang]/actions/contact-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle2 } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface ContactFormProps {
  dictionary: {
    form: {
      title: string
      name: string
      namePlaceholder: string
      email: string
      emailPlaceholder: string
      phone: string
      phonePlaceholder: string
      subject: string
      subjectPlaceholder: string
      message: string
      messagePlaceholder: string
      submit: string
    }
    validation: {
      required: string
      invalidEmail: string
      minLength: string
    }
    success: string
    error: string
  }
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" className="w-full bg-green-700 hover:bg-green-800" disabled={pending}>
      {pending ? "Submitting..." : "Send Message"}
    </Button>
  )
}

export default function ContactForm({ dictionary }: ContactFormProps) {
  const initialState: ContactFormState = {}
  const [state, formAction] = useFormState(submitContactForm, initialState)

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold mb-6">{dictionary.form.title}</h2>

      {state.success && (
        <Alert className="mb-6 bg-green-50 border-green-200">
          <CheckCircle2 className="h-4 w-4 text-green-600" />
          <AlertTitle className="text-green-800">Success</AlertTitle>
          <AlertDescription className="text-green-700">{state.message}</AlertDescription>
        </Alert>
      )}

      {state.errors?._form && (
        <Alert className="mb-6 bg-red-50 border-red-200">
          <AlertCircle className="h-4 w-4 text-red-600" />
          <AlertTitle className="text-red-800">Error</AlertTitle>
          <AlertDescription className="text-red-700">{state.errors._form}</AlertDescription>
        </Alert>
      )}

      <form action={formAction} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">
              {dictionary.form.name} <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              placeholder={dictionary.form.namePlaceholder}
              className={state.errors?.name ? "border-red-500" : ""}
              required
            />
            {state.errors?.name && <p className="text-sm text-red-500">{state.errors.name[0]}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              {dictionary.form.email} <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder={dictionary.form.emailPlaceholder}
              className={state.errors?.email ? "border-red-500" : ""}
              required
            />
            {state.errors?.email && <p className="text-sm text-red-500">{state.errors.email[0]}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm font-medium">
            {dictionary.form.phone}
          </Label>
          <Input
            id="phone"
            name="phone"
            placeholder={dictionary.form.phonePlaceholder}
            className={state.errors?.phone ? "border-red-500" : ""}
          />
          {state.errors?.phone && <p className="text-sm text-red-500">{state.errors.phone[0]}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject" className="text-sm font-medium">
            {dictionary.form.subject} <span className="text-red-500">*</span>
          </Label>
          <Input
            id="subject"
            name="subject"
            placeholder={dictionary.form.subjectPlaceholder}
            className={state.errors?.subject ? "border-red-500" : ""}
            required
          />
          {state.errors?.subject && <p className="text-sm text-red-500">{state.errors.subject[0]}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-sm font-medium">
            {dictionary.form.message} <span className="text-red-500">*</span>
          </Label>
          <Textarea
            id="message"
            name="message"
            placeholder={dictionary.form.messagePlaceholder}
            rows={5}
            className={state.errors?.message ? "border-red-500" : ""}
            required
          />
          {state.errors?.message && <p className="text-sm text-red-500">{state.errors.message[0]}</p>}
        </div>

        <SubmitButton />
      </form>
    </div>
  )
}
