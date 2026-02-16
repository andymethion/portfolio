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
    image: "/twitter.jpg",
    link: "https://github.com/d60/twikit",
    name: "Twitter",
    description:
      "Mon premier projet d'envergure a consisté à développer des outils d'automatisation pour Twitter, que je vendais ensuite à l'unité à des particuliers via Discord ou Telegram. Pour cela, j'analysais les requêtes https échangées entre mon navigateur et les serveurs de Twitter, afin de les reproduire et d'imiter le comportement humain. Grâce à un simple programme Python, j'étais ainsi capable de piloter des milliers de comptes Twitter en utilisant leurs cookies de connexion.",
  },
  {
    image: "/the-shit-bot.jpg",
    link: "https://www.theshitbot.com/",
    name: "The Shit Bot",
    description:
      "Deux ans plus tard, j'ai découvert que d'autres utilisaient des techniques similaires aux miennes, mais appliquées aux sites de sneakers afin d'acheter en masse les modèles les plus recherchés. C'est à ce moment-là que j'ai entendu parler de The Shit Bot, une référence dans ce domaine. En constatant que leur interface graphique laissait à désirer, je les ai spontanément contactés sur Twitter pour leur proposer mes compétences. Cette collaboration m'a permis de me former à Angular, qui est depuis devenu mon framework web favori",
  },
  {
    image: "/blockchain.webp",
    link: "https://github.com/andymethion/listener-rs",
    name: "Blockchain",
    description:
      "Les paiements en crypto-monnaies que je recevais ont éveillé mon intérêt pour la blockchain. Cela m'a permis d'approfondir des notions telles que la cryptographie, les réseaux peer-to-peer et la décentralisation. J'ai vite compris que la blockchain constituait un écosystème innovant dont je souhaitais m'inspirer. J'ai ainsi réalisé quelques projets personnels, comme un traqueur d'adresses ou un gestionnaire d'événements.",
  },
  {
    image: "/quadtree.png",
    link: "https://github.com/andymethion/quadtree",
    name: "Quadtree",
    description:
      "Ce projet m'a été proposé durant ma première année d'études en informatique. Il s'agissait de concevoir un petit jeu vidéo en Go, dans lequel il fallait progressivement ajouter de nouvelles fonctionnalités. L'objectif principal était de modéliser le sol à l'aide d'un quadtree, une structure arborescente similaire à un arbre binaire, mais avec quatre enfants par nœud. Nous avons également développé d'autres fonctionnalités, telles que le zoom ou encore l'utilisation de téléporteurs.",
  },
  {
    image: "/qui-est-ce.png",
    link: "https://github.com/andymethion/qui-est-ce",
    name: "Qui Est Ce ?",
    description:
      "Une implémentation du jeu Qui-Est-Ce?, développée en Kotlin et JavaFX. Les joueurs peuvent démarrer une nouvelle partie ou rejoindre celle d'un ami. Les joueurs posent des questions à tour de rôle jusqu'à ce qu'ils soient prêts à désigner la personne concordante.",
  },
  {
    image: "/tcp-server.png",
    link: "https://github.com/andymethion/tcp-file-transfer-server",
    name: "Serveur de fichier TCP",
    description:
      "Un serveur TCP Golang pour des transferts de fichiers. Ses principales fonctionnalités comprennent une arborescence interactive du répertoire du serveur, des téléchargements de fichiers et une partie administrateur permettant de gérer la visibilité des fichiers/dossiers.",
  },
  {
    image: "/lego.png",
    link: "https://github.com/andymethion/lego",
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
