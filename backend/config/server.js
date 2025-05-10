module.exports = ({ env }) => ({
	host: env("HOST", "0.0.0.0"),
	port: env.int("PORT", 1337),
	app: {
		keys: env.array("APP_KEYS"),
	},
	server: {
		allowedHosts: [
			"strapiback.graphandco.com", // Ton domaine spécifique
			"localhost", // Permet aussi les requêtes locales
			"0.0.0.0", // Permet toutes les adresses
		],
	},
	webhooks: {
		populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
	},
});
