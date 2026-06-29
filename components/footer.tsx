import { useTranslations } from "next-intl"

export default function Footer() {
  const t = useTranslations("Footer")

  return (
    <footer className="mx-auto grid h-14 w-9/10 place-items-center md:w-2xl">
      <p>{t("author")}</p>
    </footer>
  )
}
