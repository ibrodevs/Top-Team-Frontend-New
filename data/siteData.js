// ============================================================
// Top Team KG — данные сайта
// Контент собран из открытых источников (июль 2026):
//   [IG]  Instagram @topteam.kg (официальный профиль клуба)
//   [YT]  YouTube «Top Team KG» — youtube.com/@topteamkg
//   [MF]  Mediafut — результаты MFL KG, 1 сезон (2023)
//   [SKG] Sport.kg — статьи от 15.11.2023 и 06.05.2025
//   [SRU] Sports.ru — 1XBET Media Football League (2023)
// Поля data_status / internal_note — служебные: НЕ выводятся
// в интерфейсе и нужны админу для сверки данных с клубом.
// ============================================================

export const navItems = [
  { label: "О клубе", path: "/club" },
  { label: "Состав", path: "/squad" },
  { label: "Матчи", path: "/fixtures" },
  { label: "Новости", path: "/news" },
  { label: "Медиа", path: "/media" },
  { label: "Партнеры", path: "/partners" },
  { label: "Контакты", path: "/contact" },
];

export const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/topteam.kg/",
    caption: "@topteam.kg",
    description: "Анонсы матчей, Reels и жизнь команды каждый день.",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@topteamkg",
    caption: "Top Team KG",
    description: "Влоги, матчи, TOPBATTLE и большие форматы клуба.",
  },
];

export const homeHero = {
  badge: "Media Football Club — Kyrgyzstan",
  title: "Больше чем игра",
  accent: "Это — Top Team",
  subtitle:
    "Top Team KG — медиа-футбольный клуб Кыргызстана, где футбол, контент и болельщики становятся одной командой. Следи за матчами, игроками и моментами, которые создают историю клуба.",
  primaryCta: { label: "Смотреть матчи", href: "/fixtures" },
  secondaryCta: { label: "Состав команды", href: "/squad" },
  tertiaryCta: { label: "Стать партнером", href: "/partners" },
};

// Все цифры подтверждены источниками (см. note / шапку файла)
export const homeStats = [
  { value: 3, suffix: "x", label: "Чемпион MFL KG", note: "Кыргызская медиафутбольная лига" },
  { value: 4, suffix: ":0", label: "Финал MFL KG 2023", note: "Победа над FC DJO" },
  { value: 6, suffix: "", label: "Экс-игроков сборной КР", note: "В составе команды" },
  { value: 17, suffix: "K+", label: "Подписчиков в Instagram", note: "@topteam.kg" },
];

export const aboutPillars = [
  {
    title: "Футбол",
    text: "Матчи, турниры и результат. Команда выходит на поле, чтобы побеждать и задавать уровень медиафутбола Кыргызстана.",
    icon: "trophy",
  },
  {
    title: "Медиа",
    text: "Влоги, хайлайты, backstage и YouTube. Каждый матч превращается в контент, который живет дольше финального свистка.",
    icon: "play",
  },
  {
    title: "Комьюнити",
    text: "Болельщики, молодежь и город. Top Team — это люди, которые вместе с командой создают новую футбольную культуру.",
    icon: "users",
  },
  {
    title: "Победа",
    text: "Амбиции, дисциплина и характер. Мы не играем, чтобы участвовать — мы играем, чтобы побеждать.",
    icon: "flame",
  },
];

export const clubQuote = {
  text: "Мы не играем, чтобы участвовать. Мы играем, чтобы побеждать.",
  caption: "Top Team KG",
};

export const clubFacts = [
  { label: "Формат", value: "Медиа-футбольный клуб" },
  { label: "База", value: "Бишкек, Кыргызстан" },
  { label: "Титулы", value: "3x чемпион MFL KG" },
];

