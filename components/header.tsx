import { getMarkdownContent } from "@/lib/markdown";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Header = async () => {
  const { frontmatter } = await getMarkdownContent(
    "content/components/header.md"
  );

  const { logo } = frontmatter;

  return (
    <header className="flex justify-center items-center py-4 px-8 bg-slate-100 sticky top-0 shadow-sm">
      <div className="flex justify-between items-center space-x-4 w-full max-w-3xl">
        <nav>
          <Link href="/">
            <Image
              src={logo}
              alt="Orthopédagogie 63"
              width={100}
              height={100}
              className="rounded-full w-12"
            />
          </Link>
        </nav>
        <nav className="flex space-x-7">
          <Link href="/orthopedagogie">L&apos;orthopédagogie</Link>
          <Link href="/le-cabinet">Le cabinet</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
};