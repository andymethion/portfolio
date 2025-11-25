"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email(),
  subject: z.string().nonempty(),
  message: z.string().nonempty(),
});

const socials = [
  {
    name: "Gmail",
    href: "mailto:andymethion@gmail.com",
    icon: Mail,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/andymethion/",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/andymethion",
    icon: Github,
  },
];

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    fetch("https://discord.com/api/webhooks/1417596283400753295/FbH-aBebarMQJ6hHeQQRszlKez8thLtN_RAsEbPShuLrgj3JD8FLQ8KcTHh4Zq-ck2mS", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: "",
        tts: false,
        embeds: [
          {
            id: 873938079,
            fields: [
              {
                id: 484504047,
                name: "Email",
                value: `\`\`\`${values.email}\`\`\``,
              },
              {
                id: 612549731,
                name: "Sujet",
                value: `\`\`\`${values.subject}\`\`\``,
              },
              {
                id: 879236972,
                name: "Message",
                value: `\`\`\`${values.message}\`\`\``,
              },
            ],
            color: 2278750,
            timestamp: new Date(),
            title: "Nouveau message",
          },
        ],
        components: [],
        actions: {},
        flags: 0,
      }),
    }).then(() => {
      toast("Votre message a bien été envoyé !");
      form.reset();
    });
  }

  return (
    <section className="flex justify-center pt-8 pb-16" id="contact">
      <div className="flex w-11/12 flex-col gap-8 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12 2xl:w-6/12">
        <p className="text-center text-4xl font-bold">Me contacter</p>
        <Form {...form}>
          <form
            className="flex flex-col gap-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Votre email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sujet</FormLabel>
                  <FormControl>
                    <Input placeholder="Votre sujet" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Votre message" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="w-full cursor-pointer"
              type="submit"
              variant="secondary"
            >
              Soumettre
            </Button>
          </form>
        </Form>
        <div className="flex gap-4">
          {socials.map((social) => (
            <Button
              asChild
              className="flex-1"
              key={social.name}
              variant="secondary"
            >
              <Link href={social.href} target="_blank">
                {<social.icon />}
                {social.name}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
