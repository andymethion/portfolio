import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Drawer, DrawerContent, DrawerTrigger, DrawerClose } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="border-b-border flex h-14 justify-center border-b border-dashed">
      <div className="flex w-11/12 items-center justify-between">
        <p>Andy's Portfolio</p>
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink className="cursor-pointer" href="#aboutme">
                About Me
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="cursor-pointer" href="#projects">
                Projects
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="cursor-pointer" href="#techstack">
                Techstack
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="cursor-pointer" href="#socials">
                Socials
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
                      About Me
                    </Button>
                  </a>
                </DrawerClose>
                <DrawerClose asChild>
                  <a href="#projects">
                    <Button className="w-full cursor-pointer" variant="ghost">
                      Projects
                    </Button>
                  </a>
                </DrawerClose>
                <DrawerClose asChild>
                  <a href="#techstack">
                    <Button className="w-full cursor-pointer" variant="ghost">
                      Techstack
                    </Button>
                  </a>
                </DrawerClose>
                <DrawerClose asChild>
                  <a href="#socials">
                    <Button className="w-full cursor-pointer" variant="ghost">
                      Socials
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
