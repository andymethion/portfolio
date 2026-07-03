"use client"

import * as z from "zod"
import { ComponentType, SVGProps } from "react"
import { Mail } from "lucide-react"
import Github from "./brands/github"
import Linkedin from "./brands/linkedin"
import { useTranslations } from "next-intl"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { sendContactMessage } from "@/lib/actions"
import { toast } from "sonner"
import { Field, FieldError, FieldGroup, FieldLabel } from "./ui/field"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import Link from "next/link"

interface Social {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  name: string
  href: string
}

const formSchema = z.object({
  email: z.string().email(),
  subject: z.string().min(8).max(64),
  message: z.string().min(16).max(1024),
})

const socials: Social[] = [
  {
    icon: Mail,
    name: "Email",
    href: "mailto:andymethion@gmail.com",
  },
  {
    icon: Github,
    name: "GitHub",
    href: "https://github.com/andymethion",
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/andymethion/",
  },
]

export default function Contact() {
  const t = useTranslations("Contact")

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      subject: "",
      message: "",
    },
  })

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      await sendContactMessage(data.email, data.subject, data.message)
      toast.success(t("success"))
    } catch (error) {
      console.log(error)
      toast.error(t("error"))
    }
  }

  return (
    <section className="flex flex-col gap-8" id="contact">
      <h2 className="text-center text-4xl font-bold">{t("title")}</h2>
      <form onSubmit={form.handleSubmit(onSubmit)} id="form">
        <FieldGroup>
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="email">
                  {t("email")}
                  <span className="text-destructive">*</span>
                </FieldLabel>
                <Input
                  {...field}
                  aria-invalid={fieldState.invalid}
                  placeholder={t("email")}
                  id="email"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="subject"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="subject">
                  {t("subject")}
                  <span className="text-destructive">*</span>
                </FieldLabel>
                <Input
                  {...field}
                  aria-invalid={fieldState.invalid}
                  placeholder={t("subject")}
                  id="subject"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="message"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="message">
                  {t("message")}
                  <span className="text-destructive">*</span>
                </FieldLabel>
                <Textarea
                  {...field}
                  aria-invalid={fieldState.invalid}
                  placeholder={t("message")}
                  id="message"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>
      </form>
      <Button form="form" type="submit">
        {t("submit")}
      </Button>
      <div className="flex gap-4 [&>a]:flex-1">
        {socials.map((social) => (
          <Button key={social.name} variant="secondary" asChild>
            <Link href={social.href} target="_blank">
              <social.icon />
              {social.name}
            </Link>
          </Button>
        ))}
      </div>
    </section>
  )
}
