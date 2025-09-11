"use client";

import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { toast } from "sonner";

export default function Main() {
  return (
    <main className="flex justify-center pt-16 pb-8">
      <div className="flex w-11/12 flex-col items-center gap-8 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-6/12 2xl:w-5/12">
        <h1 className="text-center text-4xl font-bold text-balance">{"Je transforme mes idées en programmes fonctionnels et évolutifs."}</h1>
        <p className="text-center text-balance">{"Jeune développeur passionné par les programmes d'automatisation et le développement blockchain. Do you live and breathe code?"}</p>
        <a href="mailto:andymethion@gmail.com">
          <Button className="text-muted-foreground flex w-fit cursor-pointer items-center gap-2" onClick={() => toast("Email copié dans le presse papier")} variant="secondary">
            <Copy />
            <p>andymethion@gmail.com</p>
          </Button>
        </a>
        <img className="rounded-md" draggable="false" src="image.png" />
      </div>
    </main>
  );
}
