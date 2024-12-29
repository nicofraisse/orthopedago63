import { getMarkdownContent } from "@/lib/markdown";
import Image from "next/image";

export default async function HomePage() {
  const { frontmatter, contentHtml } = await getMarkdownContent(
    "content/pages/orthopedagogie.md"
  );

  const { title, hero } = frontmatter;

  return (
    <main className="min-h-screen bg-gray-5">
      {title && (
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center mt-0">
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
            className="rounded shadow-md object-cover w-full h-auto max-w-xl mx-auto"
          />
        </div>
      )}
      <h2 className="text-xl font-bold text-gray-800 mb-3 text-center">
        Qu&apos;est-ce que l&apos;orthopédagogie ?{" "}
      </h2>
      <p>
        L&apos;orthopédagogie est concernée par la diversité des apprenants qui
        rencontrent des difficultés d&apos;apprentissage et/ou des troubles du
        développement au cours de leur évolution.
      </p>
      <div className="flex justify-center my-7">
        <div
          className="
         items-center justify-center space-x-4 p-4 rounded-lg
         inline-flex mx-auto bg-white shadow-md"
        >
          <Image
            src={"/uploads/photo-profil.jpg"}
            alt="Cabinet Banner"
            width={1200}
            height={400}
            className="rounded-full object-cover w-full h-auto max-w-36"
          />
          <span>Maryline Moins</span>
        </div>
      </div>
      <p className="mb-6">
        Enseignante depuis 30 ans, passionnée en pédagogie et en didactique des
        apprentissages, certifiée en Sciences de l&apos;Education et en
        Orthopédagogie, j&apos;accompagne les enfants et les jeunes de 6 à 18
        ans en leur permettant de découvrir leur plein potentiel et de gagner en
        réussite et en estime de soi.
      </p>
      <h2 className="text-xl font-bold text-gray-800 mb-2">
        Un soutien humain assuré, un accompagnement pédagogique personnalisé
      </h2>
      <p>
        Votre enfant rencontre des difficultés pour apprendre, mémoriser,
        transférer les apprentissages, s&apos;organiser dans son travail. Il
        manque de confiance en lui et se sent souvent stressé lors des examens.
        Il a un trouble dys et/ou TDAH. Vous êtes en quête de solutions pour
        l&apos;aider dans sa scolarité. Alors vous êtes au bon endroit !
      </p>
    </main>
  );
}
