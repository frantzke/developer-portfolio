import emoji from "react-easy-emoji";

export const greetings = {
	name: "Lukas Frantzke",
	title: "Hi I'm Lukas!",
	descriptions: [
		`I'm a Senior Full-Stack Developer with over 6 years of experience building cloud-based web applications and B2B platforms. I have a strong focus on backend development with Node.js, where I’ve created scalable, secure systems and streamlined workflows for clients.`,
		`My experience also includes frontend development with React, VueJS, and Angular.`,
		`I enjoy solving complex problems and delivering high-quality solutions in agile environments.`,
	],
	description: ``,
	resumeLink: "",
};

export const openSource = {
	githubUserName: "frantzke",
};

export const contact = {
	email: "lukasfrantzke@gmail.com"
};

export const socialLinks = {
	// url: "https://frantzke-developer-portfolio.vercel.app/",
	linkedin: "https://www.linkedin.com/in/lukasfrantzke/",
	github: "https://github.com/frantzke",
	email: "lukasfrantzke@gmail.com"
};

export const skillsSection = {
	title: "Projects",
	subTitle: "Some of the projects I've worked on",
	data: [
		{
			title: "Also Known For",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File.
			imageSrc: "/img/projects/also-known-for.png",
			github: "https://github.com/frantzke/also-known-for",
			link: "https://frantzke.github.io/also-known-for/",
			skills: [
				"I created this website for myself after frequently searching for the voices behind animated movie characters, trying to figure out where I recognized them from and what other roles they've played. My goal was to make it easy to find that information and share it with friends.",
				"Built with a NuxtJS (Vue.js SSR) front-end utilizing Vuex, connecting to the TMDB RESTful API for images and data",
			],
			softwareSkills: [
				{
					skillName: "VueJs",
					fontAwesomeClassname: "vscode-icons:file-type-vue",
				},
				{
					skillName: "NuxtJs",
					fontAwesomeClassname: "vscode-icons:file-type-nuxt",
				},
				{
					skillName: "Vuetify",
					fontAwesomeClassname: "logos:vuetifyjs",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},

			],
		},
		{
			title: "E-Commerce Management App",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File,
			imageSrc: "/img/projects/ecommerce-app.png",
			link: "https://ecommerceapp-dev.web.app/",
			skills: [
				"An eCommerce management platform designed to handle products, orders, collections, customers, and a customer rewards program.",
				"Connected to Firebase backend for database, authentication, security, and deployment",
			],
			softwareSkills: [
				{
					skillName: "ReactJS",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Redux",
					fontAwesomeClassname: "simple-icons:redux",
				},
				{
					skillName: "Firebase",
					fontAwesomeClassname: "vscode-icons:file-type-firebase",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "Material-UI",
					fontAwesomeClassname: "mdi:material-ui",
				}
			],
		},
		{
			title: "Polly Glot",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File,
			imageSrc: "/img/projects/Polly-Glot.gif",
			link: "https://polly-glot-3qc.pages.dev",
			github: "https://github.com/frantzke/polly-glot",
			skills: [
				"Polly Glot is a powerful translation app that allows users to effortlessly translate text into French, Spanish, or Japanese. Powered by OpenAI's advanced translation capabilities, Polly Glot provides accurate and reliable translations for a wide range of purposes.",
			],
			softwareSkills: [

				{
					skillName: "ReactJS",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "ChatGPT",
					fontAwesomeClassname: "logos:openai-icon",
				},
				{
					skillName: "Cloudflare",
					fontAwesomeClassname: "logos:cloudflare-icon",
				},
				{
					skillName: "TypeScript",
					fontAwesomeClassname: "logos:typescript-icon",
				},
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
			],
		},
		{
			title: "COVID-19 Food Finder App",
			lottieAnimationFile: "/lottie/skills/ethereum.json", 
			imageSrc: "/img/projects/GENYOUTH.gif",
			github: "https://github.com/frantzke/ResourceFinderLF",
			link: "",
			blog: "https://community.sap.com/t5/technology-blogs-by-sap/genyouth-resource-finder-ios-app-by-clockwork-assisting-millions-of/ba-p/13429645",
			skills: [
				"Award-winning iOS app aimed at connecting economically disadvantaged students with meal programs offered by schools in the United States, fostering improved accessibility to essential nutritional resources.",
				"Recipient of the SAP Innovation Awards 2021 in the Cloud Genius category.",
				"Integrates with SAP OData service through SAP Business Technology Platform to consume school offering data.",
				"iOS app providing information on over 123,000 schools offering meals to families and students during the COVID-19 crisis.",

			],
			softwareSkills: [
				{
					skillName: "iOS",
					fontAwesomeClassname: "logos:ios",
				},
				{
					skillName: "Swift",
					fontAwesomeClassname: "logos:swift",
				},
				{
					skillName: "Xcode",
					fontAwesomeClassname: "logos:xcode",
				},
				{
					skillName: "Apple App Store",
					fontAwesomeClassname: "logos:apple-app-store",
				},
				{
					skillName: "Apple Maps",
					fontAwesomeClassname: "arcticons:maps",
				},
			],
		},
		{
			title: "VIP Assignment",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File,
			imageSrc: "/img/projects/vip-assignment.png",
			link: "https://vvipliving.com/",
			skills: [
				"Designed and developed web app to share assignments of pre-construction condo suites listed by real-estate company",
				"Integrates with Google Maps to display locations of listings and directly connects real estate agents to interested clients",
				"All content is customizable through accompanying content management portal",
				"Build in React using Redux, hosted with Firebase",
			],
			softwareSkills: [
				{
					skillName: "ReactJS",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Redux",
					fontAwesomeClassname: "simple-icons:redux",
				},
				{
					skillName: "Firebase",
					fontAwesomeClassname: "vscode-icons:file-type-firebase",
				},
				{
					skillName: "Google Maps",
					fontAwesomeClassname: "logos:google-maps",
				},
				{
					skillName: "Material-UI",
					fontAwesomeClassname: "mdi:material-ui",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				}
			],
		},
		{
			title: "Mortgage Calculator",
			lottieAnimationFile: "/lottie/skills/ethereum.json", 
			imageSrc: "/img/projects/mortgage-calculator.gif",
			github: "https://github.com/frantzke/mortgage-calculator",
			link: "https://frantzke.github.io/mortgage-calculator/",
			skills: [
				"Calculates a mortgage's regular payment, principal vs interest split, totals and more. ",
				"Built in VueJs including a Jest unit test suite",
			],
			softwareSkills: [
				{
					skillName: "VueJs",
					fontAwesomeClassname: "vscode-icons:file-type-vue",
				},
				{
					skillName: "Jest",
					fontAwesomeClassname: "file-icons:jest",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				}
			],
		},
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: "University of Toronto",
		subHeader: "Honours Bachelor of Science in Computer Science",
		duration: "2014 - 2019",
		desc: "",
		grade: "",
		descBullets: [],
	},
];

