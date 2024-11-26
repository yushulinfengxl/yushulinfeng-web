import zhs from "@/i18n/locales/chinese-simplified";
// import zht from "locales/Chinese Traditional";
import en from "@/i18n/locales/english";

export default defineI18nConfig(() => ({
	legacy: false,
	locale: "zhs",
	messages: {
		zhs,
		zht: {},
		en,
		ja: {},
		ko: {},
		vi: {},
		id: {},
		fr: {},
		yue: {},
	},
	fallbackLocale: {
		zht: ["zhs"],
		yue: ["zht", "zhs"],
		default: ["en", "zhs", "zht", "ja"],
	},
}));
