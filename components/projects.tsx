import { useTranslations } from "next-intl"
import { Card, CardContent } from "./ui/card"
import Link from "next/link"
import Image from "next/image"

interface Project {
  image: string
  url: string
  name: string
}

const projects: Project[] = [
  {
    image: "/sqoot.webp",
    url: "https://sqli.com/",
    name: "sqoot",
  },
  {
    image: "/the-shit-bot.webp",
    url: "https://theshitbot.com/",
    name: "the-shit-bot",
  },
  {
    image: "/twitter.webp",
    url: "https://github.com/d60/twikit",
    name: "twitter",
  },
]

export default function Projects() {
  const t = useTranslations("Projects")

  return (
    <section className="flex flex-col gap-8" id="projects">
      <h2 className="text-center text-4xl font-bold">{t("title")}</h2>
      {projects.map((project) => (
        <Card key={project.name}>
          <CardContent className="flex flex-col gap-4">
            <Link href={project.url} target="_blank">
              <div className="relative aspect-video w-full">
                <Image
                  className="rounded-md"
                  fill={true}
                  src={project.image}
                  alt={t(`${project.name}.title`)}
                />
              </div>
            </Link>
            <h3 className="text-center text-2xl font-semibold text-balance">
              {t(`${project.name}.title`)}
            </h3>
            <p className="text-justify">{t(`${project.name}.description`)}</p>
          </CardContent>
        </Card>
      ))}
    </section>
  )
}
