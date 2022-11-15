import emoji from "react-easy-emoji";

export const greetings = {
	name: "Lukas Frantzke",
	title: "Hi I'm Lukas!",
	description:
		`I'm an experienced and versatile Software Developer adept in bringing forth expertise in design,
		development, testing, and maintenance of software. Equipped with a diverse skill-set and
		proficient in various languages, platforms, and systems. Motivated to learn, grow, and master
		new technologies.`,
	resumeLink:
		"",
};

export const openSource = {
	githubUserName: "frantzke",
};

export const contact = {};

export const socialLinks = {
	url: "",
	linkedin: "https://www.linkedin.com/in/lukasfrantzke/",
	github: "https://github.com/frantzke",
};

export const skillsSection = {
	title: "Projects",
	subTitle: "",
	data: [
		{
			title: "Also Known For",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File.
			imageSrc: "/img/projects/also-known-for.png",
			github: "https://github.com/1hanzla100/developer-portfolio",
			link: "https://developer-portfolio-1hanzla100.vercel.app/",
			skills: [
				"Vue App of what actors are also known for",
				emoji(""),
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "VueJs",
					fontAwesomeClassname: "vscode-icons:file-type-vue",
				},
				{
					skillName: "NuxtJs",
					fontAwesomeClassname: "vscode-icons:file-type-nuxt",
				},
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
			],
		},
		{
			title: "VIP Assignment",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File,
			imageSrc: "/img/projects/vip-assignment.png",
			link: "https://vvipliving.com/",
			skills: [
				"Client project to share assignment listings for purchasing pre-construction condo suites",
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "ReactJS",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Firebase",
					fontAwesomeClassname: "vscode-icons:file-type-firebase",
				},
				{
					skillName: "Google Maps",
					fontAwesomeClassname: "logos:google-maps",
				},
			],
		},
		{
			title: "Mortgage Calculator",
			lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
			imageSrc: "/img/projects/mortgage-calculator.png",
			github: "https://github.com/frantzke/mortgage-calculator",
			link: "https://frantzke.github.io/mortgage-calculator/",
			skills: [
				"Simple mortgage calculator built in VueJs",
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "VueJs",
					fontAwesomeClassname: "vscode-icons:file-type-vue",
				},
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
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
		date: "2022 – Present",
		desc: "",
	},
	{
		role: "Full-Stack Developer",
		company: "GetQuorum",
		companylogo: "/img/icons/common/GetQuorum.png",
		date: "2021 – 2022",
		desc: "",
		// descBullets: [
		// 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
		// 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		// ],
	},
	{
		role: "Front-End Developer Consultant",
		company: "Clockwork Inc.",
		companylogo: "/img/icons/common/clockwork_background.png",
		date: "2019 - 2021",
		desc: "",
	},
	{
		role: "Front-End Developer Intern",
		company: "Clockwork Inc.",
		companylogo: "/img/icons/common/clockwork_background.png",
		date: "2017 - 2018",
		desc: "",
	},
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
	title: "Lukas Frantzke",
	description:
		"A passionate Full Stack Web Developer",
	author: "Lukas Frantzke",
	image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
	url: "",
	keywords: [
		"Lukas",
		"Lukas Frantzke",
		"Frantzke",
		"@frantzke",
		"frantzke",
		"Portfolio",
		"Lukas Portfolio ",
		"Lukas Frantzke Portfolio",
	],
}
