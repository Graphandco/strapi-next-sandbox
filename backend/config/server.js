module.exports = ({ env }) => ({
	host: env("HOST", "0.0.0.0"),
	port: env.int("PORT", 1337),
	app: {
		keys: env.array("APP_KEYS"),
	},
	url: env("APP_URL", "http://localhost:1337"), // Si tu utilises un autre port/URL pour Strapi
	admin: {
		auth: {
			secret: env("ADMIN_JWT_SECRET"),
		},
	},
	server: {
		allowedHosts: ["strapiback.graphandco.com"], // Ajouter ici ton domaine
	},
	webhooks: {
		populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
	},
});
