import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Drawer, DrawerContent, DrawerTrigger, DrawerClose } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="border-b-border flex h-16 justify-center border-b border-dashed">
      <div className="flex w-11/12 items-center justify-between sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-6/12 2xl:w-5/12">
        <p>{"Portfolio d'Andy"}</p>
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink className="cursor-pointer" href="#aboutme">
                À propos de moi
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="cursor-pointer" href="#projects">
                Mes projets
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="cursor-pointer" href="#techstack">
                Ma stack technique
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="cursor-pointer" href="#contact">
                Me contacter
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Drawer>
          <DrawerTrigger className="lg:hidden">
            <svg className="h-5 cursor-pointer" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
            </svg>
          </DrawerTrigger>
          <DrawerContent>
            <div className="m-4 flex justify-center">
              <div className="flex w-11/12 flex-col gap-2">
                <DrawerClose asChild>
                  <a href="#aboutme">
                    <Button className="w-full cursor-pointer" variant="ghost">
                      À propos de moi
                    </Button>
                  </a>
                </DrawerClose>
                <DrawerClose asChild>
                  <a href="#projects">
                    <Button className="w-full cursor-pointer" variant="ghost">
                      Mes projects
                    </Button>
                  </a>
                </DrawerClose>
                <DrawerClose asChild>
                  <a href="#techstack">
                    <Button className="w-full cursor-pointer" variant="ghost">
                      Ma stack technique
                    </Button>
                  </a>
                </DrawerClose>
                <DrawerClose asChild>
                  <a href="#contact">
                    <Button className="w-full cursor-pointer" variant="ghost">
                      Me contacter
                    </Button>
                  </a>
                </DrawerClose>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
}
