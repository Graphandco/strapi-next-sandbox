import { getStrapiUnique } from "@/actions/getStrapiUnique";
import { getStrapiAllPages } from "@/actions/getStrapiPage";
import Image from "next/image";
import Link from "next/link";

export default async function Header() {
	const headerContent = await getStrapiUnique({ type: "Header" });
	const pages = await getStrapiAllPages();

	return (
		<header className="py-3 bg-black/30">
			<div className="wrapper flex justify-between items-center gap-2">
				<div className="flex items-center gap-2">
					<Image
						src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${headerContent.Logo.formats.thumbnail.url}`}
						width={35}
						height={35}
						alt="logo"
					/>
					<div className="text-white uppercase font-semibold">
						{headerContent.Titre}
					</div>
				</div>
				<nav className="flex items-center gap-2">
					{pages
						.sort((a, b) => a.Ordre - b.Ordre)
						.map((page) => (
							<Link
								key={page.id}
								href={page.slug === "accueil" ? "/" : page.slug}
								className="hover:text-white font-semibold hover:text-primary transition-colors"
							>
								{page.Titre}
							</Link>
						))}
				</nav>
			</div>
		</header>
	);
}
