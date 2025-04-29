"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Main() {
  return (
    <main className="flex justify-center pt-16 pb-8">
      <div className="flex w-11/12 flex-col items-center gap-8 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-6/12 2xl:w-5/12">
        <h1 className="text-center text-4xl font-bold text-balance">I turn ideas into seamless digital experiences</h1>
        <p className="text-center text-balance">Young developer interested in automation scripts and blockchain development. Do you live and breathe code?</p>
        <Button onClick={() => toast("Email copied to clipboard")} className="text-muted-foreground flex w-fit cursor-pointer items-center gap-2" variant="ghost">
          <svg className="h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l140.1 0L400 115.9 400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-204.1c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-32-48 0 0 32c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l32 0 0-48-32 0z" />
          </svg>
          <p>andymethion@gmail.com</p>
        </Button>
        <img className="rounded-md" src="image.png" alt="image" draggable="false" />
      </div>
    </main>
  );
}
