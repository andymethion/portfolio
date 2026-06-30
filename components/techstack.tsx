import { ReactNode } from "react"
import Cassandra from "./brands/cassandra"
import Mongodb from "./brands/mongodb"
import Oracle from "./brands/oracle"
import Postgresql from "./brands/postgresql"
import Redis from "./brands/redis"
import Sqlite from "./brands/sqlite"
import Angular from "./brands/angular"
import Codeigniter from "./brands/codeigniter"
import Fastapi from "./brands/fastapi"
import Nestjs from "./brands/nestjs"
import Nextjs from "./brands/nextjs"
import Spring from "./brands/spring"
import Go from "./brands/go"
import Java from "./brands/java"
import Kotlin from "./brands/kotlin"
import Python from "./brands/python"
import Rust from "./brands/rust"
import Typescript from "./brands/typescript"
import DigitalOcean from "./brands/digitalocean"
import Docker from "./brands/docker"
import Git from "./brands/git"
import Jenkins from "./brands/jenkins"
import Jest from "./brands/jest"
import Linux from "./brands/linux"
import { useTranslations } from "next-intl"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"
import Link from "next/link"

type Category = "database" | "frameworks" | "languages" | "mics"

interface Item {
  icon: () => ReactNode
  name: string
  href: string
}

const categories: {
  name: Category
  cardClassName: string
  cardTitleClassName: string
  cardContentClassName: string
}[] = [
  {
    name: "database",
    cardClassName: "col-span-2 row-span-2",
    cardTitleClassName: "",
    cardContentClassName: "grid grid-cols-3 grid-rows-2 gap-4",
  },
  {
    name: "frameworks",
    cardClassName: "col-span-2 row-span-2",
    cardTitleClassName: "",
    cardContentClassName: "grid grid-cols-3 grid-rows-2 gap-4",
  },
  {
    name: "languages",
    cardClassName: "col-span-2 row-span-2",
    cardTitleClassName: "",
    cardContentClassName: "grid grid-cols-3 grid-rows-2 gap-4",
  },
  {
    name: "mics",
    cardClassName: "col-span-1 col-start-3 row-span-6 row-start-1",
    cardTitleClassName: "text-center",
    cardContentClassName: "grid grid-cols-1 grid-rows-6 gap-4",
  },
]

const items: Record<Category, Item[]> = {
  database: [
    {
      icon: Cassandra,
      name: "Cassandra",
      href: "https://cassandra.apache.org/",
    },
    {
      icon: Mongodb,
      name: "MongoDB",
      href: "https://mongodb.com/",
    },
    {
      icon: Oracle,
      name: "Oracle",
      href: "https://oracle.com/database/",
    },
    {
      icon: Postgresql,
      name: "PostgreSQL",
      href: "https://postgresql.org/",
    },
    {
      icon: Redis,
      name: "Redis",
      href: "https://redis.io/",
    },
    {
      icon: Sqlite,
      name: "SQLite",
      href: "https://sqlite.org/",
    },
  ],
  frameworks: [
    {
      icon: Angular,
      name: "Angular",
      href: "https://angular.dev/",
    },
    {
      icon: Codeigniter,
      name: "CodeIgniter",
      href: "https://codeigniter.com/",
    },
    {
      icon: Fastapi,
      name: "FastAPI",
      href: "https://fastapi.tiangolo.com/",
    },
    {
      icon: Nestjs,
      name: "Nest.js",
      href: "https://nestjs.com/",
    },
    {
      icon: Nextjs,
      name: "Next.js",
      href: "https://nextjs.org/",
    },
    {
      icon: Spring,
      name: "Spring",
      href: "https://spring.io/",
    },
  ],
  languages: [
    {
      icon: Go,
      name: "Go",
      href: "https://go.dev/",
    },
    {
      icon: Java,
      name: "Java",
      href: "https://java.com/",
    },
    {
      icon: Kotlin,
      name: "Kotlin",
      href: "https://kotlinlang.org/",
    },
    {
      icon: Python,
      name: "Python",
      href: "https://python.org/",
    },
    {
      icon: Rust,
      name: "Rust",
      href: "https://rust-lang.org/",
    },
    {
      icon: Typescript,
      name: "TypeScript",
      href: "https://typescriptlang.org/",
    },
  ],
  mics: [
    {
      icon: DigitalOcean,
      name: "DigitalOcean",
      href: "https://digitalocean.com/",
    },
    {
      icon: Docker,
      name: "Docker",
      href: "https://docker.com/",
    },
    {
      icon: Git,
      name: "Git",
      href: "https://git-scm.com/",
    },
    {
      icon: Jenkins,
      name: "Jenkins",
      href: "https://jenkins.io/",
    },
    {
      icon: Jest,
      name: "Jest",
      href: "https://jestjs.io/",
    },
    {
      icon: Linux,
      name: "Linux",
      href: "https://linux.org/",
    },
  ],
}

export default function Techstack() {
  const t = useTranslations("Techstack")

  return (
    <section className="flex flex-col gap-8" id="techstack">
      <h2 className="text-center text-4xl font-bold">{t("title")}</h2>
      <div className="grid grid-cols-3 grid-rows-6 gap-4">
        {categories.map((category) => (
          <Card key={category.name} className={category.cardClassName}>
            <CardHeader>
              <CardTitle className={category.cardTitleClassName}>
                {t(category.name)}
              </CardTitle>
            </CardHeader>
            <CardContent className={category.cardContentClassName}>
              {items[category.name].map((item) => (
                <Tooltip key={item.name}>
                  <TooltipTrigger asChild>
                    <Link href={item.href} target="_blank">
                      {item.icon()}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">{item.name}</TooltipContent>
                </Tooltip>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