export const clubTimeline = [
  {
    year: "2022",
    title: "Старт проекта",
    text: "Top Team KG выходит на сцену медиафутбола Кыргызстана: первые шоу-матчи, челленджи и видео на YouTube-канале клуба.",
    data_status: "год основания подтвердить у клуба (первые видео на канале — 2022)",
  },
  {
    year: "2023",
    title: "Международный дебют",
    text: "Клуб представляет Кыргызстан в 1XBET Media Football League в Казахстане: матчи против SD Family, 2DROTS и KONOHA.",
  },
  {
    year: "2023",
    title: "Чемпион MFL KG",
    text: "30 июня Top Team обыгрывает FC DJO со счетом 4:0 в финале первого сезона MFL KG на стадионе «Центральный».",
  },
  {
    year: "2023",
    title: "Экс-сборники в составе",
    text: "К чемпионам присоединяются игроки с опытом сборной Кыргызстана: Антон Землянухин, Вениамин Шумейко и Руслан Амиров.",
  },
  {
    year: "2024",
    title: "Рост медиа-экосистемы",
    text: "Матчи против AMKAL и SD U21, форматы TOP VLOG и TOPBATTLE, новые чемпионства в МФЛ — клуб растет и на поле, и в контенте.",
  },
  {
    year: "2025",
    title: "Национальная арена",
    text: "Top Team играет с «Дордоем» в Кубке Кыргызстана, одерживает первую победу на уровне национальной лиги и едет на международный МФЛ в Астану.",
  },
  {
    year: "2026",
    title: "Цифровая платформа клуба",
    text: "Запуск официальной платформы Top Team KG: матч-центр, состав, медиа, новости и партнерская программа в одном месте.",
  },
];

export const clubValues = [
  {
    title: "Победа",
    text: "Мы не играем, чтобы участвовать. Мы играем, чтобы побеждать и задавать уровень в медиафутболе Кыргызстана.",
  },
  {
    title: "Команда",
    text: "Игроки, штаб, болельщики и партнеры — одна экосистема, которая движется к общей цели.",
  },
  {
    title: "Медийность",
    text: "Top Team живет не только на поле. Контент, интервью, влоги и эмоции матчей — такая же часть бренда, как счет на табло.",
  },
  {
    title: "Открытость",
    text: "Клуб строит диалог с аудиторией, развивает комьюнити и показывает живую внутреннюю кухню проекта.",
  },
];

export const missionVision = [
  {
    title: "Миссия",
    text: "Развивать медиафутбол в Кыргызстане, объединять людей вокруг футбола и создавать контент, который вдохновляет новое поколение игроков и болельщиков.",
  },
  {
    title: "Видение",
    text: "Стать самым узнаваемым медиа-футбольным клубом Центральной Азии и вывести кыргызский медиафутбол на международный уровень.",
  },
  {
    title: "Характер",
    text: "Уверенный, энергичный, современный. Мы говорим на языке молодежи и играем на уровне профессионалов.",
  },
];

export const achievements = [
  {
    title: "3x чемпион MFL KG",
    year: "MFL KG",
    description: "Три чемпионских титула Кыргызской медиафутбольной лиги — фундамент победной ДНК клуба.",
  },
  {
    title: "Чемпион MFL KG 2023",
    year: "2023",
    description: "Финал первого сезона против FC DJO — 4:0 на стадионе «Центральный». Самая громкая победа в истории проекта.",
  },
  {
    title: "Champions Media Phygital Cup 2",
    year: "Cup",
    description: "Победа на стыке спорта и цифровых форматов — турнире, где решают и ноги, и голова.",
    data_status: "указано в Instagram-профиле клуба; год и детали подтвердить у клуба",
  },
  {
    title: "Первая победа в национальной лиге",
    year: "2025",
    description: "Победа над Anadolu — первая в истории клуба на уровне национальных соревнований Кыргызстана.",
  },
];

export const squadFilters = [
  "Все",
  "Вратари",
  "Защитники",
  "Полузащитники",
  "Нападающие",
  "Медиа",
];

