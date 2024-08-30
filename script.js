const userLanguage = navigator.userLanguage;
const defaultLanguage = 'en';
const languageSwitcher = document.getElementById('language-switcher');
languageSwitcher.value = userLanguage;
languageSwitcher.addEventListener('change', (e) =>{
    const selectedLanguage = e.target.value;
    updateContent(selectedLanguage);
})
function updateContent(selectedLanguage) {
    const translatableElements = document.querySelectorAll('[data-element]');
translatableElements.forEach((element) => {
    const translation = element.getAttribute(data-translate-$ {language});
    element.textContent = translation;
});
}