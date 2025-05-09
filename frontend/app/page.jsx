import { getStrapiPage } from "@/actions/getStrapiPage";
import { marked } from "marked";
import Image from "next/image";

export async function generateMetadata() {
	const page = await getStrapiPage({ titre: "Accueil" });

	return {
		title: page?.Titre || "Accueil",
		description: (page?.Description || "")
			.replace(/[#*]/g, "")
			.slice(0, 160),
	};
}

export default async function HomePage() {
	const page = await getStrapiPage({ titre: "Accueil" });

	return (
		<main className="wrapper prose">
			<h1>{page.Titre}</h1>
			<div
				dangerouslySetInnerHTML={{
					__html: marked.parse(page.Description || ""),
				}}
			/>
			{page.Image.url}
			<Image
				src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${page.Image.url}`}
				width={100}
				height={100}
				alt="logo"
			/>
		</main>
	);
}
