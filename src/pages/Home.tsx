import React from "react";
import { useTranslation } from "react-i18next";
import { StyledButton } from "@/components/Button";
import Counter from "@/components/Counter";
import { Languages, languages } from "@/locales/i18n";

export default function Home() {
	const { i18n, t } = useTranslation();
	const changeLang = (lang: Languages) => {
		i18n.changeLanguage(lang);
	};

	return (
		<div style={{ padding: "16px" }}>
			<p>{t("hello")}</p>
			{languages.map((lang) => {
				return (
					<StyledButton
						key={lang}
						variant="contained"
						onClick={() => changeLang(lang)}
					>
						{t(`language_${lang}`)}
					</StyledButton>
				);
			})}

			<div style={{ marginTop: "16px" }}>
				<p>Redux Counter</p>
				<Counter />
			</div>
		</div>
	);
}
