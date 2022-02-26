export const scrollToSection = (e, sectionName) => {
  const section = document.getElementById(sectionName);
  e.preventDefault();
  section && section.scrollIntoView({ behavior: "smooth", block: "start" });
};
