import { Avatar } from "@/components/avatar";
import Heading, { HeadingTag } from "@/components/heading";
import { getMarkdownContent } from "@/lib/markdown";
import Image from "next/image";
import Link from "next/link";
import { Check, Phone, Mail, Calendar } from "react-feather";

export default async function CabinetPage() {
  return (
    <main className="min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Qui suis-je Section */}
        <section className="mb-16">
          <Heading tag={HeadingTag.H2}>Qui suis-je ?</Heading>
          <div className="bg-white px-8 pt-8 rounded-lg shadow-sm border border-gray-100">
            <div className="mb-8">
              <div className=" space-y-4 text-lg leading-relaxed text-gray-700">
                <p>
                  Je m'appelle Maryline Cailly-Moins. Enseignante et formatrice
                  depuis plusieurs années, je suis passionnée en pédagogie et en
                  didactique des apprentissages.
                </p>
                <p>
                  Certifiée en Master 2 Sciences de l'Education et en
                  Orthopédagogie, j'accompagne les enfants, les adolescents, les
                  étudiants en leur permettant de trouver et d'acquérir des
                  stratégies d'apprentissage conscientes et transférables, de
                  stimuler leur volonté et le désir d'apprendre.
                </p>
                <p className="font-semibold text-blue-600">
                  Ma priorité est de vous accompagner sur le chemin de la
                  réussite et de l'estime de soi.
                </p>
                <Image
                  src="/uploads/maryline1.jpeg"
                  alt="Maryline Moins"
                  width={1200}
                  height={400}
                  className="rounded-lg shadow-lg object-cover w-full h-auto max-h-[400px] mb-4"
                  priority
                />
                <div className="text-center mt-4 text-gray-500 italic">
                  Maryline Cailly-Moins, orthopédagogue
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quels outils j'utilise Section */}
        <section className="mb-16">
          <Heading tag={HeadingTag.H2}>Quels outils j'utilise ?</Heading>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="group bg-gradient-to-r from-blue-50 to-indigo-100 p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-blue-400">
                <div className="flex items-start">
                  <Check
                    className="text-blue-500 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <p className="text-gray-800 font-sans">
                    le dialogue pédagogique et la pédagogie des gestes mentaux
                  </p>
                </div>
              </div>
              <div className="group bg-gradient-to-r from-blue-50 to-indigo-100 p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-blue-400">
                <div className="flex items-start">
                  <Check
                    className="text-blue-500 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <p className="text-gray-800 font-sans">
                    la découverte du fonctionnement du cerveau et de ses besoins
                  </p>
                </div>
              </div>
              <div className="group bg-gradient-to-r from-blue-50 to-indigo-100 p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-blue-400">
                <div className="flex items-start">
                  <Check
                    className="text-blue-500 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <p className="text-gray-800 font-sans">
                    les outils de régulation émotionnelle
                  </p>
                </div>
              </div>
              <div className="group bg-gradient-to-r from-blue-50 to-indigo-100 p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-blue-400">
                <div className="flex items-start">
                  <Check
                    className="text-blue-500 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <p className="text-gray-800 font-sans">
                    les outils de pensée visuelle (carte mentale, skechtnoting)
                  </p>
                </div>
              </div>
              <div className="group bg-gradient-to-r from-blue-50 to-indigo-100 p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-blue-400">
                <div className="flex items-start">
                  <Check
                    className="text-blue-500 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <p className="text-gray-800 font-sans">
                    la pédagogie par le jeu
                  </p>
                </div>
              </div>
              <div className="group bg-gradient-to-r from-blue-50 to-indigo-100 p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-blue-400">
                <div className="flex items-start">
                  <Check
                    className="text-blue-500 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <p className="text-gray-800 font-sans">
                    les moyens mnémotechniques (flashcards, fiches mémo, palais
                    mental)
                  </p>
                </div>
              </div>
              <div className="group bg-gradient-to-r from-blue-50 to-indigo-100 p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-blue-400">
                <div className="flex items-start">
                  <Check
                    className="text-blue-500 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <p className="text-gray-800 font-sans">la métacognition</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comment se passe un accompagnement orthopedagogique Section */}
        <section className="mb-16">
          <Heading tag={HeadingTag.H2}>
            Comment se passe un accompagnement orthopédagogique ?
          </Heading>
          <div className="border-blue-100 text-center font-sans flex flex-col items-center space-y-8">
            {/* Step 1 */}
            <div className="border-2 border-blue-200 rounded-lg bg-white w-full">
              <div className="p-4 rounded-t-md bg-blue-600 text-white text-xl font-bold flex items-center">
                <span className="bg-white text-blue-600 rounded-full h-8 w-8 flex items-center justify-center mr-3">
                  1
                </span>
                SE RENCONTRER
              </div>
              <div className="p-6 text-left">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Phone
                      size={18}
                      className="text-blue-500 mr-3 mt-1 flex-shrink-0"
                    />
                    <p>
                      Un premier contact téléphonique pour définir la demande
                      (15 minutes), transmission par mail du dossier (bilans
                      scolaires, productions scolaires, bilans de
                      professionnels)
                    </p>
                  </li>
                  <li className="flex items-start">
                    <Calendar
                      size={18}
                      className="text-blue-500 mr-3 mt-1 flex-shrink-0"
                    />
                    <p>
                      Un échange avec l'apprenant et ses parents pour un recueil
                      d'informations complémentaires : les besoins et les
                      motivations, les difficultés rencontrées, le contexte,
                      d'environ 1heure. Présentation du « process »
                      orthopédagogique.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="border-2 border-blue-200 rounded-lg bg-white w-full">
              <div className="p-4 rounded-t-md bg-blue-600 text-white text-xl font-bold flex items-center">
                <span className="bg-white text-blue-600 rounded-full h-8 w-8 flex items-center justify-center mr-3">
                  2
                </span>
                EVALUER
              </div>
              <div className="p-6 text-left">
                <p>
                  Séances d'observation permettant de rencontrer la personne et
                  d'établir son portrait d'apprenant (identification du
                  comportement exécutif, du fonctionnement cognitif, les
                  préférences d'apprentissage, les forces et les défis).
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="border-2 border-blue-200 rounded-lg bg-white w-full">
              <div className="p-4 rounded-t-md bg-blue-600 text-white text-xl font-bold flex items-center">
                <span className="bg-white text-blue-600 rounded-full h-8 w-8 flex items-center justify-center mr-3">
                  3
                </span>
                ANALYSER
              </div>
              <div className="p-6 text-left">
                <p>
                  Proposition d'un programme d'intervention orthopédagogique
                  personnalisé et articulation d'objectifs ciblés et
                  prioritaires
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="border-2 border-blue-200 rounded-lg bg-white w-full">
              <div className="p-4 rounded-t-md bg-blue-600 text-white text-xl font-bold flex items-center">
                <span className="bg-white text-blue-600 rounded-full h-8 w-8 flex items-center justify-center mr-3">
                  4
                </span>
                INTERVENIR
              </div>
              <div className="p-6 text-left">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check
                      size={18}
                      className="text-blue-500 mr-3 mt-1 flex-shrink-0"
                    />
                    <p>
                      Séances individuelles au service des besoins identifiés
                    </p>
                  </li>
                  <li className="flex items-start">
                    <Check
                      size={18}
                      className="text-blue-500 mr-3 mt-1 flex-shrink-0"
                    />
                    <p>Evaluation des progrès</p>
                  </li>
                  <li className="flex items-start">
                    <Check
                      size={18}
                      className="text-blue-500 mr-3 mt-1 flex-shrink-0"
                    />
                    <p>Echanges réguliers</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="flex justify-center mb-16">
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
    </main>
  );
}
