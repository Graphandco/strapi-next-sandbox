import { getStrapiPage } from "@/actions/getStrapiPage";
import { marked } from "marked";
import Image from "next/image";
import Galerie from "./Galerie";

export async function generateMetadata() {
	const page = await getStrapiPage({ titre: "Galerie" });

	return {
		title: page?.Titre || "Galerie",
		description: (page?.Description || "")
			.replace(/[#*]/g, "")
			.slice(0, 160),
	};
}

export default async function GaleryPage() {
	const page = await getStrapiPage({ titre: "Galerie" });

	return (
		<main className="wrapper prose">
			<h1>{page.Titre}</h1>
			<div
				dangerouslySetInnerHTML={{
					__html: marked.parse(page.Description || ""),
				}}
			/>
			<Galerie images={page.Galerie} />
		</main>
	);
}
