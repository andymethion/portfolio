import { useLocale, useTranslations } from "next-intl"
import { Button } from "./ui/button"
import Link from "next/link"

const items = ["first", "second", "third", "fourth"]

export default function Biography() {
  const locale = useLocale()
  const t = useTranslations("Biography")

  const linkHref =
    locale === "en"
      ? "/CV_Andy_Methion_Fullstack_Developer_EN.pdf"
      : "/CV_Andy_Methion_Developpeur_Fullstack_FR.pdf"

  return (
    <section className="flex flex-col items-center gap-8" id="biography">
      <h2 className="text-center text-4xl font-bold">{t("title")}</h2>
      {items.map((item) => (
        <p key={item} className="text-justify">
          {t(item)}
        </p>
      ))}
      <Button className="w-fit" asChild>
        <Link href={linkHref} target="_blank">
          {t("resume")}
        </Link>
      </Button>
    </section>
  )
}