// Состав — только игроки, подтвержденные публикациями (Sport.kg, 15.11.2023)
// и контентом клуба. Номера и статистика публикуются только после
// передачи официального ростера клубом.
export const players = [
  {
    id: "anton-zemlyanukhin",
    name: "Антон Землянухин",
    position: "Полузащитники",
    position_label: "Полузащитник",
    nationality: "Кыргызстан",
    role: "Экс-игрок сборной Кыргызстана. Опыт, техника и голы в решающие моменты.",
    bio: "Один из самых узнаваемых футболистов Кыргызстана. За плечами — матчи за национальную сборную и годы на высшем уровне. В Top Team перешел из «Алги» в 2023 году, когда команда уже была чемпионом MFL.",
  },
  {
    id: "veniamin-shumeiko",
    name: "Вениамин Шумейко",
    position: "Защитники",
    position_label: "Защитник",
    nationality: "Кыргызстан",
    role: "Экс-игрок сборной. Надежность и порядок в обороне.",
    bio: "Опытный защитник с бэкграундом национальной сборной. Пришел в Top Team из «Мурас Юнайтед» в 2023 году. Читает игру на шаг вперед и превращает оборону команды в стену.",
  },
  {
    id: "ruslan-amirov",
    name: "Руслан Амиров",
    position: "Вратари",
    position_label: "Вратарь",
    nationality: "Кыргызстан",
    role: "Экс-вратарь сборной Кыргызстана. Последний рубеж команды.",
    bio: "Вратарь с опытом национальной сборной, перешел в Top Team из «Алги» в 2023 году. Сэйвы Руслана — отдельный жанр контента клуба и главная страховка команды в решающих матчах.",
  },
  {
    id: "david-tetteh",
    name: "Давид Тетте",
    position: "Нападающие",
    position_label: "Нападающий",
    nationality: "Кыргызстан",
    role: "Скорость и мощь на острие атаки.",
    bio: "Форвард с опытом выступлений за сборную Кыргызстана. Взрывная скорость, борьба на каждом метре и голевое чутье — Давид держит в напряжении любую оборону.",
  },
  {
    id: "daniel-tego",
    name: "Даниэл Тэго",
    position: "Полузащитники",
    position_label: "Игрок",
    nationality: "Кыргызстан",
    role: "Креатив и дриблинг между линиями.",
    bio: "Игрок с опытом сборной, который делает игру Top Team зрелищной: обводки, передачи вразрез и моменты, которые попадают в хайлайты.",
    data_status: "позицию подтвердить у клуба",
  },
  {
    id: "bektur-talgat-uulu",
    name: "Бектур Талгат уулу",
    position: "Полузащитники",
    position_label: "Игрок",
    nationality: "Кыргызстан",
    role: "Опыт сборной и объем работы на поле.",
    bio: "Футболист с опытом национальной сборной. Объем работы, отборы и первый пас — игрок, который связывает линии Top Team.",
    data_status: "позицию подтвердить у клуба",
  },
  {
    id: "zhanadil-salymbekov",
    name: "Жанадил Салымбеков",
    position: "Медиа",
    position_label: "Медиа-игрок",
    nationality: "Кыргызстан",
    role: "Медиа-игрок и блогер. Голос команды в соцсетях.",
    bio: "Человек, который превращает матчдэй в шоу. Жанадил — часть медийной линии клуба: контент, вовлечение аудитории и энергия на поле и за его пределами.",
    data_status: "статус в текущем составе подтвердить у клуба",
  },
  {
    id: "mirlan-malikov",
    name: "Мирлан Маликов",
    position: "Медиа",
    position_label: "Медиа-игрок",
    nationality: "Кыргызстан",
    role: "Актер, блогер, спортсмен. Лицо клуба за пределами поля.",
    bio: "Мирлан расширяет аудиторию Top Team далеко за пределы футбола: экран, соцсети и харизма, которая делает клуб узнаваемым брендом.",
    data_status: "статус в текущем составе подтвердить у клуба",
  },
];

