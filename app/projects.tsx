export default function Projects() {
  return (
    <section className="flex justify-center py-8" id="projects">
      <div className="flex w-11/12 flex-col gap-8 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-6/12 2xl:w-5/12">
        <h1 className="text-center text-4xl font-bold">My Projects</h1>
        <div className="flex flex-col items-center gap-4">
          <img className="h-64 w-full rounded-md object-cover" src="twitter.jpg" alt="twitter.jpg" draggable="false" />
          <p className="text-2xl font-bold">Twitter</p>
          <p className="text-center text-balance">My first big project was to develop automation programs on Twitter and sell them by the unit to individuals on Discord or Telegram. I analyzed the https requests between my browser and Twitter's servers to replicate these requests and simulate human behavior. So, with a simple python program, I could control thousands of Twitter accounts using their connection cookies.</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img className="h-64 w-full rounded-md object-cover" src="the-shit-bot.jpg" alt="the-shit-bot.jpg" draggable="false" />
          <p className="text-2xl font-bold">The Shit Bot</p>
          <p className="text-center text-balance">Two years later, I discovered people doing the same thing as me, but on sneaker websites, with the aim of buying the most coveted pairs in large quantities. That's when I discovered The Shit Bot, one of the leaders in their field. Noticing that their GUI was bad, I naturally contacted them on Twitter to offer my services. With this new mission I learned to use the Angular framework, which to this day remains my favorite web framework.</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img className="h-64 w-full rounded-md object-cover" src="blockchain.webp" alt="blockchain.webp" draggable="false" />
          <p className="text-2xl font-bold">Blockchain</p>
          <p className="text-center text-balance">The crypto-currency payments I was receiving got me interested in blockchain. It helped me understand concepts such as cryptography, peer-to-peer networks and decentralization. I quickly realized that blockchain was a healthy ecosystem and that I wanted to build on it. I made small personal projects like an address tracker or an event handler.</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img className="h-64 w-full rounded-md object-cover" src="quadtree.png" alt="quadtree.png" draggable="false" />
          <p className="text-2xl font-bold">Quadtree</p>
          <p className="text-center text-balance">This project was proposed to me in my first year of computer science studies. It's a small video game in golang where you have to develop more and more features. The main aim of this exercise was to represent the ground as a quadtree, a kind of binary tree with 4 children. We also had to implement other functions such as zooming in and out, using teleporters and so on.</p>
        </div>
      </div>
    </section>
  );
}
