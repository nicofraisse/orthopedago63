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

      <p>
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
      </p>

      <div
        className="prose prose-lg text-gray-700 max-w-3xl"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </main>
  );
}