export const matches = [
  {
    id: "cup-kg-2025-dordoi",
    date: "2025-05-06T17:00:00+06:00",
    date_label: "6 мая 2025",
    competition: "Кубок Кыргызстана",
    stage: "1/16 финала",
    venue: "away",
    status: "finished",
    opponent: "Дордой",
    stadium: "Стадион «Дордой», Бишкек",
    team_score: 1,
    opponent_score: 3,
    summary: "Top Team дал бой одному из грандов профессионального футбола страны. Гол престижа на 90-й минуте забил Даниэл Курман.",
    cta_label: "Матч-центр",
    cta_href: "/fixtures",
  },
  {
    id: "mfl-final-2023",
    date: "2023-06-30T20:00:00+06:00",
    date_label: "30 июня 2023",
    competition: "MFL KG",
    stage: "Финал",
    venue: "away",
    status: "finished",
    opponent: "FC DJO",
    stadium: "Стадион «Центральный»",
    team_score: 4,
    opponent_score: 0,
    highlight: true,
    summary: "4:0 в финале первого сезона. Top Team разгромил FC DJO и стал чемпионом MFL KG.",
    cta_label: "Смотреть матч",
    cta_href: "https://www.youtube.com/watch?v=yETPuw65gJQ",
  },
  {
    id: "mfl-semifinal-inazuma",
    date: "2023-06-21T19:00:00+06:00",
    date_label: "21 июня 2023",
    competition: "MFL KG",
    stage: "Полуфинал",
    venue: "home",
    status: "finished",
    opponent: "INAZUMA ELEVEN",
    stadium: "КГАФКиС, Бишкек",
    team_score: 3,
    opponent_score: 1,
    summary: "Уверенная победа в плей-офф — и путевка в финал турнира.",
    cta_label: "Матч-центр",
    cta_href: "/fixtures",
  },
  {
    id: "mfl-group-djo",
    date: "2023-06-13T19:00:00+06:00",
    date_label: "13 июня 2023",
    competition: "MFL KG",
    stage: "Групповой этап",
    venue: "away",
    status: "finished",
    opponent: "FC DJO",
    stadium: "КГАФКиС, Бишкек",
    team_score: 5,
    opponent_score: 0,
    summary: "5:0 на групповом этапе против будущего соперника по финалу. Заявка на титул.",
    cta_label: "Матч-центр",
    cta_href: "/fixtures",
  },
  {
    id: "mfl-group-osh-city",
    date: "2023-06-07T19:00:00+06:00",
    date_label: "7 июня 2023",
    competition: "MFL KG",
    stage: "Групповой этап",
    venue: "home",
    status: "finished",
    opponent: "OSH CITY",
    stadium: "КГАФКиС, Бишкек",
    team_score: 1,
    opponent_score: 0,
    summary: "Плотный матч, характер и три очка при минимальном счете.",
    cta_label: "Матч-центр",
    cta_href: "/fixtures",
  },
  {
    id: "mfl-group-alash",
    date: "2023-05-30T19:00:00+06:00",
    date_label: "30 мая 2023",
    competition: "MFL KG",
    stage: "Групповой этап",
    venue: "home",
    status: "finished",
    opponent: "ALASH",
    stadium: "КГАФКиС, Бишкек",
    team_score: 2,
    opponent_score: 2,
    summary: "Результативная ничья в открытом футболе группового этапа.",
    cta_label: "Матч-центр",
    cta_href: "/fixtures",
  },
  {
    id: "1xbet-mfl-sd-family",
    date: "2023-01-28T16:00:00+06:00",
    date_label: "28 января 2023",
    competition: "1XBET Media Football League",
    stage: "2-й тур",
    venue: "away",
    status: "finished",
    opponent: "SD Family",
    stadium: "Астана, Казахстан",
    team_score: 1,
    opponent_score: 4,
    summary: "Матч против главного медиа-клуба Казахстана. Гол за Top Team забил Мамазакиров. Уровень, к которому идет команда.",
    cta_label: "Матч-центр",
    cta_href: "/fixtures",
  },
];

export const tournaments = [
  {
    name: "MFL KG",
    season: "3x чемпион",
    description: "Кыргызская медиафутбольная лига — домашний турнир клуба и три чемпионских титула, включая победу в первом сезоне 2023 года.",
  },
  {
    name: "Кубок Кыргызстана",
    season: "2025",
    description: "Дебют медиа-клуба в национальном кубке: матч 1/16 финала против «Дордоя» на его поле.",
  },
  {
    name: "1XBET Media Football League",
    season: "2023",
    description: "Международная арена медиафутбола в Казахстане: матчи против SD Family, 2DROTS и KONOHA.",
  },
  {
    name: "Международный МФЛ в Астане",
    season: "2025",
    description: "Турнир сильнейших медиа-команд региона: игры против Jaidarman, Broke Boys и Намыс.",
  },
];

export const newsCategories = [
  "Все",
  "Матчи",
  "Клуб",
  "Игроки",
  "Партнеры",
  "Медиа",
];

