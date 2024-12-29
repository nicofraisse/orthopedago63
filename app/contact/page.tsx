import { getMarkdownContent } from "@/lib/markdown";
import Image from "next/image";

export default async function HomePage() {
  const { frontmatter, contentHtml } = await getMarkdownContent(
    "content/pages/contact.md"
  );

  const { title, hero } = frontmatter;

  return (
    <main className="min-h-screen flex flex-col items-center p-4">
      {hero && (
        <div className="w-full max-w-4xl mb-6">
          <Image
            src={hero}
            alt="Cabinet Banner"
            width={1200}
            height={400}
            className="rounded shadow-md object-cover w-full h-auto max-w-56 mx-auto"
          />
        </div>
      )}

      {title && (
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          {title}
        </h1>
      )}

      {/* <p>
        Pour toute demande de renseignements ou prise de rendez-vous, vous
        pouvez me contacter par mail à cette adresse:{" "}
        <a
          href="mailto:marylinemoins@gmail.com"
          className="
          text-blue-500
        "
        >
          marylinemoins@gmail.com
        </a>
      </p> */}
      <p className="mb-6">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem
        quam numquam dignissimos expedita obcaecati temporibus labore excepturi
        ut accusantium nobis. Explicabo aut iure in? Sapiente molestiae eligendi
        iste iusto temporibus.
      </p>

      <form className="border border-gray-300 rounded-md p-4 mb-6 w-full max-w-sm">
        <div className="flex flex-col mb-4 w-full">
          <label htmlFor="name" className="text-sm font-bold">
            Votre Nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border border-gray-300 rounded-md py-1 px-2 mt-1"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="text-sm font-bold">
            Votre adresse email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border border-gray-300 rounded-md py-1 px-2 mt-1"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="text-sm font-bold">
            Votre numéro de téléphone
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border border-gray-300 rounded-md py-1 px-2 mt-1"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="message" className="text-sm font-bold">
            Votre message
          </label>
          <textarea
            id="message"
            name="message"
            className="border border-gray-300 rounded-md py-1 px-2 mt-1"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Envoyer
        </button>
      </form>

      <div
        className="prose prose-lg text-gray-700 max-w-3xl"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </main>
  );
}
