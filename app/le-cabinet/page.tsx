import { getMarkdownContent } from "@/lib/markdown";
import Image from "next/image";

export default async function HomePage() {
  const { frontmatter } = await getMarkdownContent(
    "content/pages/le-cabinet.md"
  );

  const { title, hero } = frontmatter;

  return (
    <main className="min-h-screen flex flex-col items-center p-4">
      {title && (
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          {title}
        </h1>
      )}
      {hero && (
        <div className="w-full max-w-4xl mb-6">
          <Image
            src={hero}
            alt="Cabinet Banner"
            width={1200}
            height={400}
            className="rounded shadow-md object-cover w-full h-auto max-w-80 mx-auto"
          />
        </div>
      )}

      <ul>
        <li>
          Découverte de son fonctionnement cérébral : votre enfant va apprendre
          comment fonctionne son cerveau.
        </li>
        <li>
          Gestion des émotions : votre enfant développera des compétences
          socio-émotionnelles, gagnera en réussite et maîtrisera mieux ses
          émotions.
        </li>
        <li>
          Mise en place de stratégies pédagogiques efficaces, adaptées à votre
          enfant. Il disposera d&apos;outils pour apprendre, mémoriser et
          transférer les apprentissages. Il saura s&apos;appuyer sur ses points
          forts et ses réussites, retrouvant ainsi le plaisir d&apos;apprendre.
          Il gagnera en autonomie.
        </li>
      </ul>
      <h2 className="text-xl font-gray-800 my-6 font-bold">
        Comment je procède ?
      </h2>
      <p>
        <b className="text-lg">En faisant de sa différence une force</b>. Je
        m&apos;appuie sur les neurosciences, la gestion mentale, la psychologie
        et la didactique des apprentissages. Ma visée est de favoriser
        l&apos;autonomie de l&apos;apprenant en lui fournissant les compétences
        nécessaires pour qu&apos;il puisse agir de manière indépendante. Lors de
        notre premier rendez-vous <b>gratuit</b>, nous évaluerons ensemble vos
        besoins et objectifs afin de vous proposer un suivi personnalisé et
        adapté.
      </p>
    </main>
  );
}
