import { useTranslations } from "next-intl"
import { Button } from "./ui/button"
import Link from "next/link"
import { Mail } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const t = useTranslations("Hero")

  return (
    <section className="flex flex-col items-center gap-8">
      <h1 className="text-center text-4xl font-bold text-balance">
        {t("title")}
      </h1>
      <p className="text-center text-balance">{t("description")}</p>
      <Button asChild>
        <Link href="mailto:andymethion@gmail.com">
          <Mail />
          andymethion@gmail.com
        </Link>
      </Button>
      <Image
        className="rounded-md"
        loading="eager"
        width={1458}
        height={1508}
        src="/hero.webp"
        alt="Hero Image"
      />
    </section>
  )
}
