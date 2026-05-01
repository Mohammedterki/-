const surahSelect = document.getElementById("surahSelect");
const ayahInput = document.getElementById("ayahInput");
const openQuran = document.getElementById("openQuran");
const hadithText = document.getElementById("hadithText");
const newHadith = document.getElementById("newHadith");
const fontSize = document.getElementById("fontSize");
const darkMode = document.getElementById("darkMode");

const surahs = [
  "الفاتحة","البقرة","آل عمران","النساء","المائدة","الأنعام","الأعراف","الأنفال","التوبة","يونس"
];

surahs.forEach((name, i) => {
  const option = document.createElement("option");
  option.value = i + 1;
  option.textContent = `${i + 1} - ${name}`;
  surahSelect.append(option);
});

openQuran.addEventListener("click", () => {
  const surah = surahSelect.value || 1;
  const ayah = ayahInput.value ? `:${ayahInput.value}` : "";
  window.open(`https://quran.com/${surah}${ayah}`, "_blank");
});

const ahadith = [
  "قال رسول الله ﷺ: «خيركم من تعلم القرآن وعلمه».",
  "قال رسول الله ﷺ: «اقرؤوا القرآن فإنه يأتي يوم القيامة شفيعًا لأصحابه».",
  "قال رسول الله ﷺ: «الماهر بالقرآن مع السفرة الكرام البررة»."
];

newHadith.addEventListener("click", () => {
  const i = Math.floor(Math.random() * ahadith.length);
  hadithText.textContent = ahadith[i];
});

document.querySelectorAll(".tafsir-link").forEach(btn => {
  btn.addEventListener("click", () => window.open(btn.dataset.url, "_blank"));
});

fontSize.addEventListener("input", () => {
  document.body.style.fontSize = `${fontSize.value}px`;
});

darkMode.addEventListener("change", () => {
  document.body.classList.toggle("dark", darkMode.checked);
});
