import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function Projects() {
  return (
    <section className="flex justify-center" id="projects">
      <div className="flex w-11/12 flex-col gap-8">
        <h1 className="text-center text-4xl font-bold">My Projects</h1>
        <div className="flex flex-col items-center font-bold text-2xl">
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
          <p>The Shit Bot</p>
        </div>
        <div className="flex flex-col items-center font-bold text-2xl">
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
          <p>Twitter</p>
        </div>
        <div className="flex flex-col items-center font-bold text-2xl">
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
          <p>Quadtree</p>
        </div>
      </div>
    </section>
  );
}