export const news = [
  {
    id: "cup-kg-2025-dordoi",
    title: "Кубок Кыргызстана: Top Team сыграл с «Дордоем»",
    subtitle: "Медиа-клуб вышел на профессиональный уровень: матч 1/16 финала национального кубка против одного из грандов кыргызского футбола.",
    category: "Матчи",
    featured: true,
    author: "Пресс-служба Top Team KG",
    created_date: "2025-05-06T21:00:00+06:00",
    cover_image_url: "/media/cup-kg-2025-topteam.jpg",
    body: `## Медиа-команда в национальном кубке

6 мая 2025 года Top Team сыграл против «Дордоя» в 1/16 финала Кубка Кыргызстана. Матч прошел на стадионе «Дордой» в Бишкеке и завершился со счетом 3:1 в пользу хозяев.

### Как это было

- «Дордой» открыл счет уже на 5-й минуте
- к 40-й минуте преимущество выросло до 2:0
- на 90-й минуте Даниэл Курман забил гол престижа за Top Team

### Что это значит

Сам выход медиа-клуба на матч с профессиональным грандом — показатель роста проекта. Top Team продолжает путь между медиафутболом и большой футбольной ареной.`,
  },
  {
    id: "first-national-league-win",
    title: "Первая победа в истории: Top Team обыграл Anadolu",
    subtitle: "Медиа-команда одержала первую победу на уровне национальной лиги Кыргызстана.",
    category: "Матчи",
    author: "Пресс-служба Top Team KG",
    created_date: "2025-04-19T20:00:00+06:00",
    cover_image_url: "/media/national-league-2025-topteam-anadolu.jpg",
    body: `## Историческая победа

Весной 2025 года Top Team одержал первую в своей истории победу на уровне национальных соревнований Кыргызстана — в матче против Anadolu.

### Почему это важно

Медиа-клубы редко выходят за пределы своих лиг. Top Team доказывает, что медиафутбол Кыргызстана способен конкурировать и на классическом уровне.

Полный фильм о матче — на YouTube-канале клуба.`,
    source_url: "https://www.youtube.com/watch?v=N1uJbl4SyT0",
  },
  {
    id: "astana-mfl-2025",
    title: "Top Team на международном МФЛ в Астане",
    subtitle: "Новые игроки, сильные соперники и жесткий календарь: как команда провела международный турнир в Казахстане.",
    category: "Матчи",
    author: "Пресс-служба Top Team KG",
    created_date: "2025-01-19T12:00:00+06:00",
    cover_image_url: "/media/astana-mfl-2025-preparation.jpg",
    body: `## Астана-2025

В начале 2025 года Top Team отправился на международный турнир МФЛ в Астану, усилив состав новыми игроками.

### Соперники

- Jaidarman
- Broke Boys
- Намыс
- Впорядке + Крап

Старт получился тяжелым, но каждый такой турнир — это опыт против сильнейших медиа-команд региона. Все выпуски о поездке — на YouTube-канале клуба.`,
    source_url: "https://www.youtube.com/watch?v=4kl2h6qYNCg",
  },
  {
    id: "mfl-final-win",
    title: "4:0 в финале. Top Team — чемпион MFL KG",
    subtitle: "Финал первого сезона против FC DJO превратился в бенефис Top Team: четыре безответных мяча и большой титул.",
    category: "Матчи",
    author: "Пресс-служба Top Team KG",
    created_date: "2023-06-30T22:00:00+06:00",
    cover_image_url: "/media/mfl-kg-final-2023-topteam-djo.jpg",
    body: `## Вечер, который вошел в историю клуба

30 июня 2023 года Top Team обыграл FC DJO со счетом 4:0 в финале первого сезона MFL KG на стадионе «Центральный».

### Путь к титулу

- групповой этап: 2:2 с ALASH, 1:0 с OSH CITY, 5:0 с FC DJO
- полуфинал: 3:1 против INAZUMA ELEVEN
- финал: 4:0 против FC DJO

### Что дальше

Титул MFL KG стал не финишем, а точкой отсчета: впереди были новые сезоны, чемпионства и выход на национальную арену.

Полная запись финала доступна на YouTube.`,
    source_url: "https://www.youtube.com/watch?v=yETPuw65gJQ",
  },
  {
    id: "national-team-players-join",
    title: "Экс-игроки сборной Кыргызстана — в Top Team",
    subtitle: "Антон Землянухин, Вениамин Шумейко и Руслан Амиров продолжат карьеру в чемпионском составе медиа-клуба.",
    category: "Игроки",
    author: "Пресс-служба Top Team KG",
    created_date: "2023-11-15T13:32:00+06:00",
    cover_image_url: "/media/interview-champions-2023.jpg",
    body: `## Усиление чемпионов

Состав Top Team — чемпиона первого сезона MFL-2023 — пополнили сразу три футболиста с опытом национальной сборной Кыргызстана:

- **Антон Землянухин** — полузащитник, перешел из «Алги»
- **Вениамин Шумейко** — защитник, перешел из «Мурас Юнайтед»
- **Руслан Амиров** — вратарь, перешел из «Алги»

### Сборная внутри клуба

Вместе с Давидом Тетте, Даниэлом Тэго и Бектуром Талгат уулу в составе Top Team собралась целая группа игроков, прошедших школу национальной сборной. Для медиафутбола Кыргызстана это новый уровень.`,
  },
  {
    id: "media-platform",
    title: "Влоги, TOPBATTLE и матчи: медиа-вселенная Top Team",
    subtitle: "Контент — вторая игра Top Team. Рассказываем, что смотреть и где следить за клубом.",
    category: "Медиа",
    author: "Media Team",
    created_date: "2026-07-02T09:00:00+06:00",
    cover_image_url: "/media/team-emotions-2025.jpg",
    body: `## Не только 90 минут

Top Team KG рассказывает о себе через влоги, эмоции матчей, интервью и вертикальный контент.

### Форматы клуба

- **TOP VLOG** — поездки, раздевалка и закулисье турниров
- **TOPBATTLE** — фирменный формат челленджей с медиа-звездами
- **Матчи и хайлайты** — игры клуба и лучшие моменты
- **Reels** — голы и эмоции в вертикальном формате в Instagram

Подписывайся на Instagram и YouTube клуба — самое важное всегда выходит там первым.`,
  },
];

