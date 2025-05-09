import { getStrapiPage } from "@/actions/getStrapiPage";
import { marked } from "marked";
import { getStrapiAllActualites } from "@/actions/getStrapiActualites";
import Link from "next/link";

export async function generateMetadata() {
	const page = await getStrapiPage({ titre: "Actualités" });

	return {
		title: page?.Titre || "Actualités",
		description: (page?.Description || "")
			.replace(/[#*]/g, "")
			.slice(0, 160),
	};
}

export default async function ActualitesPage() {
	const articles = await getStrapiAllActualites();
	const page = await getStrapiPage({ titre: "Actualités" });

	return (
		<main className="wrapper prose">
			<h1>{page.Titre}</h1>
			<div
				dangerouslySetInnerHTML={{
					__html: marked.parse(page.Description || ""),
				}}
			/>
			<ul>
				{articles.map((a) => (
					<li key={a.id}>
						<Link href={`/actualites/${a.slug}`}>{a.Titre}</Link>
					</li>
				))}
			</ul>
		</main>
	);
}
