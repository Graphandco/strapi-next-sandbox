import { getStrapiActualiteBySlug } from "@/actions/getStrapiActualites";
import { notFound } from "next/navigation";
import { marked } from "marked";

export async function generateMetadata({ params }) {
	const article = await getStrapiActualiteBySlug(params.slug);

	if (!article) return { title: "Article non trouvé" };

	return {
		title: article.Titre,
		description: (article.Description || "")
			.replace(/[#*]/g, "")
			.slice(0, 160),
	};
}

export default async function ArticlePage({ params }) {
	const article = await getStrapiActualiteBySlug(params.slug);

	if (!article) return notFound();

	return (
		<main className="wrapper prose">
			<h1>{article.Titre}</h1>
			<div
				dangerouslySetInnerHTML={{
					__html: marked.parse(article.Contenu || ""),
				}}
			/>
		</main>
	);
}
