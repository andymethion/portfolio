import { Button } from "@/components/ui/button";

export default function AboutMe() {
  return (
    <section className="flex justify-center py-8" id="aboutme">
      <div className="flex w-11/12 flex-col gap-8 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-6/12 2xl:w-5/12">
        <p className="text-center text-4xl font-bold">À propos de moi</p>
        <p className="text-center text-balance">{"Bonjour ! Je m'appelle Andy, étudiant en informatique à l'IUT de Nantes. Je me considère comme un jeune développeur passionné ayant débuté dès le collège par la création de sites internet."}</p>
        <p className="text-center text-balance">{"Avec le temps, mon intérêt s'est porté sur le développement backend, et plus particulièrement sur la réalisation de programmes automatisés capables de simuler des comportements humains sur des sites internet."}</p>
        <p className="text-center text-balance">{"J'ai découvert la blockchain en vendant des programmes d'automatisation à des particuliers. Cette technologie futuriste est appelée à transformer profondément notre perception de l'argent, de la transparence et de la propriété."}</p>
        <p className="text-center text-balance">{"La blockchain est un sujet qui me passionne au point d'y penser quotidiennement. C'est dans ce contexte que je me suis également engagé dans le développement blockchain. Il s'agit probablement de l'un des écosystèmes les plus solides à ce jour."}</p>
        <p className="text-center text-balance">{"Mon projet professionnel consiste à adopter de bonnes habitudes de travail en entreprise et à perfectionner mes compétences dans des domaines que je considère comme essentiels. En parallèle, je souhaite continuer à développer mes projets personnels."}</p>
        <div className="flex gap-4">
          <Button className="flex-1 cursor-pointer" variant="secondary">
            Curriculum Vitae
          </Button>
          <Button className="flex-1 cursor-pointer" variant="secondary">
            Lettre de motivation
          </Button>
        </div>
      </div>
    </section>
  );
}
