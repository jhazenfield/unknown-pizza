module.exports = {
	name: "Unknown Pizza",
	email: "mark@unknownpizza.com",
	phoneForTel: "555-779-4407",
	phoneFormatted: "(555) 779-4407",
	address: {
		lineOne: "Unknown Location",
		lineTwo: "Only we know where it is",
		city: "Atlanta",
		state: "GA",
		zip: "00000",
		country: "US",
		mapLink: "https://maps.app.goo.gl/LgyDXD3LJJkLz92x6",
	},
	socials: {
		facebook: "https://www.facebook.com/",
		instagram: "https://www.instagram.com/",
	},
	//! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
	domain: "https://www.unknownpizza.com",
	// Passing the isProduction variable for use in HTML templates
	isProduction: process.env.ELEVENTY_ENV === "PROD",
};
