import { Avatar } from "@/components/avatar";
import Heading, { HeadingTag } from "@/components/heading";
import { getMarkdownContent } from "@/lib/markdown";
import Image from "next/image";
import Link from "next/link";

const Arrow = () => (
  <svg
    width="24"
    height="30"
    viewBox="0 0 24 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 5L12 29M12 29L5 22M12 29L19 22"
      stroke="#2563EB"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default async function HomePage() {
  const { frontmatter } = await getMarkdownContent(
    "content/pages/orthopedagogie.md"
  );

  const { hero } = frontmatter;

  return (
    <main className="min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-16 mt-4">
          <Heading tag={HeadingTag.H1}>
            L'orthopédagogie au service de l'apprenant
          </Heading>
          {hero && (
            <div className="w-full mb-8">
              <Image
                src={hero}
                alt="Cabinet d'orthopédagogie"
                width={1200}
                height={400}
                className="rounded-lg shadow-lg object-cover w-full h-auto max-h-[400px]"
                priority
              />
            </div>
          )}
        </section>

        {/* Target Audience Section */}
        <section className="mb-16">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <p className="text-xl mb-6 text-center">
              Ce site est destiné aux parents en quête de solutions pour aider
              leur enfant à :
            </p>
            <div className="flex flex-col items-center mb-10">
              <ul className="list-disc pl-5 space-y-2 text-lg">
                <li>
                  <span className="font-semibold">
                    mieux apprendre à l'école, au collège, au lycée
                  </span>
                </li>
                <li>
                  <span className="font-semibold">gagner confiance en soi</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-6 mb-4 bg-gradient-to-r from-blue-50 to-indigo-100 rounded-lg border border-blue-100 p-8">
              <div className="group bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-blue-400">
                <p className="text-gray-800 font-sans text-lg">
                  Votre enfant rencontre des difficultés pour apprendre,
                  mémoriser, être attentif en classe ?
                </p>
              </div>
              <div className="group bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-blue-400">
                <p className="text-gray-800 font-sans text-lg">
                  Votre enfant ne réussit pas ses évaluations alors qu'il/elle a
                  appris(e) ses leçons?
                </p>
              </div>
              <div className="group bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-blue-400">
                <p className="text-gray-800 font-sans text-lg">
                  Votre enfant a besoin d'un « petit coup de pouce » dans ses
                  apprentissages ?
                </p>
              </div>
              <div className="group bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-blue-400">
                <p className="text-gray-800 font-sans text-lg">
                  Votre enfant n'arrive pas à gérer ses émotions ?
                </p>
              </div>
              <div className="group bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-blue-400">
                <p className="text-gray-800 font-sans text-lg">
                  Votre enfant a des besoins particuliers (trouble dys et/ ou
                  TDAH) ?
                </p>
              </div>
              <div className="group bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-blue-400">
                <p className="text-gray-800 font-sans text-lg">
                  Vous êtes en quête d'informations pour aider votre enfant ?
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-30 blur-lg"></div>
              <div className="relative bg-white p-8 rounded-lg text-center">
                <p className="text-3xl font-bold mb-6 font-sans text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Alors vous êtes au bon endroit.
                </p>

                <Link href="/contact">
                  <button className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
                    <span className="mr-2">Prendre rendez-vous</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What is Orthopedagogy Section */}
        <section className="mb-16">
          <Heading tag={HeadingTag.H2}>
            Qu'est-ce que l'orthopédagogie ?
          </Heading>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="text-lg leading-relaxed text-gray-700">
              <p className="mb-8 italic border-l-4 border-blue-300 pl-4">
                L'orthopédagogie est « la science de l'éducation dont l'objet
                est l'évaluation et l'intervention relatives aux apprenants
                susceptibles de présenter ou présentant des difficultés
                d'apprentissage scolaire, incluant les troubles d'apprentissage
                »
                <span className="text-sm text-gray-500 block mt-2">
                  (source : L'ADOQ)
                </span>
              </p>
            </div>

            <div className="my-12 p-12 bg-gradient-to-r from-blue-50 to-indigo-100 rounded-lg border border-blue-100 text-center font-sans">
              <div className="p-4 border-2 rounded-md bg-blue-600 text-white text-xl font-bold">
                1. L'évaluation
              </div>
              <div className="flex justify-center my-2">
                <Arrow />
              </div>
              <div className="p-4 border-2 border-blue-200 rounded-md bg-white mb-8">
                <ul className="text-left list-disc pl-4 mt-2">
                  <li>Entretien et séances d'observation</li>
                  <li>Portrait exécutif et pédagogique de l'apprenant</li>
                </ul>
              </div>
              <div className="p-4 border-2 rounded-md bg-blue-600 text-white text-xl font-bold">
                2. L'intervention
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <div className="inline-flex justify-center my-2 rotate-45">
                    <Arrow />
                  </div>
                  <div className="p-4 border-2 border-blue-200 rounded-md bg-white">
                    <ul className="text-left list-disc pl-4 mt-2">
                      <li>Je sais comment fonctionne mon cerveau</li>
                      <li>Je découvre mes procédures mentales efficaces</li>
                      <li>
                        Je développe des stratégies efficaces pour apprendre,
                        mémoriser, transférer les apprentissages, être plus
                        attentif…
                      </li>
                      <li>J'apprends à réguler mes émotions</li>
                    </ul>
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="inline-flex justify-center my-2 -rotate-45">
                    <Arrow />
                  </div>
                  <div className="p-4 border-2 border-blue-200 rounded-md bg-white">
                    <ul className="text-left list-disc pl-4 mt-2">
                      <li>Transfert aux apprentissages scolaires</li>
                      <li>Gestes d'explicitation</li>
                      <li>Métacognition</li>
                      <li>Pédagogie par le jeu</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <p>
                L'orthopédagogie est une pratique pédagogique personnalisée. En
                pleine émergence en France, elle a déjà fait ses preuves
                ailleurs dans le monde entre autres au Canada et en Belgique.
              </p>
              <p>
                Elle s'inscrit dans un cadre de référence scientifique (Sciences
                de l'Education, les neurosciences, la psychologie du
                développement) et pédagogique (enseignement explicite et gestes
                d'explicitation, écoute active, gestion mentale, renforcement
                positif, pédagogie par le jeu).
              </p>
            </div>
          </div>
        </section>

        {/* Orthopedagogue Section */}
        <section className="mb-16">
          <Heading tag={HeadingTag.H2}>L'orthopédagogue</Heading>
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-8">
              <div className="">
                <div className="">
                  <Image
                    src="/uploads/maryline2.jpeg"
                    alt="Maryline Moins"
                    width={1200}
                    height={400}
                    className="rounded-lg shadow-lg object-cover w-full h-auto max-h-[400px]"
                    priority
                  />
                  <div className="text-center mt-4 text-gray-500 italic mb-4">
                    Maryline Cailly-Moins, orthopédagogue
                  </div>
                </div>
                <div className="space-y-4 text-lg leading-relaxed text-gray-700">
                  <p>
                    Un orthopédagogue est donc un spécialiste des processus
                    d'apprentissage et du développement cognitif. Il intervient
                    pour identifier les difficultés, concevoir des stratégies
                    d'intervention personnalisées et soutenir le développement
                    des compétences scolaires.
                  </p>
                  <p>
                    Sa mission s'articule autour de la prévention, l'évaluation
                    et la remédiation aux difficultés d'apprentissage.
                  </p>
                  <p>
                    Il est pédagogue avant tout et place l'humain au cœur du
                    suivi.
                  </p>
                  <p>Il n'est pas un professionnel de santé.</p>
                  <p>
                    Il travaille main dans la main avec les parents en les
                    informant et en les guidant dans l'utilisation d'outils
                    appropriés aux besoins de leur enfant.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="mb-16">
          <Heading tag={HeadingTag.H2}>Quelle démarche ?</Heading>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <Heading tag={HeadingTag.H3} underline={false}>
              Un accompagnement sur mesure, un soutien humain assuré
            </Heading>

            <div className="my-6 p-12 bg-gradient-to-r from-blue-50 to-indigo-100 rounded-lg border border-blue-100 text-center font-sans flex flex-col items-center">
              <div className="border-2 border-blue-200 rounded-lg bg-white max-w-[390px] w-full">
                <div className="p-4 rounded-t-md bg-blue-600 text-white text-xl font-bold">
                  Evaluation des difficultés
                </div>
                <div className="p-4">
                  <ul className="text-left list-disc pl-8">
                    <li>Entretien / Anamnèse</li>
                    <li>Motifs de consultation</li>
                    <li>Lecture de bilans scolaires</li>
                    <li>Séances d’observation</li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center my-2">
                <Arrow />
              </div>
              <div className="border-2 border-blue-200 rounded-lg bg-white max-w-[390px] w-full">
                <div className="p-4 rounded-t-md bg-blue-600 text-white text-xl font-bold">
                  Identification des besoins
                </div>
                <div className="p-4">
                  <ul className="text-left list-disc pl-8">
                    <li>Définition d’objectifs</li>
                    <li>Plan d’intervention</li>
                    <li>Planification de séances</li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center my-2">
                <Arrow />
              </div>
              <div className="border-2 border-blue-200 rounded-lg bg-white max-w-[390px] w-full">
                <div className="p-4 rounded-t-md bg-blue-600 text-white text-xl font-bold">
                  Accompagnement cognitif et exécutif
                </div>
                <div className="p-4">
                  <ul className="text-left list-disc pl-8">
                    <li>Entrainement</li>
                    <li>Guidance</li>
                    <li>Transfert vers les apprentissages scolaires</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/contact">
              <button className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
                <span className="mr-2">Prendre rendez-vous</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
