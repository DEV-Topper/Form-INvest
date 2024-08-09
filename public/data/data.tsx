import { BiCalendar } from "react-icons/bi";
import { BsCoin } from "react-icons/bs";
import { GiThreeLeaves, GiVacuumCleaner } from "react-icons/gi";
import {
	iBenefit,
	iHIW,
	iInput,
	iNav,
	iService,
	iTestimony,
} from "../utils/interfaces";
import { FaHandsClapping, FaSprayCanSparkles } from "react-icons/fa6";
import { LiaBrushSolid } from "react-icons/lia";

export const navData: iNav[] = [
	{
		link: "/",
		name: "Home",
	},
	{
		link: "/about",
		name: "about",
	},
	{
		link: "/services",
		name: "Services",
	},
	{
		link: "/pricing",
		name: "Pricing",
	},
	{
		link: "/blog",
		name: "Blog",
	},
];

export const inputData: iInput[] = [
	{
		label: "your name",
		name: "name",
		type: "text",
	},
	{
		label: "phone number",
		name: "number",
		type: "text",
	},
	{
		label: "ZIP code",
		name: "zip",
		type: "text",
	},
];

export const serviceOptions: string[] = [
	"Residential Cleaning",
	"commercial cleaning",
	"construction cleaning",
	"windows cleaning",
];

export const HIWData: iHIW[] = [
	{
		icon: <BsCoin />,
		bold: "Pick a suitable plan",
		small:
			"Choose the perfect cleaning plan tailored to your needs. Let Topkem Cleaning handle the rest!",
	},
	{
		icon: <BiCalendar />,
		bold: "Set your schedule",
		small:
			"Convenient, reliable, and flexible cleaning services tailored to your needs. Schedule your appointment today!",
	},
	{
		icon: <GiThreeLeaves />,
		bold: "Get things done",
		small:
			"Experience the best in professional cleaning. Efficient, thorough, and reliable – we make your space shine!",
	},
];

export const servicesData: iService[] = [
	{
		img: "/assets/service-1.jpg",
		type: "Residential Cleaning",
		price: "$20-50/hour",
	},
	{
		img: "/assets/service-2.jpg",
		type: "Commercial Cleaning",
		price: "$25-100/hour",
	},
	{
		img: "/assets/service-3.jpg",
		type: "Construction Cleaning",
		price: "$30-50/hour",
	},
	{
		img: "/assets/service-4.jpg",
		type: "Move-out cleaning",
		price: "$40-100/hour",
	},
	{
		img: "/assets/service-5.jpg",
		type: "Deep Cleaning",
		price: "$40-100/hour",
	},
	{
		img: "/assets/service-6.jpg",
		type: "Flat Fee",
		price: "$200-400+",
	},
	{
		img: "/assets/service-6.jpg",
		type: "Construction Flat Fee",
		price: "Up to $800",
	},
];

export const benefitData: iBenefit[] = [
	{
		icon: <FaHandsClapping />,
		b: "Experienced Staff",
		p: "Professional and Experienced staff ready to help you anytime.",
	},
	{
		icon: <FaSprayCanSparkles />,
		b: "Natural Products",
		p: "We only use natural products in the process, No harmful chemicals are used.",
	},
	{
		icon: <LiaBrushSolid />,
		b: "Fast Service",
		p: "Set your schedule and get the regular and faster cleaning everyday.",
	},
	{
		icon: <GiVacuumCleaner />,
		b: "Best Equipment",
		p: "We use the best and world class equipment for the cleaning process",
	},
];

export const testimonialData: iTestimony[] = [
	{
		img: "/assets/testimonial-1.jpg",
		city: "New York",
		p: "“Male saw behold saw darkness were our you'll without day air above lights, god you heaven moving you're yielding place second, it face it day sea whose heaven moving you're yielding place second, it face it day sea whose moving.”",
		b: "Chi R. Quinlan",
	},
	{
		img: "/assets/testimonial-2.jpg",
		city: "Chicago",
		p: "“To us man seasons moveth the air two whales image is unto face moveth beginning brought years over, form fish called, rule one stars together Shall under In yielding saying given dominion don't of two people. ”",
		b: "Donald Slade",
	},
];