export const experience = [
	{
		role: "Software Developer",
		company: "Simplista",
		companylogo: "/img/icons/common/Simplista_Logo.png",
		date: "2022 - Present",
		desc: "",
		descBullets: [
			`Third developer with a backend focus of cloud-based B2B product listing platform, streamlining onboarding process for products across renowned retailers such as Sobeys and Pet Valu.`,
			`Independently designed and deployed user registration workflow leveraging Node and Active Directory, facilitating seamless onboarding for over 400 users securely.`,
			'Employed Python and machine learning to automate item categorization within product data, achieving a model with a 80% accuracy rate and eliminating manual classification efforts.',
			`Engineered a robust testing strategy for node microservices, leveraging Jest and seamlessly integrating with GitHub Actions to ensure code stability, functionality, and reliability.`,
			`Enhanced nutritional data recognition accuracy from 60% to 90% by leveraging Azure AI Vision (OCR) and utilizing ChatGPT for data conversion.`,
			`Revamped users RESTful API with industry best practices, streamlining functionality by consolidating 4 redundant endpoints.`,
		]
	},
	{
		role: "Full-Stack Developer",
		company: "GetQuorum",
		companylogo: "/img/icons/common/GetQuorum.png",
		date: "2021 - 2022",
		desc: "",
		descBullets: [
			"Collaborated in an agile environment to enhance internal and customer-facing platforms for managing and hosting condo AGMs, utilizing VueJS, NodeJS, PostgreSQL, and Docker.",
			"Full-stack developer working with VueJS, NuxtJS, NodeJs, Express, AWS, PostgreSQL, and Docker.",
			`Innovatively crafted live dashboard using NuxtJS (VueJS SSR) and web sockets, empowering team with real-time monitoring capabilities and heightened customer satisfaction.`,
			`Overhauled business invoicing system by implementing SQL refactoring and RESTful API enhancements, resulting in 80% reduction in fetch times.`,
			`Worked in a team to simplify the internal platform into a customer-facing self-service dashboard to allow for rapid scalability.`,
		],
	},
	{
		role: "Front-End Developer Consultant",
		company: "Clockwork Inc.",
		companylogo: "/img/icons/common/clockwork_background.png",
		date: "2017 - 2021",
		desc: "",
		descBullets: [
			"Designed and developed SAP iOS apps and web-based SAPUI5 (Fiori) applications for Clockwork's SAP Partnered clients.",
			"Recipient of SAP Innovation Award 2021 in Cloud Genius Category for Covid-19 Food FinderiOS App",
			`Created a time-sheetreporting app through NodeJS, MongoDB, React Native, and Swift for 50+ employees to efficiently
			report billable hours, saving the company over $1,000 of collective hours every week. Utilized Azure Active Directory to
			authenticate users and QuickBooks API to directly submit timesheets eliminating time-consuming tasks for accounting.`,
			`Designed and instructed courses on new technologies for clients to build future apps in-house, saving them the cost of
			outsourcing development. Constructed all course content, materials, demos, and step-by-step exercises. Directly led to
			additional advisory work afterward requested by trainees.`
		],
	}
];

