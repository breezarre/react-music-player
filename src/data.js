import { v4 as uuidv4 } from "uuid";

function animeSongs() {
  return [
    {
      name: "Dream of Life",
      cover: "https://medium-media.vgm.io/albums/74/39347/39347-1374979722.jpg",
      artist: "Itou Shouhei, Kawamura Yuki",
      color: ["#FAD07F", "#496B8D"],
      id: uuidv4(),
      active: true,
      audio:
        "https://themesmoeaudio.sfo2.digitaloceanspaces.com/themes/10030/OP_V1.mp3",
    },
    {
      name: "Namae wo Yobu yo",
      cover: "https://medium-media.vgm.io/albums/56/58065/58065-1466053514.png",
      artist: "Luck Life/pon",
      color: ["#AC5629", "#9D6D5A"],
      id: uuidv4(),
      active: false,
      audio:
        "https://themesmoeaudio.sfo2.digitaloceanspaces.com/themes/31478/ED.mp3",
    },
    {
      name: "New Page",
      cover: "https://medium-media.vgm.io/albums/22/79122/79122-1564754275.jpg",
      artist: "INTERSECTION",
      color: ["#F5CC9E", "#2A1865"],
      id: uuidv4(),
      active: false,
      audio:
        "https://themesmoeaudio.sfo2.digitaloceanspaces.com/themes/34572/ED11_V1.mp3",
    },
    {
      name: "Complication",
      cover: "https://medium-media.vgm.io/albums/16/31361/31361-1336447600.jpg",
      artist: "ROOKiEZ is PUNK'D",
      color: ["#F5CC9E", "#2A1865"],
      id: uuidv4(),
      active: false,
      audio:
        "https://themesmoeaudio.sfo2.digitaloceanspaces.com/themes/6746/OP2.mp3",
    },
    {
      name: "Shout Baby",
      cover: "https://medium-media.vgm.io/albums/10/88001/88001-1561381928.jpg",
      artist: "Ryokuoushoku Shakai",
      color: ["#C6B613", "#DFE0D6"],
      id: uuidv4(),
      active: false,
      audio:
        "https://themesmoeaudio.sfo2.digitaloceanspaces.com/themes/38408/ED2.mp3",
    },
    {
      name: "Datte Atashi no Hero.",
      cover: "https://medium-media.vgm.io/albums/76/69367/69367-1504613032.jpg",
      artist: "LiSA",
      color: ["#F6D4C8", "#6E6140"],
      id: uuidv4(),
      active: false,
      audio:
        "https://themesmoeaudio.sfo2.digitaloceanspaces.com/themes/33486/ED2.mp3",
    },
    {
      name: "Hana Ichi Monme",
      cover: "https://medium-media.vgm.io/albums/22/73022/73022-1540252285.jpg",
      artist: "BURNOUT SYNDROMES",
      color: ["#465CBF", "#A7B6D2"],
      id: uuidv4(),
      active: false,
      audio:
        "https://themesmoeaudio.sfo2.digitaloceanspaces.com/themes/36838/ED_V2.mp3",
    },
    {
      name: "Departures ~Anata ni Okuru Ai no Uta~ ",
      cover: "https://medium-media.vgm.io/albums/11/29311/29311-1322160965.jpg",
      artist: "EGOIST",
      color: ["#152649", "#642E33"],
      id: uuidv4(),
      active: false,
      audio:
        "https://themesmoeaudio.sfo2.digitaloceanspaces.com/themes/10793/ED1_V1.mp3",
    },
    {
      name: "Heart Relize",
      cover: "https://medium-media.vgm.io/albums/57/43075/43075-1397234548.jpg",
      artist: "Tia",
      color: ["#04479E", "#A2C0D7"],
      id: uuidv4(),
      active: false,
      audio:
        "https://themesmoeaudio.sfo2.digitaloceanspaces.com/themes/20507/ED_V1.mp3",
    },
    {
      name: "NIRUBANA",
      cover: "https://medium-media.vgm.io/albums/00/54800/54800-1444795760.jpg",
      artist: "Tia",
      color: ["#DE9690", "#FBD6A0"],
      id: uuidv4(),
      active: false,
      audio:
        "https://themesmoeaudio.sfo2.digitaloceanspaces.com/themes/30503/ED_V1.mp3",
    },
  ];
}

export default animeSongs;
