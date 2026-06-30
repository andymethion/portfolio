import { useTranslations } from "next-intl"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu"
import Link from "next/link"
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "./ui/drawer"
import { Menu } from "lucide-react"

interface MyNavigationMenuProps {
  isMobile: boolean
}

interface MyNavigationMenuLinkProps {
  isMobile: boolean
  item: string
}

const items = ["biography", "projects", "techstack", "contact"]

function MyNavigationMenuLink({ isMobile, item }: MyNavigationMenuLinkProps) {
  const t = useTranslations("Header")
  const navigationMenuLinkClassName = `${navigationMenuTriggerStyle()} ${isMobile ? "w-full" : ""}`

  return (
    <NavigationMenuLink className={navigationMenuLinkClassName} asChild>
      <Link href={`#${item}`}>{t(item)}</Link>
    </NavigationMenuLink>
  )
}

function MyNavigationMenu({ isMobile }: MyNavigationMenuProps) {
  const navigationMenuClassName = isMobile
    ? "max-w-none p-4 [&>div]:w-full"
    : "hidden md:flex"

  return (
    <NavigationMenu className={navigationMenuClassName}>
      <NavigationMenuList className={isMobile ? "flex-col" : ""}>
        {items.map((item) => (
          <NavigationMenuItem key={item} className={isMobile ? "w-full" : ""}>
            {isMobile ? (
              <DrawerClose asChild>
                <MyNavigationMenuLink isMobile={isMobile} item={item} />
              </DrawerClose>
            ) : (
              <MyNavigationMenuLink isMobile={isMobile} item={item} />
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default function Header() {
  const t = useTranslations("Header")

  return (
    <header className="mx-auto flex h-14 w-9/10 items-center justify-between md:w-2xl">
      <p className="font-medium">{t("title")}</p>
      <Drawer>
        <DrawerTrigger className="md:hidden">
          <Menu />
        </DrawerTrigger>
        <DrawerContent>
          <MyNavigationMenu isMobile={true} />
        </DrawerContent>
      </Drawer>
      <MyNavigationMenu isMobile={false} />
    </header>
  )
}
