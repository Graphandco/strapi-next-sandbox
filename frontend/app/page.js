import { getPage } from "@/actions/getPage";
import { marked } from "marked";
import Image from "next/image";

export async function generateMetadata() {
	const page = await getPage({ titre: "Accueil" });

	return {
		title: page?.Titre || "Accueil",
		description: (page?.Description || "")
			.replace(/[#*]/g, "")
			.slice(0, 160),
	};
}

export default async function HomePage() {
	const page = await getPage({ titre: "Accueil" });

	return (
		<main className="prose mx-auto p-8">
			<h1>{page.Titre}</h1>
			<div
				dangerouslySetInnerHTML={{
					__html: marked.parse(page.Description || ""),
				}}
			/>
			{page.Image.url}
			<Image
				src={`http://localhost:1337${page.Image.url}`}
				width={100}
				height={100}
				alt="logo"
			/>
		</main>
	);
}
