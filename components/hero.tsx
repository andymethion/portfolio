import { useTranslations } from "next-intl"
import { Button } from "./ui/button"
import Link from "next/link"
import { Copy } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const t = useTranslations("Hero")

  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="text-center text-4xl font-bold text-balance">
        {t("title")}
      </h1>
      <p className="text-center text-balance">{t("description")}</p>
      <Button variant="secondary" asChild>
        <Link href="mailto:andymethion@gmail.com">
          <Copy />
          andymethion@gmail.com
        </Link>
      </Button>
      <Image
        className="rounded-md"
        loading="eager"
        width={1458}
        height={1508}
        src="/hero.png"
        alt="Hero Image"
      />
    </div>
  )
}
