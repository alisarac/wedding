export type Lang = "tr" | "ru";
export const LANGS: Lang[] = ["tr", "ru"];
export const DEFAULT_LANG: Lang = "tr";

/* ──────────────────────────────────────────────────────────────────
   Shared facts (language-independent). Edit wedding logistics here.
   ────────────────────────────────────────────────────────────────── */
export const site = {
  names: { latin: "Ulya & Ali", cyrillic: "Уля & Али" },
  monogram: { left: "U", right: "A" },
  isoDate: "2026-07-25",
  startTime: "19:00",
  venueName: "Güzelcehisar Garden",
  venueArea: "İstanbul",
  venueAddress: "Otağtepe, Kavacık, Muhteşem Çk. No:25, 34810 Beykoz / İstanbul",
  mapUrl: "https://maps.app.goo.gl/Tncu7bZ7YdYZQe9KA",
  // Verified address query for the map embed — resolves to Muhteşem Çıkmazı,
  // Otağtepe, Kavacık (Beykoz, 34810), matching the shared pin's street.
  mapQuery: "Güzelcehisar Garden, Otağtepe, Kavacık, 34810 Beykoz, İstanbul",
  // Paste the *embed* src of your published Google Form here.
  // (Google Forms → Send → < > → copy the src="..." URL.)
  // Leave empty to show a graceful "coming soon" placeholder + button.
  rsvpEmbedUrl: "",
  // Fallback button link (the normal /viewform share link).
  rsvpFormUrl: "",
  // Gallery placeholders — replace `src` with real photos later.
  gallery: [
    { src: "", spanWide: true },
    { src: "", spanWide: false },
    { src: "", spanWide: false },
    { src: "", spanWide: false },
    { src: "", spanWide: false },
    { src: "", spanWide: true },
  ],
} as const;

/* ──────────────────────────────────────────────────────────────────
   Per-language copy.
   ────────────────────────────────────────────────────────────────── */
type Dict = {
  htmlLang: string;
  meta: { title: string; description: string };
  nav: { details: string; story: string; gallery: string; rsvp: string; info: string };
  langSwitchTo: string;
  hero: { eyebrow: string; sub: string; dateLine: string; venueLine: string; cta: string };
  story: { eyebrow: string; title: string; body: string };
  details: {
    eyebrow: string;
    title: string;
    dateLabel: string;
    dateValue: string;
    timeLabel: string;
    timeValue: string;
    placeLabel: string;
    placeValue: string;
    dressLabel: string;
    dressValue: string;
    mapCta: string;
    scheduleTitle: string;
    schedule: { time: string; label: string }[];
  };
  gallery: { eyebrow: string; title: string; note: string };
  rsvp: { eyebrow: string; title: string; body: string; cta: string; soon: string; adultsOnly: string };
  info: { eyebrow: string; title: string; items: { title: string; body: string }[] };
  footer: { line: string; namesLine: string };
};

