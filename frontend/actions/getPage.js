"use server";

export async function getPage({ id, titre }) {
	let url = "http://localhost:1337/api/pages?populate=*";

	if (id) {
		url += `/${id}`;
	}

	const res = await fetch(url, { cache: "no-store" });

	if (!res.ok) {
		throw new Error("Erreur lors de la récupération de la page");
	}

	const json = await res.json();

	if (id) {
		return json.data;
	}

	// Si on cherche par titre, filtrer les résultats
	const page = json.data.find((page) => page.Titre === titre);
	return page;
}