export const projects = [
	{
		name: "developer-portfolio",
		desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
		github: "https://github.com/1hanzla100/developer-portfolio",
		link: "https://developer-portfolio-1hanzla100.vercel.app/",
	},
	{
		name: "Also Known For",
		desc: `Have you ever wondered, "where have I seen that actor before" or "where have I heard this voice before"? Also known for is an app to quickly see what other roles actors have played. Search your any movie or tv show and get the answer to your questions.`,
		github: "https://github.com/frantzke/also-known-for",
		link: "https://frantzke.github.io/also-known-for/",
	},
	{
		name: "Mortgage Calculator",
		desc: "Simple mortgage calculator built in VueJs",
		github: "https://github.com/frantzke/mortgage-calculator",
		link: "https://frantzke.github.io/mortgage-calculator/",
	},
	{
		name: "VVIP Assignment",
		desc: "Client project to share assignment listings for purchasing pre-construction condo suites",
		link: "https://vvipliving.com/",
	},
];

export const feedbacks = [
	{
		name: "",
		feedback:
			"",
	}
];

// See object prototype on SEO.jsx page
export const seoData = {
	title: "Lukas Frantzke Portfolio",
	description:
		"A passionate Full Stack Web Developer",
	author: "Lukas Frantzke",
	image: "https://avatars.githubusercontent.com/u/22245230?v=4",
	url: "https://frantzke-developer-portfolio.vercel.app/",
	keywords: [
		"Lukas",
		"Lukas Frantzke",
		"Frantzke",
		"@frantzke",
		"lukas",
		"frantzke",
		"lukas frantzke",
		"Portfolio",
		"Lukas Portfolio ",
		"Lukas Frantzke Portfolio",
		"Developer",
		"Software Engineer",
		"Full Stack Developer",
		"Full Stack",
	],
}