export const mediaCategories = [
  "Все",
  "Матчи",
  "Влоги",
  "Интервью",
  "Шоу",
  "Reels",
];

export const mediaItems = [
  {
    id: "reels-instagram",
    title: "Голы и эмоции",
    type: "Reels",
    format: "vertical",
    description: "Вертикальные моменты клуба — голы, сэйвы и празднования в Instagram.",
    image_url: "/media/goal-celebration-2025.jpg",
    href: "https://www.instagram.com/topteam.kg/reels/",
    link_label: "Смотреть в Instagram",
  },
  {
    id: "mfl-final-2023-full",
    title: "Финал MFL KG 2023: Top Team — FC DJO",
    type: "Матчи",
    format: "horizontal",
    description: "Полная запись чемпионского финала первого сезона Кыргызской медиафутбольной лиги.",
    image_url: "/media/mfl-kg-final-2023-topteam-djo.jpg",
    href: "https://www.youtube.com/watch?v=yETPuw65gJQ",
    link_label: "Смотреть на YouTube",
  },
  {
    id: "anadolu-film",
    title: "Первая победа в истории: Top Team — Anadolu",
    type: "Матчи",
    format: "horizontal",
    description: "Фильм о первой победе медиа-команды на уровне национальной лиги Кыргызстана.",
    image_url: "/media/national-league-2025-topteam-anadolu.jpg",
    href: "https://www.youtube.com/watch?v=N1uJbl4SyT0",
    link_label: "Смотреть на YouTube",
  },
  {
    id: "champions-interview",
    title: "Знакомство с чемпионами",
    type: "Интервью",
    format: "horizontal",
    description: "Игроки Top Team от первого лица: узнаем чемпионов MFL KG поближе.",
    image_url: "/media/interview-champions-2023.jpg",
    href: "https://www.youtube.com/watch?v=MUn4OYf3Qz0",
    link_label: "Смотреть на YouTube",
  },
  {
    id: "kazakhstan-vlog",
    title: "Поездка в Казахстан: 2DROTS vs Top Team",
    type: "Влоги",
    format: "vertical",
    description: "Выезд на 1XBET Media Football League: «Астана Арена», эмоции и самый горячий матч поездки.",
    image_url: "/media/kazakhstan-mfl-2023-2drots.jpg",
    href: "https://www.youtube.com/watch?v=skIRfMWu1fU",
    link_label: "Смотреть на YouTube",
  },
  {
    id: "topbattle",
    title: "TOPBATTLE: TOPSTARS vs TOPTEAM",
    type: "Шоу",
    format: "horizontal",
    description: "Фирменный формат клуба: челленджи и битвы с участием звезд кыргызского футбола и медиа.",
    image_url: "/media/topbattle-2-topstars.jpg",
    href: "https://www.youtube.com/watch?v=QGOSxCs7UBQ",
    link_label: "Смотреть на YouTube",
  },
  {
    id: "year-review-2024",
    title: "Итоги года 2024",
    type: "Влоги",
    format: "vertical",
    description: "Наши в сборной КР, чемпионства в МФЛ и главные события года — большой разговор в студии клуба.",
    image_url: "/media/year-review-2024.jpg",
    href: "https://www.youtube.com/watch?v=mhsTid5wahI",
    link_label: "Смотреть на YouTube",
  },
  {
    id: "team-selection",
    title: "Отбор в медиа-команду",
    type: "Шоу",
    format: "horizontal",
    description: "Хочу в Top Team: финальная часть открытого отбора игроков — и путевка в Кубок.",
    image_url: "/media/cup-kg-2025-topteam.jpg",
    href: "https://www.youtube.com/watch?v=WV1eLnuLyvc",
    link_label: "Смотреть на YouTube",
  },
];

