import { getMarkdownContent } from "@/lib/markdown";
import Image from "next/image";
import { Heading, HeadingTag } from "@/components/Heading";
import { Mail, Phone, User, MessageSquare } from "react-feather";
import { Button } from "@/components/Button";

export default async function ContactPage() {
  const { contentHtml } = await getMarkdownContent("content/pages/contact.md");

  return (
    <main className="min-h-screen">
      <div className="max-w-4xl mx-auto">
        <Heading tag={HeadingTag.H2}>Me contacter</Heading>

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
        {/* Contact Form Section */}
        <section className="mb-16">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <p className="text-lg text-gray-700 mb-8 text-center">
              Besoin d&apos;un accompagnement orthopédagogique pour votre enfant
              ou d&apos;en savoir plus sur mes services? Laissez-moi un message
              ci-dessous et je vous répondrai dans les meilleurs délais.
            </p>

            <div className="max-w-2xl mx-auto">
              <form className="space-y-6">
                <div className="flex flex-col">
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-gray-700 mb-1"
                  >
                    Votre Nom
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <User size={18} className="text-pink-500" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="border border-gray-300 rounded-lg py-3 px-4 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-transparent"
                      placeholder="Prénom et Nom"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-gray-700 mb-1"
                  >
                    Votre adresse email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Mail size={18} className="text-pink-500" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="border border-gray-300 rounded-lg py-3 px-4 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-transparent"
                      placeholder="exemple@email.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="phone"
                    className="text-sm font-semibold text-gray-700 mb-1"
                  >
                    Votre numéro de téléphone
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Phone size={18} className="text-pink-500" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="border border-gray-300 rounded-lg py-3 px-4 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-transparent"
                      placeholder="06 12 34 56 78"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-gray-700 mb-1"
                  >
                    Votre message
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <MessageSquare
                        size={18}
                        className="text-pink-500 relative top-1"
                      />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="border border-gray-300 rounded-lg py-3 px-4 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-transparent"
                      placeholder="Décrivez votre demande ou vos questions..."
                    ></textarea>
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button
                    gradientFrom="from-teal-500"
                    gradientTo="to-emerald-600"
                  >
                    Envoyer
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Additional Information Section */}
        {contentHtml && (
          <section className="mb-16">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div
                className="prose prose-lg max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
              />
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
