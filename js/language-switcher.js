function applyTranslations(lang) {
  const selectedTranslations = translations[lang] || translations.no;

  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (selectedTranslations[key]) {
      element.textContent = selectedTranslations[key];
    }
  });

  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });
}

function setLanguage(lang) {
  localStorage.setItem("preferredLanguage", lang);
  applyTranslations(lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("preferredLanguage") || "no";
  applyTranslations(savedLanguage);

  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.lang);
    });
  });
});
