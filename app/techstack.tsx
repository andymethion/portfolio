import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const icons = {
  databases: [
    {
      alt: "sqlite original svg",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
    },
    {
      alt: "postgresql original svg",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    },
    {
      alt: "supabase original svg",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
    },
  ],
  others: [
    {
      alt: "discordjs original svg",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/discordjs/discordjs-original.svg",
    },
    {
      alt: "nodejs original svg",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    },
    {
      alt: "bun original svg",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bun/bun-original.svg",
    },
    {
      alt: "git original svg",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    },
    {
      alt: "vscode original svg",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    },
    {
      alt: "jetbrains original svg",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jetbrains/jetbrains-original.svg",
    },
    {
      alt: "docker original svg",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    },
    {
      alt: "linux original svg",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
    },
  ],
  languages: [
    {
      alt: "python original svg",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    },
    {
      alt: "typescript original svg",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },
    {
      alt: "go original svg",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg",
    },
    {
      alt: "kotlin original svg",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg",
    },
    {
      alt: "rust original svg",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg",
    },
    {
      alt: "solidity original svg",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-original.svg",
    },
  ],
  websites: [
    {
      alt: "html5 original svg",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    },
    {
      alt: "css3 original svg",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },
    {
      alt: "javascript original svg",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      alt: "nextjs original svg",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    },
    {
      alt: "angular original svg",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
    },
  ],
};

export default function Techstack() {
  return (
    <section className="flex justify-center py-8" id="techstack">
      <div className="flex w-11/12 flex-col items-center gap-8 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12 2xl:w-6/12">
        <h1 className="text-center text-4xl font-bold">Ma stack technique</h1>
        <div className="grid grid-cols-3 gap-4">
          <Card className="col-span-2">
            <CardTitle className="pl-6">Bases de données</CardTitle>
            <CardContent className="flex h-full flex-wrap items-center justify-center gap-4 wrap-normal">
              {icons.databases.map((database) => (
                <div
                  className="relative h-[calc(96*0.15625vw)] w-[calc(96*0.15625vw)] sm:h-24 sm:w-24"
                  key={database.alt}
                >
                  <Image alt={database.alt} fill={true} src={database.src} />
                </div>
              ))}
            </CardContent>
          </Card>
          <Card className="row-span-5">
            <CardTitle className="text-center">Autres</CardTitle>
            <CardContent className="flex h-full flex-col items-center justify-center gap-4">
              {icons.others.map((other) => (
                <div
                  className="relative h-[calc(96*0.15625vw)] w-[calc(96*0.15625vw)] sm:h-24 sm:w-24"
                  key={other.alt}
                >
                  <Image alt={other.alt} fill={true} src={other.src} />
                </div>
              ))}
            </CardContent>
          </Card>
          <Card className="col-span-2 row-span-2">
            <CardTitle className="pl-6">Langages</CardTitle>
            <CardContent className="flex h-full flex-wrap items-center justify-center gap-4 wrap-normal">
              {icons.languages.map((language) => (
                <div
                  className="relative h-[calc(96*0.15625vw)] w-[calc(96*0.15625vw)] sm:h-24 sm:w-24"
                  key={language.alt}
                >
                  <Image alt={language.alt} fill={true} src={language.src} />
                </div>
              ))}
            </CardContent>
          </Card>
          <Card className="col-span-2 row-span-2">
            <CardTitle className="pl-6">Sites internet</CardTitle>
            <CardContent className="flex h-full flex-wrap items-center justify-center gap-4 wrap-normal">
              {icons.websites.map((website) => (
                <div
                  className="relative h-[calc(96*0.15625vw)] w-[calc(96*0.15625vw)] sm:h-24 sm:w-24"
                  key={website.alt}
                >
                  <Image alt={website.alt} fill={true} src={website.src} />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
