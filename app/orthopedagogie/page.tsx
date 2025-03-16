import { Heading, HeadingTag, UnderlineColor } from "@/components/Heading";
import { getMarkdownContent } from "@/lib/markdown";
import Image from "next/image";
import { Arrow } from "./Arrow";
import { Card } from "./Card";
import { TextPanel, TextPanelAccentColor } from "./TextPanel";
import { GradientText } from "./GradientText";
import { Button } from "@/components/Button";

export default async function HomePage() {
  const { frontmatter } = await getMarkdownContent(
    "content/pages/orthopedagogie.md"
  );

  const { hero } = frontmatter;

  return (
    <main className="min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-12 mt-4">
          <Heading
            tag={HeadingTag.H1}
            underlineColor={UnderlineColor.GreenDark}
          >
            L&apos;orthopédagogie au service de l&apos;apprenant
          </Heading>
          {hero && (
            <div className="w-full">
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
          <Card>
            <p className="text-xl mb-6 text-center">
              Ce site est destiné aux parents en quête de solutions pour aider
              leur enfant à :
            </p>
            <div className="flex flex-col items-center mb-10">
              <ul className="list-disc pl-5 space-y-2 text-lg">
                <li>
                  <span className="font-semibold">
                    mieux apprendre à l&apos;école, au collège, au lycée
                  </span>
                </li>
                <li>
                  <span className="font-semibold">gagner confiance en soi</span>
                </li>
              </ul>
            </div>

            <Card
              isGradient={true}
              className="flex flex-col gap-6 mb-8"
              fromColor="from-slate-100"
              toColor="to-indigo-50"
            >
              <TextPanel accentColor={TextPanelAccentColor.PinkLight}>
                Votre enfant rencontre des difficultés pour apprendre,
                mémoriser, être attentif en classe ?
              </TextPanel>

              <TextPanel accentColor={TextPanelAccentColor.PinkLight}>
                Votre enfant ne réussit pas ses évaluations alors
                qu&apos;il/elle a appris(e) ses leçons?
              </TextPanel>

              <TextPanel accentColor={TextPanelAccentColor.PinkLight}>
                Votre enfant a besoin d&apos;un « petit coup de pouce » dans ses
                apprentissages ?
              </TextPanel>

              <TextPanel accentColor={TextPanelAccentColor.PinkLight}>
                Votre enfant n&apos;arrive pas à gérer ses émotions ?
              </TextPanel>

              <TextPanel accentColor={TextPanelAccentColor.PinkLight}>
                Votre enfant a des besoins particuliers (trouble dys et/ ou
                TDAH) ?
              </TextPanel>

              <TextPanel accentColor={TextPanelAccentColor.PinkLight}>
                Vous êtes en quête d&apos;informations pour aider votre enfant ?
              </TextPanel>
            </Card>

            <div className="relative overflow-hidden rounded-lg">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-30 blur-lg"></div>
              <div className="relative bg-white p-8 rounded-lg text-center">
                <p className="mb-6">
                  <GradientText
                    gradientFrom="from-teal-500"
                    gradientTo="to-emerald-600"
                  >
                    Alors vous êtes au bon endroit.
                  </GradientText>
                </p>

                <Button
                  href="/contact"
                  gradientFrom="from-teal-500"
                  gradientTo="to-emerald-600"
                >
                  Prendre rendez-vous
                </Button>
              </div>
            </div>
          </Card>
        </section>

        {/* What is Orthopedagogy Section */}
        <section className="mb-16">
          <Heading
            tag={HeadingTag.H2}
            underlineColor={UnderlineColor.GreenDark}
          >
            Qu&apos;est-ce que l&apos;orthopédagogie ?
          </Heading>

          <Card>
            <div className="text-lg leading-relaxed text-gray-700">
              <p className="mb-8 italic border-l-4 border-green-300 pl-4">
                L&apos;orthopédagogie est « la science de l&apos;éducation dont
                l&apos;objet est l&apos;évaluation et l&apos;intervention
                relatives aux apprenants susceptibles de présenter ou présentant
                des difficultés d&apos;apprentissage scolaire, incluant les
                troubles d&apos;apprentissage »
                <span className="text-sm text-gray-500 block mt-2">
                  (source : L&apos;ADOQ)
                </span>
              </p>
            </div>

            <Card
              isGradient={true}
              className="my-12 p-12 text-center font-sans"
              fromColor="from-slate-100"
              toColor="to-indigo-50"
            >
              <div className="p-4 border-2 border-pink-400 rounded-md bg-pink-100 text-pink-600 text-xl font-bold">
                1. L&apos;évaluation
              </div>
              <div className="flex justify-center my-2">
                <Arrow />
              </div>
              <div className="p-4 border-2 border-pink-200 rounded-md bg-white mb-8">
                <ul className="text-left list-disc pl-4 mt-2">
                  <li>Entretien et séances d&apos;observation</li>
                  <li>Portrait exécutif et pédagogique de l&apos;apprenant</li>
                </ul>
              </div>
              <div className="p-4 border-2 rounded-md border-pink-400 bg-pink-100 text-pink-600 text-xl font-bold">
                2. L&apos;intervention
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <div className="inline-flex justify-center my-2 rotate-45">
                    <Arrow />
                  </div>
                  <div className="p-4 border-2 border-pink-200 rounded-md bg-white">
                    <ul className="text-left list-disc pl-4 mt-2">
                      <li>Je sais comment fonctionne mon cerveau</li>
                      <li>Je découvre mes procédures mentales efficaces</li>
                      <li>
                        Je développe des stratégies efficaces pour apprendre,
                        mémoriser, transférer les apprentissages, être plus
                        attentif…
                      </li>
                      <li>J&apos;apprends à réguler mes émotions</li>
                    </ul>
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="inline-flex justify-center my-2 -rotate-45">
                    <Arrow />
                  </div>
                  <div className="p-4 border-2 border-pink-200 rounded-md bg-white">
                    <ul className="text-left list-disc pl-4 mt-2">
                      <li>Transfert aux apprentissages scolaires</li>
                      <li>Gestes d&apos;explicitation</li>
                      <li>Métacognition</li>
                      <li>Pédagogie par le jeu</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <p>
                L&apos;orthopédagogie est une pratique pédagogique
                personnalisée. En pleine émergence en France, elle a déjà fait
                ses preuves ailleurs dans le monde entre autres au Canada et en
                Belgique.
              </p>
              <p>
                Elle s&apos;inscrit dans un cadre de référence scientifique
                (Sciences de l&apos;Education, les neurosciences, la psychologie
                du développement) et pédagogique (enseignement explicite et
                gestes d&apos;explicitation, écoute active, gestion mentale,
                renforcement positif, pédagogie par le jeu).
              </p>
            </div>
          </Card>
        </section>

        {/* Orthopedagogue Section */}
        <section className="mb-16">
          <Heading tag={HeadingTag.H2}>L&apos;orthopédagogue</Heading>
          <Card className="overflow-hidden">
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
                    d&apos;apprentissage et du développement cognitif. Il
                    intervient pour identifier les difficultés, concevoir des
                    stratégies d&apos;intervention personnalisées et soutenir le
                    développement des compétences scolaires.
                  </p>
                  <p>
                    Sa mission s&apos;articule autour de la prévention,
                    l&apos;évaluation et la remédiation aux difficultés
                    d&apos;apprentissage.
                  </p>
                  <p>
                    Il est pédagogue avant tout et place l&apos;humain au cœur
                    du suivi.
                  </p>
                  <p>Il n&apos;est pas un professionnel de santé.</p>
                  <p>
                    Il travaille main dans la main avec les parents en les
                    informant et en les guidant dans l&apos;utilisation
                    d&apos;outils appropriés aux besoins de leur enfant.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Approach Section */}
        <section className="mb-16">
          <Heading tag={HeadingTag.H2}>Quelle démarche ?</Heading>
          <Card>
            <Heading tag={HeadingTag.H3} underline={false}>
              Un accompagnement sur mesure, un soutien humain assuré
            </Heading>

            <Card
              isGradient={true}
              className="my-6 p-12 text-center font-sans flex flex-col items-center"
              fromColor="from-slate-100"
              toColor="to-indigo-50"
            >
              <div className="border-2 border-pink-300 rounded-lg bg-white max-w-[390px] w-full">
                <div className="p-4 rounded-t-md bg-pink-100 text-pink-600 text-xl font-bold">
                  Evaluation des difficultés
                </div>
                <div className="p-4">
                  <ul className="text-left list-disc pl-8">
                    <li>Entretien / Anamnèse</li>
                    <li>Motifs de consultation</li>
                    <li>Lecture de bilans scolaires</li>
                    <li>Séances d&apos;observation</li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center my-2">
                <Arrow />
              </div>
              <div className="border-2 border-pink-300 rounded-lg bg-white max-w-[390px] w-full">
                <div className="p-4 rounded-t-md bg-pink-100 text-pink-600 text-xl font-bold">
                  Identification des besoins
                </div>
                <div className="p-4">
                  <ul className="text-left list-disc pl-8">
                    <li>Définition d&apos;objectifs</li>
                    <li>Plan d&apos;intervention</li>
                    <li>Planification de séances</li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center my-2">
                <Arrow />
              </div>
              <div className="border-2 border-pink-300 rounded-lg bg-white max-w-[390px] w-full">
                <div className="p-4 rounded-t-md bg-pink-100 text-pink-600 text-xl font-bold">
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
            </Card>
          </Card>
          <div className="flex justify-center mt-8">
            <Button
              href="/contact"
              gradientFrom="from-teal-500"
              gradientTo="to-emerald-600"
            >
              Prendre rendez-vous
            </Button>{" "}
          </div>
        </section>
      </div>
    </main>
  );
}
