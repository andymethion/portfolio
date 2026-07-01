import { useTranslations } from "next-intl"

export default function Biography() {
  const t = useTranslations("Biography")

  return (
    <section className="flex flex-col gap-8 [&>p]:text-justify" id="biography">
      <h2 className="text-center text-4xl font-bold">{t("title")}</h2>
      <p>{t("first")}</p>
      <p>{t("second")}</p>
      <p>{t("third")}</p>
      <p>{t("fourth")}</p>
    </section>
  )
}