export const partnerBenefits = [
  {
    title: "Спорт + медиа",
    text: "Не просто размещение логотипа, а живые контентные интеграции вокруг матчей и команды.",
  },
  {
    title: "Молодая аудитория",
    text: "Мобильная, социальная и вовлеченная аудитория, которая живет в Instagram и на YouTube.",
  },
  {
    title: "Гибкие форматы",
    text: "От партнерства сезона до отдельных матчевых и digital-кампаний с быстрым продакшеном.",
  },
  {
    title: "Измеримый эффект",
    text: "Охваты, вовлечение и упоминания — прозрачная отчетность по каждой интеграции.",
  },
];

export const partnerFormats = [
  {
    title: "Логотип на форме",
    text: "Бренд на игровой экипировке — в каждом матче, каждом фото и каждом видео клуба.",
    icon: "shirt",
  },
  {
    title: "Интеграции в Reels",
    text: "Нативные появления бренда в самом виральном формате клуба.",
    icon: "clapperboard",
  },
  {
    title: "Матчевые партнерства",
    text: "Партнер матча: афиши, анонсы, брендинг игрового дня и спецконтент.",
    icon: "calendar",
  },
  {
    title: "YouTube / влоги",
    text: "Спонсорство влогов, TOPBATTLE и больших форматов с долгим сроком жизни контента.",
    icon: "play",
  },
  {
    title: "Event и турниры",
    text: "Совместные события, турниры и активации с участием команды и медиа-лиц.",
    icon: "trophy",
  },
  {
    title: "Social media кампании",
    text: "Кампании под ключ с игроками и медиа-персонами клуба.",
    icon: "megaphone",
  },
];

export const communityBlock = {
  badge: "Комьюнити",
  title: "Стань частью команды",
  text: "Топ-моменты, анонсы матчей, закулисье и жизнь клуба — каждый день в наших соцсетях. Подписывайся и будь ближе к команде.",
  cta: { label: "Следить за клубом", href: "https://www.instagram.com/topteam.kg/" },
};

export const contactCards = [
  {
    label: "Instagram",
    value: "@topteam.kg",
    href: "https://www.instagram.com/topteam.kg/",
  },
  {
    label: "YouTube",
    value: "Top Team KG",
    href: "https://www.youtube.com/@topteamkg",
  },
  {
    label: "Партнерства",
    value: "Написать в Direct",
    href: "https://www.instagram.com/topteam.kg/",
  },
];

export const contactTopics = [
  "Сотрудничество",
  "Матчи и турниры",
  "СМИ и интервью",
  "Игроки и состав",
  "Другое",
];

// ---------- Хелперы ----------

export const getUpcomingMatches = () =>
  matches.filter((match) => match.status === "upcoming");

export const getFinishedMatches = () =>
  [...matches]
    .filter((match) => match.status === "finished")
    .sort((a, b) => new Date(b.date) - new Date(a.date));

export const getLatestFinishedMatch = () => getFinishedMatches()[0];

export const getNextMatch = () => getUpcomingMatches()[0] || null;

export const getFeaturedMatch = () => getNextMatch() || getLatestFinishedMatch();

export const getLatestNews = (limit) =>
  [...news]
    .sort((a, b) => new Date(b.created_date) - new Date(a.created_date))
    .slice(0, limit);

export const getPlayerById = (id) => players.find((player) => player.id === id);

export const getNewsById = (id) => news.find((article) => article.id === id);

export const getRelatedNews = (id, limit = 3) =>
  news.filter((article) => article.id !== id).slice(0, limit);
