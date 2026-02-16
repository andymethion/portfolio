import Image from "next/image";
import Link from "next/link";

type Project = {
  image: string;
  link: string;
  name: string;
  description: string;
};

const projects = [
  {
    image: "/twitter-marketing.jpg",
    link: "https://github.com/d60/twikit",
    name: "Twitter Marketing",
    description:
      "Une suite d'outils de marketing Python automatisant les interactions Twitter via une API non officielle. La suite me permettait de booster l'engagement de comptes ou de tweets et intègre un module de web scraping pour l'extraction de données ciblées à très grande échelle.",
  },
  {
    image: "/the-shit-bot.jpg",
    link: "https://www.theshitbot.com/",
    name: "The Shit Bot",
    description:
      "Un partenariat avec The Shit Bot, une application de bureau d'achat automatisés de sneakers. À l'aide d'une maquette fournie, je m'occuperai de la refonte de leur interface utilisateur en utilisant Angular, un framework web que j'ai découvert dans le cadre de ce partenariat.",
  },
  {
    image: "/quadtree.png",
    link: "https://github.com/andymethion/quadtree",
    name: "Quadtree",
    description:
      "Un jeu vidéo développé en Golang mettant l'accent sur l'optimisation algorithmique. Le projet repose sur une modélisation du terrain via un quadtree pour la gestion spatiale, intégrant des mécaniques de jeu avancées telles que le zoom dynamique et un système de téléporteurs.",
  },
  {
    image: "/qui-est-ce.png",
    link: "https://github.com/andymethion/qui-est-ce",
    name: "Qui Est Ce ?",
    description:
      "Une implémentation du jeu Qui-Est-Ce?, développée en Kotlin et JavaFX. Les joueurs peuvent démarrer une nouvelle partie ou rejoindre celle d'un ami. Les joueurs posent des questions à tour de rôle jusqu'à ce qu'ils soient prêts à désigner la personne concordante.",
  },
  {
    image: "/tcp-file-transfer-server.png",
    link: "https://github.com/andymethion/tcp-file-transfer-server",
    name: "Serveur de transfert de fichiers TCP",
    description:
      "Un serveur TCP Golang pour des transferts de fichiers. Ses principales fonctionnalités comprennent une arborescence interactive du répertoire du serveur, des téléchargements de fichiers et une partie administrateur permettant de gérer la visibilité des fichiers/dossiers.",
  },
  {
    image: "/lego-store.png",
    link: "https://github.com/andymethion/lego-store",
    name: "Boutique Lego",
    description:
      "Une application CRUD full-stack utilisant PHP CodeIgniter 4 qui simule une boutique Lego. Les fonctionnalités clés comprennent la gestion des comptes utilisateurs, un panier d'achat et un panneau d'administration pour la mise à jour et la gestion dynamiques des produits.",
  },
] as Project[];

export default function Projects() {
  return (
    <section className="flex justify-center py-8" id="projects">
      <div className="flex w-11/12 flex-col gap-8 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12 2xl:w-6/12">
        <h1 className="text-center text-4xl font-bold">Mes projects</h1>
        {projects.map((project) => (
          <div className="flex flex-col items-center gap-4" key={project.name}>
            <Link
              className="relative h-64 w-full"
              href={project.link}
              target="_blank"
            >
              <Image
                className="rounded-md object-cover"
                src={project.image}
                alt={project.name}
                fill={true}
              />
            </Link>
            <Link
              className="text-2xl font-bold"
              href={project.link}
              target="_blank"
            >
              {project.name}
            </Link>
            <p className="text-center text-balance">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
