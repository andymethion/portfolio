import { Card, CardContent, CardTitle } from "@/components/ui/card";

export default function Techstack() {
  return (
    <section className="flex justify-center py-8" id="techstack">
      <div className="flex w-11/12 flex-col items-center gap-8 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-6/12 2xl:w-5/12">
        <h1 className="text-center text-4xl font-bold">Techstack</h1>
        <div className="grid grid-cols-3 gap-4">
          <Card className="col-span-2">
            <CardTitle className="pl-6">Databases</CardTitle>
            <CardContent className="flex h-full flex-wrap justify-center gap-4 wrap-normal">
              <img className="w-[calc(96*0.15625vw)] sm:w-24" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" draggable="false" />
              <img className="w-[calc(96*0.15625vw)] sm:w-24" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" draggable="false" />
              <img className="w-[calc(96*0.15625vw)] sm:w-24" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" draggable="false" />
            </CardContent>
          </Card>
          <Card className="row-span-5">
            <CardTitle className="text-center">Misc</CardTitle>
            <CardContent className="flex h-full flex-col items-center justify-center gap-4">
              <img className="w-[calc(96*0.15625vw)] sm:w-24" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/discordjs/discordjs-original.svg" draggable="false" />
              <img className="w-[calc(96*0.15625vw)] sm:w-24" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" draggable="false" />
              <img className="w-[calc(96*0.15625vw)] sm:w-24" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bun/bun-original.svg" draggable="false" />
              <img className="w-[calc(96*0.15625vw)] sm:w-24" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" draggable="false" />
              <img className="w-[calc(96*0.15625vw)] sm:w-24" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" draggable="false" />
              <img className="w-[calc(96*0.15625vw)] sm:w-24" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jetbrains/jetbrains-original.svg" draggable="false" />
              <img className="w-[calc(96*0.15625vw)] sm:w-24" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" draggable="false" />
              <img className="w-[calc(96*0.15625vw)] sm:w-24" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" draggable="false" />
            </CardContent>
          </Card>
          <Card className="col-span-2 row-span-2">
            <CardTitle className="pl-6">Languages</CardTitle>
            <CardContent className="flex h-full flex-wrap justify-center gap-4 wrap-normal">
              <img className="w-[calc(96*0.15625vw)] sm:w-24" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" draggable="false" />
              <img className="w-[calc(96*0.15625vw)] sm:w-24" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" draggable="false" />
              <img className="w-[calc(96*0.15625vw)] sm:w-24" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg" draggable="false" />
              <img className="w-[calc(96*0.15625vw)] sm:w-24" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" draggable="false" />
              <img className="w-[calc(96*0.15625vw)] sm:w-24" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg" draggable="false" />
              <img className="w-[calc(96*0.15625vw)] sm:w-24" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-original.svg" draggable="false" />
            </CardContent>
          </Card>
          <Card className="col-span-2 row-span-2">
            <CardTitle className="pl-6">Websites</CardTitle>
            <CardContent className="flex h-full flex-wrap justify-center gap-4 wrap-normal">
              <img className="w-[calc(96*0.15625vw)] sm:w-24" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" draggable="false" />
              <img className="w-[calc(96*0.15625vw)] sm:w-24" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" draggable="false" />
              <img className="w-[calc(96*0.15625vw)] sm:w-24" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" draggable="false" />
              <img className="w-[calc(96*0.15625vw)] sm:w-24" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" draggable="false" />
              <img className="w-[calc(96*0.15625vw)] sm:w-24" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" draggable="false" />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
