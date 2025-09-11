"use client";

import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

export default function Main() {
  async function copyEmail() {
    await navigator.clipboard.writeText("andymethion@gmail.com");
    toast("Email copié dans le presse-papiers");
  }

  return (
    <main className="flex justify-center pt-16 pb-8">
      <div className="flex w-11/12 flex-col items-center gap-8 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12 2xl:w-6/12">
        <h1 className="text-center text-4xl font-bold text-balance">{"Je transforme mes idées en programmes fonctionnels et évolutifs."}</h1>
        <p className="text-center text-balance">{"Jeune développeur passionné par les programmes d'automatisation et le développement blockchain. Do you live and breathe code?"}</p>
        <Button asChild variant="secondary">
          <Link href="mailto:andymethion@gmail.com" onClick={copyEmail}>
            <Copy />
            <p>andymethion@gmail.com</p>
          </Link>
        </Button>
        <div className="relative aspect-[0.889920424] w-full">
          <Image alt="code" fill={true} src="/code.png" />
        </div>
      </div>
    </main>
  );
}
