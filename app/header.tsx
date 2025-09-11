import { Button } from "@/components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerTrigger } from "@/components/ui/drawer";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";
import Link from "next/link";

const sections = [
  { name: "À propos de moi", href: "#aboutme" },
  { name: "Mes projets", href: "#projects" },
  { name: "Ma stack technique", href: "#techstack" },
  { name: "Me contacter", href: "#contact" },
];

export default function Header() {
  return (
    <header className="flex h-16 items-center justify-center">
      <div className="flex w-11/12 justify-between sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-6/12 2xl:w-5/12">
        <p>{"Portfolio d'Andy"}</p>
        <Drawer>
          <DrawerTrigger className="lg:hidden">
            <Menu />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerFooter>
              {sections.map((section) => (
                <DrawerClose asChild key={section.name}>
                  <Button asChild variant="ghost">
                    <Link href={section.href}>{section.name}</Link>
                  </Button>
                </DrawerClose>
              ))}
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {sections.map((section) => (
              <NavigationMenuItem key={section.name}>
                <NavigationMenuLink href={section.href}>{section.name}</NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
