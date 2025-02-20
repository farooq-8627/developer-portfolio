import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
	{
		id: 1,
		name: "Blitzs - News App",
		description:
			"Blitzs is a React Native app built with Expo and NativeWind, designed for seamless news reading and discovery. Users can browse articles across various categories, search for specific topics, and bookmark articles for later reading. With a clean and intuitive UI, Blitzs ensures a smooth reading experience. The app is available on the Google Play Store, making it easy to stay updated with the latest news anytime, anywhere.",
		tools: [
			"React-Native",
			"Expo",
			"NativeWind",
			"Node.js",
			"Express",
			"MongoDB",
		],
		role: "Full Stack Developer",
		code: "",
		github: "https://github.com/farooq-8627/Newsblitz-app",
		image: crefin,
	},
	{
		id: 2,
		name: "Connectz - Community Platform",
		description:
			"Connectz facilitates seamless communication among community members with shared interests and expertise. It categorizes users into domains like web development, app development, AI/ML and more, enabling effortless problem-solving and idea exchange. Users engage in real-time conversations to seek advice, share knowledge, and collaboratively address challenges in their respective fields, enhancing interaction and fostering innovation within specialized communities.",
		tools: [
			"React.js",
			"Node.js",
			"MongoDB",
			"Express",
			"Rest API",
			"Tailwind",
			"MUI",
		],
		role: "Full Stack Developer",
		code: "",
		github: "https://github.com/farooq-8627/Connectz",
		image: travel,
	},
	{
		id: 3,
		name: "Wanderlust - Travel Platform",
		description:
			"Wanderlust is a comprehensive full-stack travel platform inspired by Airbnb, integrating dynamic hotel listings, user reviews, and intuitive property management. Enabled users to search destinations, explore detailed hotel listings, leave reviews, and manage property listings effortlessly.",
		tools: ["HTML", "CSS", "JS", "Node.js", "Express", "MongoDB", "Bootstrap"],
		code: "",
		role: "Full Stack Developer",
		github: "https://github.com/farooq-8627/wanderlust",
		image: realEstate,
	},
	{
		id: 4,
		name: "Portfolio",
		description:
			"Developed a fully responsive and animated portfolio using React and Tailwind CSS. The project features seamless device adaptability and smooth animations, reflecting my focus on creating visually appealing and highly interactive user interfaces.",
		tools: ["NextJS", "Material UI", "Redux", "Sun Editor", "Calendar"],
		code: "",
		github: "https://github.com/farooq-8627/Portfolio",
		image: ayla,
		role: "Full Stack Developer",
	},
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
