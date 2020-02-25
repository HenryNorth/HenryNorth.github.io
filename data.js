const gameVersion = "10.4.1";

const mainIconUrl = `https://ddragon.leagueoflegends.com/cdn/${gameVersion}/img/champion`;

const champions = [
    {
      id: "Aatrox",
      name: "Aatrox",
      dateLastOnRotation: "2019-12-31",
    },
    {
      id: "Ahri",
      name: "Ahri",
      dateLastOnRotation: "2019-12-31",
    },
    {
      id: "Akali",
      name: "Akali",
      dateLastOnRotation: "2019-11-19",
    },
    {
      id: "Alistar",
      name: "Alistar",
      dateLastOnRotation: "2019-10-22",
    },
    {
      id: "Amumu",
      name: "Amumu",
      dateLastOnRotation: "2020-01-07",
    },
    {
      id: "Anivia",
      name: "Anivia",
      dateLastOnRotation: "2019-10-04",
    },
    {
      id: "Annie",
      name: "Annie",
      dateLastOnRotation: "2019-12-10",
    },
    {
      id: "Aphelios",
      name: "Aphelios",
      dateLastOnRotation: "2019-12-31",
    },
    {
      id: "Ashe",
      name: "Ashe",
      dateLastOnRotation: "2019-12-17",
    },
    {
      id: "AurelionSol",
      name: "Aurelion Sol",
      dateLastOnRotation: "2020-01-07",
    },
    {
      id: "Azir",
      name: "Azir",
      dateLastOnRotation: "2019-12-10",
    },
    {
      id: "Bard",
      name: "Bard",
      dateLastOnRotation: "2019-12-31",
    },
    {
      id: "Blitzcrank",
      name: "Blitzcrank",
      dateLastOnRotation: "",
    },
    {
      id: "Brand",
      name: "Brand",
      dateLastOnRotation: "",
    },
    {
      id: "Braum",
      name: "Braum",
      dateLastOnRotation: "",
    },
    {
      id: "Caitlyn",
      name: "Caitlyn",
      dateLastOnRotation: "",
    },
    {
      id: "Camille",
      name: "Camille",
      dateLastOnRotation: "",
    },
    {
      id: "Cassiopeia",
      name: "Cassiopeia",
      dateLastOnRotation: "",
    },
    {
      id: "Chogath",
      name: "Cho'gath",
      dateLastOnRotation: "",
    },
    {
      id: "Corki",
      name: "Corki",
      dateLastOnRotation: "",
    },
    {
      id: "Darius",
      name: "Darius",
      dateLastOnRotation: "",
    },
    {
      id: "Diana",
      name: "Diana",
      dateLastOnRotation: "",
    },
    {
      id: "DrMundo",
      name: "Dr. Mundo",
      dateLastOnRotation: "",
    },
    {
      id: "Draven",
      name: "Draven",
      dateLastOnRotation: "",
    },
    {
      id: "Ekko",
      name: "Ekko",
      dateLastOnRotation: "",
    },
    {
      id: "Elise",
      name: "Elise",
      dateLastOnRotation: "",
    },
    {
      id: "Evelynn",
      name: "Evelynn",
      dateLastOnRotation: "",
    },
    {
      id: "Ezreal",
      name: "Ezreal",
      dateLastOnRotation: "",
    },
    {
      id: "Fiddlesticks",
      name: "Fiddlesticks",
      dateLastOnRotation: "",
    },
    {
      id: "Fiora",
      name: "Fiora",
      dateLastOnRotation: "",
    },
    {
      id: "Fizz",
      name: "Fizz",
      dateLastOnRotation: "",
    },
    {
      id: "Galio",
      name: "Galio",
      dateLastOnRotation: "",
    },
    {
      id: "Gangplank",
      name: "Gangplank",
      dateLastOnRotation: "",
    },
    {
      id: "Garen",
      name: "Garen",
      dateLastOnRotation: "",
    },
    {
      id: "Gnar",
      name: "Gnar",
      dateLastOnRotation: "",
    },
    {
      id: "Gragas",
      name: "Gragas",
      dateLastOnRotation: "",
    },
    {
      id: "Graves",
      name: "Graves",
      dateLastOnRotation: "",
    },
    {
      id: "Hecarim",
      name: "Hecarim",
      dateLastOnRotation: "",
    },
    {
      id: "Heimerdinger",
      name: "Heimderdinger",
      dateLastOnRotation: "",
    },
    {
      id: "Illaoi",
      name: "Illaoi",
      dateLastOnRotation: "",
    },
    {
      id: "Irelia",
      name: "Irelia",
      dateLastOnRotation: "",
    },
    {
      id: "Ivern",
      name: "Ivern",
      dateLastOnRotation: "",
    },
    {
      id: "Janna",
      name: "Janna",
      dateLastOnRotation: "",
    },
    {
      id: "JarvanIV",
      name: "Jarvan IV",
      dateLastOnRotation: "",
    },
    {
      id: "Jax",
      name: "Jax",
      dateLastOnRotation: "",
    },
    {
      id: "Jayce",
      name: "Jayce",
      dateLastOnRotation: "",
    },
    {
      id: "Jhin",
      name: "Jhin",
      dateLastOnRotation: "",
    },
    {
      id: "Jinx",
      name: "Jinx",
      dateLastOnRotation: "",
    },
    {
      id: "Kaisa",
      name: "Kai'sa",
      dateLastOnRotation: "",
    },
    {
      id: "Kalista",
      name: "Kalista",
      dateLastOnRotation: "",
    },
    {
      id: "Karma",
      name: "Karma",
      dateLastOnRotation: "",
    },
    {
      id: "Karthus",
      name: "Karthus",
      dateLastOnRotation: "",
    },
    {
      id: "Kassadin",
      name: "Kassadin",
      dateLastOnRotation: "",
    },
    {
      id: "Katarina",
      name: "Katarina",
      dateLastOnRotation: "",
    },
    {
      id: "Kayle",
      name: "Kayle",
      dateLastOnRotation: "",
    },
    {
      id: "Kayn",
      name: "Kayn",
      dateLastOnRotation: "",
    },
    {
      id: "Kennen",
      name: "Kennen",
      dateLastOnRotation: "",
    },
    {
      id: "Khazix",
      name: "Kha'zix",
      dateLastOnRotation: "",
    },
    {
      id: "Kindred",
      name: "Kindred",
      dateLastOnRotation: "",
    },
    {
      id: "Kled",
      name: "Kled",
      dateLastOnRotation: "",
    },
    {
      id: "KogMaw",
      name: "Kog'Maw",
      dateLastOnRotation: "",
    },
    {
      id: "Leblanc",
      name: "Leblanc",
      dateLastOnRotation: "",
    },
    {
      id: "LeeSin",
      name: "Lee Sin",
      dateLastOnRotation: "",
    },
    {
      id: "Leona",
      name: "Leona",
      dateLastOnRotation: "",
    },
    {
      id: "Lissandra",
      name: "Lissandra",
      dateLastOnRotation: "",
    },
    {
      id: "Lucian",
      name: "Lucian",
      dateLastOnRotation: "",
    },
    {
      id: "Lulu",
      name: "Lulu",
      dateLastOnRotation: "",
    },
    {
      id: "Lux",
      name: "Lux",
      dateLastOnRotation: "",
    },
    {
      id: "Malphite",
      name: "Malphite",
      dateLastOnRotation: "",
    },
    {
      id: "Maokai",
      name: "Maokai",
      dateLastOnRotation: "",
    },
    {
      id: "MasterYi",
      name: "Master Yi",
      dateLastOnRotation: "",
    },
    {
      id: "MissFortune",
      name: "Miss Fortune",
      dateLastOnRotation: "",
    },
    {
      id: "Mordekaiser",
      name: "Mordekaiser",
      dateLastOnRotation: "",
    },
    {
      id: "Morgana",
      name: "Morgana",
      dateLastOnRotation: "",
    },
    {
      id: "Nami",
      name: "Nami",
      dateLastOnRotation: "",
    },
    {
      id: "Nasus",
      name: "Nasus",
      dateLastOnRotation: "",
    },
    {
      id: "Nautilus",
      name: "Nautilus",
      dateLastOnRotation: "",
    },
    {
      id: "Neeko",
      name: "Neeko",
      dateLastOnRotation: "",
    },
    {
      id: "Nidalee",
      name: "Nidalee",
      dateLastOnRotation: "",
    },
    {
      id: "Nocturne",
      name: "Nocturne",
      dateLastOnRotation: "",
    },
    {
      id: "Nunu",
      name: "Nunu & Willump",
      dateLastOnRotation: "",
    },
    {
      id: "Olaf",
      name: "Olaf",
      dateLastOnRotation: "",
    },
    {
      id: "Orianna",
      name: "Orianna",
      dateLastOnRotation: "",
    },
    {
      id: "Ornn",
      name: "Ornn",
      dateLastOnRotation: "",
    },
    {
      id: "Pantheon",
      name: "Pantheon",
      dateLastOnRotation: "",
    },
    {
      id: "Poppy",
      name: "Poppy",
      dateLastOnRotation: "",
    },
    {
      id: "Pyke",
      name: "Pyke",
      dateLastOnRotation: "",
    },
    {
      id: "Qiyana",
      name: "Qiyana",
      dateLastOnRotation: "",
    },
    {
      id: "Quinn",
      name: "Quinn",
      dateLastOnRotation: "",
    },
    {
      id: "Rakan",
      name: "Rakan",
      dateLastOnRotation: "",
    },
    {
      id: "Rammus",
      name: "Rammus",
      dateLastOnRotation: "",
    },
    {
      id: "RekSai",
      name: "Rek'Sai",
      dateLastOnRotation: "",
    },
    {
      id: "Renekton",
      name: "Renekton",
      dateLastOnRotation: "",
    },
    {
      id: "Rengar",
      name: "Rengar",
      dateLastOnRotation: "",
    },
    {
      id: "Riven",
      name: "Riven",
      dateLastOnRotation: "",
    },
    {
      id: "Rumble",
      name: "Rumble",
      dateLastOnRotation: "",
    },
    {
      id: "Ryze",
      name: "Ryze",
      dateLastOnRotation: "",
    },
    {
      id: "Sejuani",
      name: "Sejuani",
      dateLastOnRotation: "",
    },
    {
      id: "Senna",
      name: "Senna",
      dateLastOnRotation: "",
    },
    {
      id: "Sett",
      name: "Sett",
      dateLastOnRotation: "",
    },
    {
      id: "Shaco",
      name: "Shaco",
      dateLastOnRotation: "",
    },
    {
      id: "Shen",
      name: "Shen",
      dateLastOnRotation: "",
    },
    {
      id: "Shyvana",
      name: "Shyvana",
      dateLastOnRotation: "",
    },
    {
      id: "Singed",
      name: "Singed",
      dateLastOnRotation: "",
    },
    {
      id: "Sion",
      name: "Sion",
      dateLastOnRotation: "",
    },
    {
      id: "Sivir",
      name: "Sivir",
      dateLastOnRotation: "",
    },
    {
      id: "Skarner",
      name: "Skarner",
      dateLastOnRotation: "",
    },
    {
      id: "Sona",
      name: "Sona",
      dateLastOnRotation: "",
    },
    {
      id: "Soraka",
      name: "Soraka",
      dateLastOnRotation: "",
    },
    {
      id: "Swain",
      name: "Swain",
      dateLastOnRotation: "",
    },
    {
      id: "Sylas",
      name: "Sylas",
      dateLastOnRotation: "",
    },
    {
      id: "Syndra",
      name: "Syndra",
      dateLastOnRotation: "",
    },
    {
      id: "TahmKench",
      name: "Tahm Kench",
      dateLastOnRotation: "",
    },
    {
      id: "Taliyah",
      name: "Taliyah",
      dateLastOnRotation: "",
    },
    {
      id: "Talon",
      name: "Talon",
      dateLastOnRotation: "",
    },
    {
      id: "Taric",
      name: "Taric",
      dateLastOnRotation: "",
    },
    {
      id: "Teemo",
      name: "Teemo",
      dateLastOnRotation: "",
    },
    {
      id: "Thresh",
      name: "Thresh",
      dateLastOnRotation: "",
    },
    {
      id: "Tristana",
      name: "Tristana",
      dateLastOnRotation: "",
    },
    {
      id: "Udyr",
      name: "Udyr",
      dateLastOnRotation: "",
    },
    {
      id: "Trundle",
      name: "Trundle",
      dateLastOnRotation: "",
    },
    {
      id: "Tryndamere",
      name: "Tryndamere",
      dateLastOnRotation: "",
    },
    {
      id: "TwistedFate",
      name: "Twisted Fate",
      dateLastOnRotation: "",
    },
    {
      id: "Twitch",
      name: "Twitch",
      dateLastOnRotation: "",
    },
    {
      id: "Udyr",
      name: "Udyr",
      dateLastOnRotation: "",
    },
    {
      id: "Urgot",
      name: "Urgot",
      dateLastOnRotation: "",
    },
    {
      id: "Varus",
      name: "Varus",
      dateLastOnRotation: "",
    },
    {
      id: "Vayne",
      name: "Vayne",
      dateLastOnRotation: "",
    },
    {
      id: "Veigar",
      name: "Veigar",
      dateLastOnRotation: "",
    },
    {
      id: "Velkoz",
      name: "Vel'koz",
      dateLastOnRotation: "",
    },
    {
      id: "Vi",
      name: "Vi",
      dateLastOnRotation: "",
    },
    {
      id: "Viktor",
      name: "Viktor",
      dateLastOnRotation: "",
    },
    {
      id: "Vladimir",
      name: "Vladimir",
      dateLastOnRotation: "",
    },
    {
      id: "Volibear",
      name: "Volibear",
      dateLastOnRotation: "",
    },
    {
      id: "Warwick",
      name: "Warwick",
      dateLastOnRotation: "",
    },
    {
      id: "MonkeyKing",
      name: "Wukong",
      dateLastOnRotation: "",
    },
    {
      id: "Xayah",
      name: "Xayah",
      dateLastOnRotation: "",
    },
    {
      id: "Xerath",
      name: "Xerath",
      dateLastOnRotation: "",
    },
    {
      id: "XinZhao",
      name: "Xin Zhao",
      dateLastOnRotation: "",
    },
    {
      id: "Yasuo",
      name: "Yasuo",
      dateLastOnRotation: "",
    },
    {
      id: "Yorick",
      name: "Yorick",
      dateLastOnRotation: "",
    },
    {
      id: "Yuumi",
      name: "Yuumi",
      dateLastOnRotation: "",
    },
    {
      id: "Zac",
      name: "Zac",
      dateLastOnRotation: "",
    },
    {
      id: "Zed",
      name: "Zed",
      dateLastOnRotation: "",
    },
    {
      id: "Ziggs",
      name: "Ziggs",
      dateLastOnRotation: "",
    },
    {
      id: "Zilean",
      name: "Zilean",
      dateLastOnRotation: "",
    },
    {
      id: "Zoe",
      name: "Zoe",
      dateLastOnRotation: "",
    },
    {
      id: "Zyra",
      name: "Zyra",
      dateLastOnRotation: "",
    },
];
