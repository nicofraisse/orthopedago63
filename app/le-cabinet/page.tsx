import { Heading, HeadingTag } from "@/components/Heading";
import Image from "next/image";
import { Check, Phone, Calendar } from "react-feather";
import { GradientText } from "../orthopedagogie/GradientText";
import { TextPanel, TextPanelAccentColor } from "../orthopedagogie/TextPanel";
import Card from "../orthopedagogie/Card";
import { Button } from "@/components/Button";
import { Arrow } from "../orthopedagogie/Arrow";

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
                  Je m&apos;appelle Maryline Cailly-Moins. Enseignante et
                  formatrice depuis plusieurs années, je suis passionnée en
                  pédagogie et en didactique des apprentissages.
                </p>
                <p>
                  Certifiée en Master 2 Sciences de l&apos;Education et en
                  Orthopédagogie, j&apos;accompagne les enfants, les
                  adolescents, les étudiants en leur permettant de trouver et
                  d&apos;acquérir des stratégies d&apos;apprentissage
                  conscientes et transférables, de stimuler leur volonté et le
                  désir d&apos;apprendre.
                </p>
                <GradientText
                  className="text-lg"
                  gradientFrom="to-pink-500"
                  gradientTo="from-fuchsia-500"
                >
                  Ma priorité est de vous accompagner sur le chemin de la
                  réussite et de l&apos;estime de soi.
                </GradientText>
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

        {/* Quels outils j&apos;utilise Section */}
        <section className="mb-16">
          <Heading tag={HeadingTag.H2}>Quels outils j&apos;utilise ?</Heading>
          <Card>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TextPanel
                isGradient={true}
                accentColor={TextPanelAccentColor.Pink}
                gradientFrom="from-slate-50"
                gradientTo="to-slate-100"
              >
                <div className="flex items-start">
                  <Check
                    className="text-pink-500 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div className="text-gray-800 font-sans">
                    le dialogue pédagogique et la pédagogie des gestes mentaux
                  </div>
                </div>
              </TextPanel>

              <TextPanel
                isGradient={true}
                accentColor={TextPanelAccentColor.Pink}
                gradientFrom="from-slate-50"
                gradientTo="to-slate-100"
              >
                <div className="flex items-start">
                  <Check
                    className="text-pink-500 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div className="text-gray-800 font-sans">
                    la découverte du fonctionnement du cerveau et de ses besoins
                  </div>
                </div>
              </TextPanel>

              <TextPanel
                isGradient={true}
                accentColor={TextPanelAccentColor.Pink}
                gradientFrom="from-slate-50"
                gradientTo="to-slate-100"
              >
                <div className="flex items-start">
                  <Check
                    className="text-pink-500 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div className="text-gray-800 font-sans">
                    les outils de régulation émotionnelle
                  </div>
                </div>
              </TextPanel>

              <TextPanel
                isGradient={true}
                accentColor={TextPanelAccentColor.Pink}
                gradientFrom="from-slate-50"
                gradientTo="to-slate-100"
              >
                <div className="flex items-start">
                  <Check
                    className="text-pink-500 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div className="text-gray-800 font-sans">
                    les outils de pensée visuelle (carte mentale, skechtnoting)
                  </div>
                </div>
              </TextPanel>

              <TextPanel
                isGradient={true}
                accentColor={TextPanelAccentColor.Pink}
                gradientFrom="from-slate-50"
                gradientTo="to-slate-100"
              >
                <div className="flex items-start">
                  <Check
                    className="text-pink-500 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div className="text-gray-800 font-sans">
                    la pédagogie par le jeu
                  </div>
                </div>
              </TextPanel>

              <TextPanel
                isGradient={true}
                accentColor={TextPanelAccentColor.Pink}
                gradientFrom="from-slate-50"
                gradientTo="to-slate-100"
              >
                <div className="flex items-start">
                  <Check
                    className="text-pink-500 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div className="text-gray-800 font-sans">
                    les moyens mnémotechniques (flashcards, fiches mémo, palais
                    mental)
                  </div>
                </div>
              </TextPanel>

              <TextPanel
                isGradient={true}
                accentColor={TextPanelAccentColor.Pink}
                gradientFrom="from-slate-50"
                gradientTo="to-slate-100"
              >
                <div className="flex items-start">
                  <Check
                    className="text-pink-500 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div className="text-gray-800 font-sans">
                    la métacognition
                  </div>
                </div>
              </TextPanel>
            </div>
          </Card>
        </section>
        {/* Comment se passe un accompagnement orthopedagogique Section */}
        <section className="mb-16">
          <Heading tag={HeadingTag.H2}>
            Comment se passe un accompagnement orthopédagogique ?
          </Heading>

          <Card
            isGradient={true}
            className="my-6 p-12 text-center font-sans flex flex-col items-center"
            fromColor="from-slate-100"
            toColor="to-indigo-50"
          >
            <div className="border-pink-100 text-center font-sans flex flex-col items-center space-y-2 max-w-xl">
              {/* Step 1 */}
              <div className="border-2 border-pink-400 rounded-lg bg-white w-full">
                <div className="p-4 rounded-t-md bg-pink-100 text-pink-600 text-xl font-bold flex items-center">
                  <span className="bg-pink-600 text-white rounded-full h-8 w-8 flex items-center justify-center mr-3">
                    1
                  </span>
                  SE RENCONTRER
                </div>
                <div className="p-6 text-left">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Phone
                        size={18}
                        className="text-pink-500 mr-3 mt-1 flex-shrink-0"
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
                        className="text-pink-500 mr-3 mt-1 flex-shrink-0"
                      />
                      <p>
                        Un échange avec l&apos;apprenant et ses parents pour un
                        recueil d&apos;informations complémentaires : les
                        besoins et les motivations, les difficultés rencontrées,
                        le contexte, d&apos;environ 1heure. Présentation du «
                        process » orthopédagogique.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              <Arrow />

              {/* Step 2 */}
              <div className="border-2 border-pink-400 rounded-lg bg-white w-full">
                <div className="p-4 rounded-t-md bg-pink-100 text-pink-600 text-xl font-bold flex items-center">
                  <span className="bg-pink-600 text-white rounded-full h-8 w-8 flex items-center justify-center mr-3">
                    2
                  </span>
                  EVALUER
                </div>
                <div className="p-6 text-left">
                  <p>
                    Séances d&apos;observation permettant de rencontrer la
                    personne et d&apos;établir son portrait d&apos;apprenant
                    (identification du comportement exécutif, du fonctionnement
                    cognitif, les préférences d&apos;apprentissage, les forces
                    et les défis).
                  </p>
                </div>
              </div>

              <Arrow />

              {/* Step 3 */}
              <div className="border-2 border-pink-400 rounded-lg bg-white w-full">
                <div className="p-4 rounded-t-md bg-pink-100 text-pink-600 text-xl font-bold flex items-center">
                  <span className="bg-pink-600 text-white rounded-full h-8 w-8 flex items-center justify-center mr-3">
                    3
                  </span>
                  ANALYSER
                </div>
                <div className="p-6 text-left">
                  <p>
                    Proposition d&apos;un programme d&apos;intervention
                    orthopédagogique personnalisé et articulation
                    d&apos;objectifs ciblés et prioritaires
                  </p>
                </div>
              </div>

              <Arrow />

              {/* Step 4 */}
              <div className="border-2 border-pink-400 rounded-lg bg-white w-full">
                <div className="p-4 rounded-t-md bg-pink-100 text-pink-600 text-xl font-bold flex items-center">
                  <span className="bg-pink-600 text-white rounded-full h-8 w-8 flex items-center justify-center mr-3">
                    4
                  </span>
                  INTERVENIR
                </div>
                <div className="p-6 text-left">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check
                        size={18}
                        className="text-pink-500 mr-3 mt-1 flex-shrink-0"
                      />
                      <p>
                        Séances individuelles au service des besoins identifiés
                      </p>
                    </li>
                    <li className="flex items-start">
                      <Check
                        size={18}
                        className="text-pink-500 mr-3 mt-1 flex-shrink-0"
                      />
                      <p>Evaluation des progrès</p>
                    </li>
                    <li className="flex items-start">
                      <Check
                        size={18}
                        className="text-pink-500 mr-3 mt-1 flex-shrink-0"
                      />
                      <p>Echanges réguliers</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Call to Action */}
        <div className="flex justify-center mb-16">
          <Button
            href="/contact"
            gradientFrom="from-teal-500"
            gradientTo="to-emerald-600"
          >
            Prendre rendez-vous
          </Button>
        </div>
      </div>
    </main>
  );
}
