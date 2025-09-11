export default function Projects() {
  return (
    <section className="flex justify-center py-8" id="projects">
      <div className="flex w-11/12 flex-col gap-8 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-6/12 2xl:w-5/12">
        <h1 className="text-center text-4xl font-bold">Mes projects</h1>
        <div className="flex flex-col items-center gap-4">
          <a className="w-full" href="https://github.com/d60/twikit" target="_blank">
            <img className="h-64 w-full rounded-md object-cover" draggable="false" src="twitter.jpg" />
          </a>
          <a className="text-2xl font-bold" href="https://github.com/d60/twikit" target="_blank">
            Twitter
          </a>
          <p className="text-center text-balance">{"Mon premier projet d'envergure a consisté à développer des outils d'automatisation pour Twitter, que je vendais ensuite à l'unité à des particuliers via Discord ou Telegram. Pour cela, j'analysais les requêtes https échangées entre mon navigateur et les serveurs de Twitter, afin de les reproduire et d'imiter le comportement humain. Grâce à un simple programme Python, j'étais ainsi capable de piloter des milliers de comptes Twitter en utilisant leurs cookies de connexion."}</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <a className="w-full" href="https://www.theshitbot.com/" target="_blank">
            <img className="h-64 w-full rounded-md object-cover" draggable="false" src="the-shit-bot.jpg" />
          </a>
          <a className="text-2xl font-bold" href="https://www.theshitbot.com/" target="_blank">
            The Shit Bot
          </a>
          <p className="text-center text-balance">{"Deux ans plus tard, j'ai découvert que d'autres utilisaient des techniques similaires aux miennes, mais appliquées aux sites de sneakers afin d'acheter en masse les modèles les plus recherchés. C'est à ce moment-là que j'ai entendu parler de The Shit Bot, une référence dans ce domaine. En constatant que leur interface graphique laissait à désirer, je les ai spontanément contactés sur Twitter pour leur proposer mes compétences. Cette collaboration m'a permis de me former à Angular, qui est depuis devenu mon framework web favori."}</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <a className="w-full" href="https://github.com/andymethion/listener-rs" target="_blank">
            <img className="h-64 w-full rounded-md object-cover" draggable="false" src="blockchain.webp" />
          </a>
          <a className="text-2xl font-bold" href="https://github.com/andymethion/listener-rs" target="_blank">
            Blockchain
          </a>
          <p className="text-center text-balance">{"Les paiements en crypto-monnaies que je recevais ont éveillé mon intérêt pour la blockchain. Cela m'a permis d'approfondir des notions telles que la cryptographie, les réseaux peer-to-peer et la décentralisation. J'ai vite compris que la blockchain constituait un écosystème innovant dont je souhaitais m'inspirer. J'ai ainsi réalisé quelques projets personnels, comme un traqueur d'adresses ou un gestionnaire d'événements."}</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <a className="w-full" href="https://github.com/andymethion/quadtree" target="_blank">
            <img className="h-64 w-full rounded-md object-cover" draggable="false" src="quadtree.png" />
          </a>
          <a className="text-2xl font-bold" href="https://github.com/andymethion/quadtree" target="_blank">
            Quadtree
          </a>
          <p className="text-center text-balance">{"Ce projet m'a été proposé durant ma première année d'études en informatique. Il s'agissait de concevoir un petit jeu vidéo en Go, dans lequel il fallait progressivement ajouter de nouvelles fonctionnalités. L'objectif principal était de modéliser le sol à l'aide d'un quadtree, une structure arborescente similaire à un arbre binaire, mais avec quatre enfants par nœud. Nous avons également développé d'autres fonctionnalités, telles que le zoom ou encore l'utilisation de téléporteurs."}</p>
        </div>
      </div>
    </section>
  );
}
