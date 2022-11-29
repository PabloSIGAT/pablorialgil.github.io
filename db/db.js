export default {
	bio: {
		about: {
			text: [
				"Hi &#128075;",
				"I'm Vinay Somawat. I’m currently working as a Software Engineer at Biofourmis India specialized in JavaScript Applications. I did my undergrad in CS from NIT Warangal.",
				"I'm a developer, geek and curious human besides being an OpenSource enthusiast. I have experience of delivering solutions for interesting problems from startup and industry space.",
				"I love to read, listen to music, and travel.",
			],
		},
		contact: {
			text: [
				"If you would like to get in touch with me, be it for exploring a technology, a business, or to just say hi, feel free to send me an email. My email address is: vinaysomawat40@gmail.com",
			],
		},
	},
	skills: [
		{
			title: "Logiciels SIG",
			skillName: "ArcGIS, Qgis",
			color: "1",
			percentage: "90",
		},
		{
			title: "BDD",
			skillName: "PostgreSQL",
			color: "2",
			percentage: "50",
		},
		{
			title: "Suites",
			skillName: "Google Workspace, Microsoft 365",
			color: "4",
			percentage: "80",
		},		
		{
			title: "Design",
			skillName: "HTML, Bootstrap, CSS",
			color: "5",
			percentage: "70",
		},
		{
			title: "Langages",
			skillName: "Python, JS, R, SQL",
			color: "6",
			percentage: "70",
		},
		{
			title: "API",
			skillName: "MapLibre GL, APIs",
			color: "7",
			percentage: "60",
		},
		{
			title: "DataViz",
			skillName: "Illustrator, Photoshop",
			color: "8",
			percentage: "70",
		},
		{
			title: "GP",
			skillName: "Gestion Projet",
			color: "9",
			percentage: "70",
		},
	],
	projects: {
		web: [
			{
				projectName: "Cartographie SSP",
				image: "images/Carto_SSP.png",
				summary: "Conception et pilotage du projet SIG de création d'une cartographie des Sites et Sols Pollués (SSP) pour enrichir un outil de visualisation cartographique web.",
				preview: "pages/Projet_1/Projet_1.html",
				techStack: [""],
			},
			{
				projectName: "Cartographie des ICU à Rennes",
				image: "images/LETG.png",
				summary: "Étude des représentations cartographiques adaptées à la caractérisation d'un Îlot de Chaleur Urbain (ICU)",
				preview: "pages/Projet_2/Projet_2.html",
				techStack: [""],
			},			
		],
		applisig: [
			{
				projectName: "Estimation de la population par bâtiment",
				image: "images/AUDIAR.png",
				summary: "Désagrégation spatiale des données de population à l'échelle du bâtiment",
				preview: "pages/Projet_3/Projet_3.html",
				techStack: [""],
			},						
		],
		freelance: [
			{
				projectName: "Projet d'aménagement du territoire",
				image: "images/FORET.png",
				summary: "Réalisation d'un projet d'aménagement forestier pour une communauté de propriétaires",
				preview: "pages/Projet_4/Projet_4.html",
				techStack: [""],
			},			
		],		
	},
	experience: [
		{
			title: "ESID de Rennes",
			duration: "Mai 2022 - November 2022",
			subtitle: "Géomaticien",
			details: [
				"Développement et pilotage d'un projet SIG pour la création d'une cartographie web.",
				"Déploiement d'une méthodologie de développement d'applications web : reconnaissance de l'environnement informatique ; identification des utilisateurs potentiels et formalisation de leurs besoins ; étude de Benchmarking ; pédagogie dans la transmission des nouveaux concepts SIG au sein de la structure ; création d'éléments dataviz ; gestion de projet dynamique, avec des réunions fréquentes en fonction de l'avancement du projet.",
				"Acquisition de nouvelles connaissances dans le domaine des pollutions pyrotechniques et des pollutions industrielles des sols.",
				"Première expérience professionnelle en milieu militaire.",
			],
			tags: [ "ArcGIS Pro", "Model Builder", "Microsoft 365", "Python"],
			icon: "industry",
		},
		{
			title: "Laboratoire de recherche LETG de Rennes",
			duration: "Janvier 2022 - Avril 2022",
			subtitle: "Géomaticien",
			details: [
				"Récupération des données d'un réseau de capteurs IoT via API au format JSON.",
				"Préparation d'un grand volume de données à l'aide de Python, en particulier les bibliothèques / packages GeoPandas, Pygeos, Numpy et Shapely.",
				"Visualisation cartographique de données vectorielles et raster dans l'API MapLibre GL, en utilisant JavaScript comme langage de programmation.",
				"Utilisation de la bibliothèque python GDAL pour créer des interpolations et travailler avec des données au format raster.",
			],
			tags: ["JavaScript", "MapLibre GL", "Python", "Gdal", "CSS"],
			icon: "thermometer-half",
		},
		{
			title: "Agence d'Urbanisme AUDIAR",
			duration: "Janvier 2021 - Mai 2021",
			subtitle: "Géomaticien",
			details: [
				"Analyse de la qualité des données : exactitude, exhaustivité, intégrité, mise à jour, cohérence, pertinence, accessibilité et fiabilité.",
				"Recherche de nouvelles sources d'informations externes pour enrichir la base de données AUDIAR.",
				"Rechercher de nouvelles méthodes de désagrégation de la population en étudiant la bibliographie disponible sur le sujet.",
				"Développement de deux nouvelles méthodes de désagrégation de la population au niveau du bâtiment, une première méthode pour la ville de Rennes et une méthode reproductible sur l'ensemble du territoire national français.",
				"Application livrée sous la forme d'un modeleur graphique exécutable dans Qgis.",
			],
			tags: ["Qgis", "Modeleur Graphique", "R"],
			icon: "group",
		},
	],
	education: [
		{
			title: "Master en Systèmes d'information géographique et analyse des territoires (SIGAT)",
			duration: "Janvier 2020 - Novembre 2022",
			subtitle: "Université Rennes 2",
			details: [
				"Trois projets professionnels au cours du développement de la formation et un stage de fin d'études de 6 mois.",
				"Compétences en visualisation et analyse de données, statistiques avancées, développement web, etc.",
				"Promotion de 15 étudiants, dont 80% ont été embauchés à la fin de son stage.",
			],
			tags: [ "Géomatique", "GIS Developer", "Statistiques Avancées"],
			icon: "graduation-cap",
		},
		{
			title: "Ingénieur Forestier",
			duration: "2008 - 2012",
			subtitle: "Universidade de Vigo",
			details: [
				"Gestion durable de la masse forestière.",
				"Propriétés du bois en tant que matériau.",
				"Étude des incendies, combustion, combustible, forme de propagation...",
				"Spécialité en Industries Forestières.",
				"Écologie, écosystèmes, biodiversité, succession végétale, botanique, etc.",
			],
			tags: ["Physics", "Chemistry", "Mathematics", "Ecology"],
			icon: "tree",
		},
		{
			title: "BTS en Systèmes Informatiques et de télécommunication",
			duration: "2004 - 2006",
			subtitle: "IES Ricardo Mella",
			details: [
				"Architecture de l'ordinateur : composants, programmation de micropuces, langage machine, portes logiques...",
				"Étude des médias de télécommunication : radio, télévision, téléphone.",
				"Autocad : de la conception de pièces industrielles sous différentes perspectives, au rendu 3D.",				
			],
			tags: ["Radio", "TV", "C++", "AutoCAD", "Téléphonie"],
			icon: "wifi",
		},
	],
	footer: [
		{
			label: "Social Profiles",
			data: [
				{
					text: "Linkedin",
					link: "https://www.linkedin.com/in/pablo-rial-gil/",
				},
				{
					text: "Twitter",
					link: "https://twitter.com/Pablo_Rial_Gil",
				},				
			],
		},
		{
			label: "Resources",
			data: [
				{
					text: "Enable Dark/Light Mode",
					func: "enableDarkMode()",
				},
				{
					text: "Print this page",
					func: "window.print()",
				},
				{
					text: "Clone this page",
					link: "https://github.com/vinaysomawat/vinaysomawat.github.io",
				},
			],
		},		
		{
			label: "copyright-text",
			data: [
				"Template made by Vinay Somawat.",
				"&copy; No Copyrights. Feel free to use this template."
			],
		},
	],
};
