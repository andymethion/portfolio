import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function Projects() {
  return (
    <section className="flex justify-center" id="projects">
      <div className="flex w-11/12 flex-col gap-8">
        <h1 className="text-center text-4xl font-bold">My Projects</h1>
        <div className="flex flex-col items-center gap-4">
          <Carousel className="w-full max-w-9/12">
            <CarouselContent>
              <CarouselItem>
                <Card>
                  <CardContent>
                    <img className="h-[300px] w-full rounded-md object-cover" src="image.png" alt="image.png" />
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card>
                  <CardContent>
                    <img className="h-[300px] w-full rounded-md object-cover" src="image.png" alt="image.png" />
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <p className="text-2xl font-bold">Twitter</p>
          <p className="text-center text-balance">My first big project was to develop automation programs on Twitter and sell them by the unit to individuals on Discord or Telegram. I analyzed the https requests between my browser and Twitter's servers to replicate these requests and simulate human behavior. So, with a simple python program, I could control thousands of Twitter accounts using their connection cookies.</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Carousel className="w-full max-w-9/12">
            <CarouselContent>
              <CarouselItem>
                <Card>
                  <CardContent>
                    <img className="h-[300px] w-full rounded-md object-cover" src="image.png" alt="image.png" />
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card>
                  <CardContent>
                    <img className="h-[300px] w-full rounded-md object-cover" src="image.png" alt="image.png" />
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <p className="text-2xl font-bold">The Shit Bot</p>
          <p className="text-center text-balance">Two years later, I discovered people doing the same thing as me, but on sneaker websites, with the aim of buying the most coveted pairs in large quantities. That's when I discovered The Shit Bot, one of the leaders in their field. Noticing that their GUI was bad, I naturally contacted them on Twitter to offer my services. With this new mission I learned to use the Angular framework, which to this day remains my favorite web framework.</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Carousel className="w-full max-w-9/12">
            <CarouselContent>
              <CarouselItem>
                <Card>
                  <CardContent>
                    <img className="h-[300px] w-full rounded-md object-cover" src="image.png" alt="image.png" />
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card>
                  <CardContent>
                    <img className="h-[300px] w-full rounded-md object-cover" src="image.png" alt="image.png" />
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <p className="text-2xl font-bold">Blockchain</p>
          <p className="text-center text-balance">The crypto-currency payments I was receiving got me interested in blockchain. It helped me understand concepts like cryptography, peer-to-peer networks and decentralization. I quickly realized that blockchain is a healthy ecosystem and that it would revolutionize our means of payment and our perception of transparency and ownership. The possibilities offered by blockchain are infinite.</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Carousel className="w-full max-w-9/12">
            <CarouselContent>
              <CarouselItem>
                <Card>
                  <CardContent>
                    <img className="h-[300px] w-full rounded-md object-cover" src="image.png" alt="image.png" />
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card>
                  <CardContent>
                    <img className="h-[300px] w-full rounded-md object-cover" src="image.png" alt="image.png" />
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <p className="text-2xl font-bold">Quadtree</p>
        </div>
      </div>
    </section>
  );
}