export const dict: Record<Lang, Dict> = {
  tr: {
    htmlLang: "tr",
    meta: {
      title: "Ulya & Ali · Düğün",
      description:
        "25 Temmuz 2026 · Güzelcehisar Garden, Bartın. Düğünümüze davetlisiniz.",
    },
    nav: {
      details: "Detaylar",
      story: "Hikâyemiz",
      gallery: "Galeri",
      rsvp: "Katılım",
      info: "Bilgiler",
    },
    langSwitchTo: "Русский",
    hero: {
      eyebrow: "Evleniyoruz",
      sub: "Sizi, hayatımızın bu özel gününde aramızda görmekten mutluluk duyarız.",
      dateLine: "25 Temmuz 2026 · Cumartesi",
      venueLine: "Güzelcehisar Garden · İstanbul",
      cta: "Katılımınızı bildirin",
    },
    story: {
      eyebrow: "Hikâyemiz",
      title: "İki yol, tek hayat",
      body: "Buraya birlikte yolculuğunuzu anlatan kısa bir yazı gelecek — nasıl tanıştığınız, yollarınızın nasıl birleştiği ve bu güne nasıl geldiğiniz.",
    },
    details: {
      eyebrow: "Düğün",
      title: "Detaylar",
      dateLabel: "Tarih",
      dateValue: "25 Temmuz 2026, Cumartesi",
      timeLabel: "Saat",
      timeValue: "19:00 — düğün başlangıcı",
      placeLabel: "Mekân",
      placeValue: "Güzelcehisar Garden, Kavacık · İstanbul",
      dressLabel: "Kıyafet",
      dressValue: "Şık davet kıyafeti",
      mapCta: "Haritada aç",
      scheduleTitle: "Akış",
      schedule: [
        { time: "18:30", label: "Karşılama" },
        { time: "19:00", label: "Düğün başlangıcı" },
        { time: "20:00", label: "Yemek" },
        { time: "21:00", label: "Müzik & dans" },
        { time: "23:00", label: "Pasta & kapanış" },
      ],
    },
    gallery: {
      eyebrow: "Anılar",
      title: "Galeri",
      note: "Fotoğraflarımız yakında burada olacak.",
    },
    rsvp: {
      eyebrow: "Katılım",
      title: "Bize katılın",
      body: "Lütfen katılımınızı 1 Temmuz 2026 tarihine kadar bildirin. Aşağıdaki kısa formu doldurmanız yeterli.",
      cta: "Formu doldur",
      soon: "Katılım formu yakında burada olacak.",
      adultsOnly:
        "Çocuklarımızı çok sevsek de, kutlamamızı yetişkinlere özel olarak planladık. Anlayışınız için teşekkür ederiz.",
    },
    info: {
      eyebrow: "Pratik bilgiler",
      title: "Bilmeniz gerekenler",
      items: [
        {
          title: "Ulaşım",
          body: "Güzelcehisar Garden, Otağtepe, Kavacık (Beykoz / İstanbul). Mekânda otopark mevcuttur. Konum için haritayı kullanabilirsiniz.",
        },
        {
          title: "Konaklama",
          body: "Şehir merkezindeki konaklama önerileri yakında burada paylaşılacak.",
        },
        {
          title: "İletişim",
          body: "Sorularınız için bizimle iletişime geçmekten çekinmeyin.",
        },
      ],
    },
    footer: {
      line: "Sizi aramızda görmek için sabırsızlanıyoruz.",
      namesLine: "Ulya & Ali · 25 Temmuz 2026",
    },
  },

  ru: {
    htmlLang: "ru",
    meta: {
      title: "Уля & Али · Свадьба",
      description:
        "25 июля 2026 · Güzelcehisar Garden, Бартын. Приглашаем вас на нашу свадьбу.",
    },
    nav: {
      details: "Детали",
      story: "О нас",
      gallery: "Галерея",
      rsvp: "Участие",
      info: "Информация",
    },
    langSwitchTo: "Türkçe",
    hero: {
      eyebrow: "Мы женимся",
      sub: "Будем счастливы видеть вас рядом в этот особенный день нашей жизни.",
      dateLine: "25 июля 2026 · суббота",
      venueLine: "Güzelcehisar Garden · Стамбул",
      cta: "Подтвердить участие",
    },
    story: {
      eyebrow: "Наша история",
      title: "Две дороги, одна судьба",
      body: "Здесь будет короткий рассказ о вашем пути вдвоём — как вы познакомились, как соединились ваши дороги и как вы пришли к этому дню.",
    },
    details: {
      eyebrow: "Свадьба",
      title: "Детали",
      dateLabel: "Дата",
      dateValue: "25 июля 2026, суббота",
      timeLabel: "Время",
      timeValue: "19:00 — начало торжества",
      placeLabel: "Место",
      placeValue: "Güzelcehisar Garden, Kavacık · Стамбул",
      dressLabel: "Дресс-код",
      dressValue: "Нарядная одежда",
      mapCta: "Открыть на карте",
      scheduleTitle: "Программа",
      schedule: [
        { time: "18:30", label: "Встреча гостей" },
        { time: "19:00", label: "Начало торжества" },
        { time: "20:00", label: "Ужин" },
        { time: "21:00", label: "Музыка и танцы" },
        { time: "23:00", label: "Торт и завершение" },
      ],
    },
    gallery: {
      eyebrow: "Моменты",
      title: "Галерея",
      note: "Наши фотографии скоро появятся здесь.",
    },
    rsvp: {
      eyebrow: "Участие",
      title: "Будьте с нами",
      body: "Пожалуйста, подтвердите участие до 1 июля 2026 года. Достаточно заполнить короткую форму ниже.",
      cta: "Заполнить форму",
      soon: "Форма для подтверждения скоро появится здесь.",
      adultsOnly:
        "Как бы мы ни любили детей, мы планируем наше торжество как праздник для взрослых. Спасибо за понимание.",
    },
    info: {
      eyebrow: "Полезное",
      title: "Что нужно знать",
      items: [
        {
          title: "Как добраться",
          body: "Güzelcehisar Garden, Otağtepe, Kavacık (Бейкоз / Стамбул). На территории есть парковка. Для маршрута воспользуйтесь картой.",
        },
        {
          title: "Проживание",
          body: "Рекомендации по отелям в центре города мы добавим здесь чуть позже.",
        },
        {
          title: "Контакты",
          body: "Если у вас есть вопросы — пожалуйста, свяжитесь с нами.",
        },
      ],
    },
    footer: {
      line: "С нетерпением ждём встречи с вами.",
      namesLine: "Уля & Али · 25 июля 2026",
    },
  },
};

export function getDict(lang: Lang): Dict {
  return dict[lang];
}

export function otherLang(lang: Lang): Lang {
  return lang === "tr" ? "ru" : "tr";
}
