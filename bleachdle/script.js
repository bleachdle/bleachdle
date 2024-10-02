const characters = [
  // Soul Reapers
  {
    name: "Ichigo Kurosaki",
    gender: "Male",
    species: "Human/Soul Reaper/Quincy/Hollow",
    bankai: "Yes",
    position: "Substitute Soul Reaper/Student",
    debutArc: "Soul Society Arc",
    height: "181 cm",
    image: "images/ichigo.webp"
  },
  {
    name: "Rukia Kuchiki",
    gender: "Female",
    species: "Soul Reaper",
    bankai: "Yes",
    position: "Lieutenant",
    debutArc: "Soul Society Arc",
    height: "144 cm",
    image: "images/rukia.webp"
  },
  {
    name: "Byakuya Kuchiki",
    gender: "Male",
    species: "Soul Reaper",
    bankai: "Yes",
    position: "Captain",
    debutArc: "Soul Society Arc",
    height: "180 cm",
    image: "images/byakuya.webp"
    
  },
  {
    name: "Toshiro Hitsugaya",
    gender: "Male",
    species: "Soul Reaper",
    bankai: "Yes",
    position: "Captain",
    debutArc: "Soul Society Arc",
    height: "133 cm",
    image: "images/toshiro.webp"
  },
  {
    name: "Kenpachi Zaraki",
    gender: "Male",
    species: "Soul Reaper",
    bankai: "Yes",
    position: "Captain",
    debutArc: "Soul Society Arc",
    height: "202 cm",
    image: "images/kenpachi.webp"
  },
  {
    name: "Shunsui Kyoraku",
    gender: "Male",
    species: "Soul Reaper",
    bankai: "Yes",
    position: "Captain",
    debutArc: "Soul Society Arc",
    height: "192 cm",
    image: "images/shunsui.webp"
  },
  {
    name: "Jushiro Ukitake",
    gender: "Male",
    species: "Soul Reaper",
    bankai: "No",
    position: "Captain",
    debutArc: "Soul Society Arc",
    height: "187 cm",
    image: "images/ukitake.webp"
  },
  {
    name: "Renji Abarai",
    gender: "Male",
    species: "Soul Reaper",
    bankai: "Yes",
    position: "Lieutenant",
    debutArc: "Soul Society Arc",
    height: "188 cm",
    image: "images/renji.webp"
  },
  {
    name: "Kisuke Urahara",
    gender: "Male",
    species: "Soul Reaper",
    bankai: "Yes",
    position: "Ex-Captain",
    debutArc: "Soul Society Arc",
    height: "183 cm",
    image: "images/urahara.webp"
  },
  {
    name: "Yoruichi Shihoin",
    gender: "Female",
    species: "Soul Reaper",
    bankai: "No",
    position: "Ex-Captain",
    debutArc: "Soul Society Arc",
    height: "156 cm",
    image: "images/yoruichi.webp"
  },
  {
    name: "Sajin Komamura",
    gender: "Male",
    species: "Soul Reaper",
    bankai: "Yes",
    position: "Captain",
    debutArc: "Soul Society Arc",
    height: "288 cm",
    image: "images/sajin.jpeg"
  },
  {
    name: "Mayuri Kurotsuchi",
    gender: "Male",
    species: "Soul Reaper",
    bankai: "Yes",
    position: "Captain",
    debutArc: "Soul Society Arc",
    height: "174 cm",
    image: "images/mayuri.webp"
  },
  {
    name: "Soi Fon",
    gender: "Female",
    species: "Soul Reaper",
    bankai: "Yes",
    position: "Captain",
    debutArc: "Soul Society Arc",
    height: "150 cm",
    image: "images/soifon.webp"
  },
  {
    name: "Gin Ichimaru",
    gender: "Male",
    species: "Soul Reaper",
    bankai: "Yes",
    position: "Ex-Captain",
    debutArc: "Soul Society Arc",
    height: "185 cm",
    image: "images/gin.webp"
  },
  {
    name: "Aizen Sousuke",
    gender: "Male",
    species: "Soul Reaper",
    bankai: "No",
    position: "Ex-Captain",
    debutArc: "Soul Society Arc",
    height: "186 cm",
    image: "images/aizen.jpg"
  },
  {
    name: "Shinji Hirako",
    gender: "Male",
    species: "Soul Reaper/Visored",
    bankai: "Yes",
    position: "Captain",
    debutArc: "Turn Back the Pendulum",
    height: "175 cm",
    image: "images/shinji.webp"
  },
  {
    name: "Kensei Muguruma",
    gender: "Male",
    species: "Soul Reaper/Visored",
    bankai: "Yes",
    position: "Captain",
    debutArc: "Turn Back the Pendulum",
    height: "179 cm",
    image: "images/kensei.webp"
  },
  {
    name: "Love Aikawa",
    gender: "Male",
    species: "Soul Reaper/Visored",
    bankai: "No",
    position: "Captain",
    debutArc: "Turn Back the Pendulum",
    height: "198 cm",
    image: "images/aikava.webp"
  },

  // Humans
  {
    name: "Orihime Inoue",
    gender: "Female",
    species: "Human",
    bankai: "No",
    position: "Student",
    debutArc: "Soul Society Arc",
    height: "157 cm",
    image: "images/oriji.webp"
  },
  {
    name: "Uryu Ishida",
    gender: "Male",
    species: "Quincy",
    bankai: "No",
    position: "Student",
    debutArc: "Soul Society Arc",
    height: "171 cm",
    image: "images/uryu.webp"
  },
  {
    name: "Chad (Yasutora Sado)",
    gender: "Male",
    species: "Human",
    bankai: "No",
    position: "Student",
    debutArc: "Soul Society Arc",
    height: "197 cm",
    image: "images/chad.webp"
  },
  {
    name: "Ryuken Ishida",
    gender: "Male",
    species: "Quincy",
    bankai: "No",
    position: "Quincy",
    debutArc: "Hueco Mundo Arc",
    height: "182 cm",
    image: "images/ryuken.webp"
  },
  {
    name: "Isshin Kurosaki",
    gender: "Male",
    species: "Human/Soul Reaper",
    bankai: "Yes",
    position: "Ex-Captain",
    debutArc: "Arrancar Arc",
    height: "186 cm",
    image: "images/Isshin_Kurosaki.webp"
  },
  {
    name: "Tatsuki Arisawa",
    gender: "Female",
    species: "Human",
    bankai: "No",
    position: "Student",
    debutArc: "Soul Society Arc",
    height: "155 cm",
    image: "images/tatsuka.webp"
  },

  // Arrancars and Hollows
  {
    name: "Ulquiorra Cifer",
    gender: "Male",
    species: "Arrancar",
    bankai: "No",
    position: "Espada",
    debutArc: "Arrancar Arc",
    height: "169 cm",
    image: "images/ulq.jpg"
  },
  {
    name: "Grimmjow Jaegerjaquez",
    gender: "Male",
    species: "Arrancar",
    bankai: "No",
    position: "Espada",
    debutArc: "Arrancar Arc",
    height: "186 cm",
    image: "images/grim.jpg"
  },
  {
    name: "Nnoitra Gilga",
    gender: "Male",
    species: "Arrancar",
    bankai: "No",
    position: "Espada",
    debutArc: "Arrancar Arc",
    height: "215 cm",
    image: "images/keniarakar.webp"
  },
  {
    name: "Tier Harribel",
    gender: "Female",
    species: "Arrancar",
    bankai: "No",
    position: "Espada",
    debutArc: "Arrancar Arc",
    height: "175 cm",
    image: "images/haribel.webp"
  },
  {
    name: "Coyote Stark",
    gender: "Male",
    species: "Arrancar",
    bankai: "No",
    position: "Espada",
    debutArc: "Arrancar Arc",
    height: "187 cm",
    image: "images/stark.jpg"
  },
  {
    name: "Baraggan Louisenbairn",
    gender: "Male",
    species: "Arrancar",
    bankai: "No",
    position: "Espada",
    debutArc: "Arrancar Arc",
    height: "254 cm",
    image: "images/djedo.webp"
  },
  {
    name: "Yammy Llargo",
    gender: "Male",
    species: "Arrancar",
    bankai: "No",
    position: "Espada",
    debutArc: "Arrancar Arc",
    height: "275 cm",
    image: "images/korist0.webp"
  },
  {
    name: "Nel Tu",
    gender: "Female",
    species: "Arrancar",
    bankai: "No",
    position: "Ex-Espada",
    debutArc: "Arrancar Arc",
    height: "136 cm",
    image: "images/nel.png"
  },
  {
    name: "Zommari Rureaux",
    gender: "Male",
    species: "Arrancar",
    bankai: "No",
    position: "Espada",
    debutArc: "Arrancar Arc",
    height: "185 cm",
    image: "images/zumi.webp"
  },
  {
    name: "Luppi Antenor",
    gender: "Male",
    species: "Arrancar",
    bankai: "No",
    position: "Espada",
    debutArc: "Arrancar Arc",
    height: "176 cm",
    image: "images/snupi.webp"
  },

  // Hollows
  {
    name: "Grand Fisher",
    gender: "Male",
    species: "Hollow",
    bankai: "No",
    position: "Hollow",
    debutArc: "Soul Society Arc",
    height: "200 cm",
    image: "images/fisher.webp"
  },
  {
    name: "White",
    gender: "Male",
    species: "Hollow",
    bankai: "No",
    position: "Hollow",
    debutArc: "Soul Society Arc",
    height: "178 cm",
    image: "images/white.webp"
  },

  // Quincy
  {
    name: "Yhwach",
    gender: "Male",
    species: "Quincy",
    bankai: "No",
    position: "Emperor",
    debutArc: "Thousand-Year Blood War",
    height: "195 cm",
    image: "images/yhawc.webp"
  },
  {
    name: "Jugram Haschwalth",
    gender: "Male",
    species: "Quincy",
    bankai: "No",
    position: "Sternritter",
    debutArc: "Thousand-Year Blood War",
    height: "187 cm",
    image: "images/c6f7745f164e0d43a9e45c3e90ed4ea0.jpg"
  },
  {
    name: "Bazz-B",
    gender: "Male",
    species: "Quincy",
    bankai: "No",
    position: "Sternritter",
    debutArc: "Thousand-Year Blood War",
    height: "181 cm",
    image: "images/bzzb.webp"
  },
  {
    name: "As Nodt",
    gender: "Male",
    species: "Quincy",
    bankai: "No",
    position: "Sternritter",
    debutArc: "Thousand-Year Blood War",
    height: "190 cm",
    image: "images/atno.jpg"
  },
  {
    name: "Pernida Parnkgjas",
    gender: "Unknown",
    species: "Quincy",
    bankai: "No",
    position: "Sternritter",
    debutArc: "Thousand-Year Blood War",
    height: "Unknown",
    image: "images/pernida.webp"
  },


  // Missing Characters

  // Soul Reapers
  {
    name: "Genryusai Shigekuni Yamamoto",
    gender: "Male",
    species: "Soul Reaper",
    bankai: "Yes",
    position: "Captain-Commander",
    debutArc: "Soul Society Arc",
    height: "168 cm",
    image: "images/yamamoto.webp"
  },
  {
    name: "Retsu Unohana",
    gender: "Female",
    species: "Soul Reaper",
    bankai: "Yes",
    position: "Captain",
    debutArc: "Soul Society Arc",
    height: "159 cm",
    image: "images/unohana.webp"
  },
  {
    name: "Tessai Tsukabishi",
    gender: "Male",
    species: "Soul Reaper",
    bankai: "No",
    position: "Ex-Captain of Kido Corps",
    debutArc: "Soul Society Arc",
    height: "220 cm",
    image: "images/tesai.webp"
  },

  // Visored
  {
    name: "Hiyori Sarugaki",
    gender: "Female",
    species: "Soul Reaper/Visored",
    bankai: "No",
    position: "Lieutenant",
    debutArc: "Turn Back the Pendulum",
    height: "133 cm",
    image: "images/papuca.webp"
  },
  {
    name: "Mashiro Kuna",
    gender: "Female",
    species: "Soul Reaper/Visored",
    bankai: "No",
    position: "Lieutenant",
    debutArc: "Turn Back the Pendulum",
    height: "152 cm",
    image: "images/kuna.webp"
  },

  // Quincy
  {
    name: "Lille Barro",
    gender: "Male",
    species: "Quincy",
    bankai: "No",
    position: "Sternritter",
    debutArc: "Thousand-Year Blood War",
    height: "195 cm",
    image: "images/Lille-Carre.webp"
  },
  {
    name: "Gerard Valkyrie",
    gender: "Male",
    species: "Quincy",
    bankai: "No",
    position: "Sternritter",
    debutArc: "Thousand-Year Blood War",
    height: "200 cm",
    image: "images/gerald.webp"
  },
  // Sternritter (Bambies)
  {
    name: "Bambietta Basterbine",
    gender: "Female",
    species: "Quincy",
    bankai: "No",
    position: "Sternritter",
    debutArc: "Thousand-Year Blood War",
    height: "162 cm",
    image: "images/bambi.webp"
  },
  {
    name: "Candice Catnipp",
    gender: "Female",
    species: "Quincy",
    bankai: "No",
    position: "Sternritter",
    debutArc: "Thousand-Year Blood War",
    height: "171 cm",
    image: "images/kendis.webp"
  },
  {
    name: "Giselle Gewelle",
    gender: "Female",
    species: "Quincy",
    bankai: "No",
    position: "Sternritter",
    debutArc: "Thousand-Year Blood War",
    height: "163 cm",
    image: "images/gvel.webp"
  },
  {
    name: "Liltotto Lamperd",
    gender: "Female",
    species: "Quincy",
    bankai: "No",
    position: "Sternritter",
    debutArc: "Thousand-Year Blood War",
    height: "145 cm",
    image: "images/lilo.webp"
  },
  {
    name: "Meninas McAllon",
    gender: "Female",
    species: "Quincy",
    bankai: "No",
    position: "Sternritter",
    debutArc: "Thousand-Year Blood War",
    height: "183 cm",
    image: "images/meninas.webp"
  },
  





  // Captains
{
  name: "Kaname Tosen",
  gender: "Male",
  species: "Soul Reaper",
  bankai: "Yes",
  position: "Captain",
  debutArc: "Soul Society Arc",
  height: "176 cm",
  image: "images/tosen.webp"
},
{
  name: "Rojuro Otoribashi",
  gender: "Male",
  species: "Soul Reaper/Visored",
  bankai: "Yes",
  position: "Captain",
  debutArc: "Turn Back the Pendulum",
  height: "182 cm",
  image: "images/rose.webp"
},
{
  name: "Isane Kotetsu",
  gender: "Female",
  species: "Soul Reaper",
  bankai: "No",
  position: "Captain",
  debutArc: "Thousand-Year Blood War",
  height: "187 cm",
  image: "images/isane.webp"
},
{
  name: "Lisa Yadomaru",
  gender: "Female",
  species: "Soul Reaper/Visored",
  bankai: "No",
  position: "Captain",
  debutArc: "Turn Back the Pendulum",
  height: "162 cm",
  image: "images/lisa.webp"
},
{
  name: "Iba Tetsuzaemon",
  gender: "Male",
  species: "Soul Reaper",
  bankai: "No",
  position: "Lieutenant",
  debutArc: "Thousand-Year Blood War",
  height: "180 cm",
  image: "images/iba.webp"
},
{
  name: "Kirinji Tenjiro",
  gender: "Male",
  species: "Soul Reaper",
  bankai: "No",
  position: "Zero Squad",
  debutArc: "Thousand-Year Blood War",
  height: "193",
  image: "images/tenjiro.webp"
},
{
  name: "Senjumaru Shutara",
  gender: "Female",
  species: "Soul Reaper",
  bankai: "No",
  position: "Zero Squad",
  debutArc: "Thousand-Year Blood War",
  height: "158",
  image: "images/senjumaru.webp"
},
{
  name: "Oetsu Nimaiya",
  gender: "Male",
  species: "Soul Reaper",
  bankai: "No",
  position: "Zero Squad",
  debutArc: "Thousand-Year Blood War",
  height: "172",
  image: "images/oetsu.webp"
},
{
  name: "Ichibe Hyosube",
  gender: "Male",
  species: "Soul Reaper",
  bankai: "No",
  position: "Zero Squad",
  debutArc: "Thousand-Year Blood War",
  height: "186",
  image: "images/ichibe.webp"
},
{
  name: "Hikifune Kirio",
  gender: "Female",
  species: "Soul Reaper",
  bankai: "No",
  position: "Zero Squad",
  debutArc: "Thousand-Year Blood War",
  height: "174",
  image: "images/hikifune.webp"
},

// Lieutenants
{
  name: "Momo Hinamori",
  gender: "Female",
  species: "Soul Reaper",
  bankai: "No",
  position: "Lieutenant",
  debutArc: "Soul Society Arc",
  height: "151 cm",
  image: "images/momo.webp"
},
{
  name: "Marechiyo Omaeda",
  gender: "Male",
  species: "Soul Reaper",
  bankai: "No",
  position: "Lieutenant",
  debutArc: "Soul Society Arc",
  height: "206 cm",
  image: "images/omaeda.webp"
},
{
  name: "Nanao Ise",
  gender: "Female",
  species: "Soul Reaper",
  bankai: "No",
  position: "Lieutenant",
  debutArc: "Soul Society Arc",
  height: "164 cm",
  image: "images/nanao.jpeg"
},
{
  name: "Ikkaku Madarame",
  gender: "Male",
  species: "Soul Reaper",
  bankai: "Yes",
  position: "Lieutenant",
  debutArc: "Soul Society Arc",
  height: "182 cm",
  image: "images/ikkaku.jpg"
},
{
  name: "Yachiru Kusajishi",
  gender: "Female",
  species: "Soul Reaper",
  bankai: "No",
  position: "Lieutenant",
  debutArc: "Soul Society Arc",
  height: "109 cm",
  image: "images/yachiru.jpg"
},
{
  name: "Rangiku Matsumoto",
  gender: "Female",
  species: "Soul Reaper",
  bankai: "No",
  position: "Lieutenant",
  debutArc: "Soul Society Arc",
  height: "172 cm",
  image: "images/rangiku.jpg"
},





//BREAK




{
  name: "Shuhei Hisagi",
  gender: "Male",
  species: "Soul Reaper",
  bankai: "Yes",
  position: "Lieutenant",
  debutArc: "Soul Society Arc",
  height: "181 cm",
  image: "images/shunei.webp"
},

{
  name: "Nemu Kurotsuchi",
  gender: "Female",
  species: "Soul Reaper",
  bankai: "No",
  position: "Lieutenant",
  debutArc: "Soul Society Arc",
  height: "167 cm",
  image: "images/nemu.webp"
},

// Side Characters
{
  name: "Shiba Ganju",
  gender: "Male",
  species: "Human",
  bankai: "No",
  position: "Shiba Clan Member",
  debutArc: "Soul Society Arc",
  height: "181 cm",
  image: "images/ganju.webp"
},
{
  name: "Kukaku Shiba",
  gender: "Female",
  species: "Human",
  bankai: "No",
  position: "Shiba Clan Member",
  debutArc: "Soul Society Arc",
  height: "167",
  image: "images/kukaku.webp"
},
{
  name: "Kaien Shiba",
  gender: "Male",
  species: "Soul Reaper",
  bankai: "No",
  position: "Lieutenant",
  debutArc: "Soul Society Arc",
  height: "183 cm",
  image: "images/kaien.webp"
},

// More Lieutenants
{
  name: "Izuru Kira",
  gender: "Male",
  species: "Soul Reaper",
  bankai: "No",
  position: "Lieutenant",
  debutArc: "Soul Society Arc",
  height: "173 cm",
  image: "images/kira.webp"
},



// More Soul Reapers
{
  name: "Hanataro Yamada",
  gender: "Male",
  species: "Soul Reaper",
  bankai: "No",
  position: "7th Seat, 4th Division",
  debutArc: "Soul Society Arc",
  height: "153 cm",
  image: "images/hanatoro.webp"
},

{
  name: "Chojiro Sasakibe",
  gender: "Male",
  species: "Soul Reaper",
  bankai: "Yes",
  position: "Lieutenant, 1st Division",
  debutArc: "Soul Society Arc",
  height: "179 cm",
  image: "images/chojiro.webp"
},
{
  name: "Sentaro Kotsubaki",
  gender: "Male",
  species: "Soul Reaper",
  bankai: "No",
  position: "Lieutenant, 13th Division",
  debutArc: "Soul Society Arc",
  height: "183",
  image: "images/sentaro.webp"
},

];

const arcOrder = ["Soul Society Arc", "Arrancar Arc", "Hueco Mundo Arc", "Turn Back the Pendulum", "Thousand-Year Blood War"];


let selectedCharacter = characters[Math.floor(Math.random() * characters.length)];


function compareHeight(guessHeight, correctHeight) {
  const guessHeightNum = parseInt(guessHeight);
  const correctHeightNum = parseInt(correctHeight);

  if (guessHeightNum < correctHeightNum) {
    return 'wrong up-arrow';  // Correct character is taller, but it's still wrong
  } else if (guessHeightNum > correctHeightNum) {
    return 'wrong down-arrow'; // Correct character is shorter, but it's still wrong
  } else {
    return 'correct';    // Same height
  }
}



function compareDebutArc(guessArc, correctArc) {
  const guessIndex = arcOrder.indexOf(guessArc);
  const correctIndex = arcOrder.indexOf(correctArc);

  if (guessIndex === -1 || correctIndex === -1) return 'wrong'; // Arc not found or invalid

  if (guessIndex < correctIndex) {
    return 'wrong up-arrow';  // Correct character debuted in a later arc, but it's still wrong
  } else if (guessIndex > correctIndex) {
    return 'wrong down-arrow'; // Correct character debuted in an earlier arc, but it's still wrong
  } else {
    return 'correct';    // Same debut arc
  }
}


function submitGuess() {
  const guessInput = document.getElementById("character-input").value.trim();
  const guessTable = document.getElementById("guess-table");

  // Normalize the input and character names by splitting into arrays of words and sorting
  const guessWords = guessInput.toLowerCase().split(' ').sort();

  const character = characters.find((char) => {
    const charNameWords = char.name.toLowerCase().split(' ').sort();
    return guessWords.every((word, index) => charNameWords.includes(word));
  });

  if (character) {
    const newRow = guessTable.insertRow();
    newRow.innerHTML = `
      <td>
        <div class="image-container">
          <img src="${character.image}" alt="${character.name}" class="character-image" />
          <div class="image-overlay">${character.name}</div>
        </div>
      </td>
      <td class="${compareCategory(character.gender, selectedCharacter.gender)}">${character.gender}</td>
      <td class="${compareSpecies(character.species, selectedCharacter.species)}">${character.species}</td>
      <td class="${compareCategory(character.bankai, selectedCharacter.bankai)}">${character.bankai}</td>
      <td class="${compareCategory(character.position, selectedCharacter.position)}">${character.position}</td>
      <td class="${compareDebutArc(character.debutArc, selectedCharacter.debutArc)}">${character.debutArc} ${getArrow(compareDebutArc(character.debutArc, selectedCharacter.debutArc))}</td>
      <td class="${compareHeight(character.height, selectedCharacter.height)}">${character.height} ${getArrow(compareHeight(character.height, selectedCharacter.height))}</td>
    `;

    // Check if the guessed character is correct
    if (character.name === selectedCharacter.name) {
      showCongratulations();
    }
  } else {
    alert("Character not found! Try again.");
  }

  document.getElementById("character-input").value = "";
  document.getElementById("suggestions").innerHTML = "";
}



function compareCategory(guess, correct) {
  return guess === correct ? 'correct' : 'wrong';
}

function compareSpecies(guessSpecies, correctSpecies) {
  const guessSpeciesArr = guessSpecies.split('/').map(species => species.trim());
  const correctSpeciesArr = correctSpecies.split('/').map(species => species.trim());
  const matchCount = guessSpeciesArr.filter(species => correctSpeciesArr.includes(species)).length;

  // If all species match exactly
  if (matchCount === correctSpeciesArr.length && guessSpeciesArr.length === correctSpeciesArr.length) {
    return 'correct';
  }
  // If there's any partial overlap, even if one species matches
  else if (matchCount > 0) {
    return 'partial';
  }
  // If no species match
  else {
    return 'wrong';
  }
}

function getArrow(comparison) {
  if (comparison === 'up-arrow') {
    return '↑';  // Up arrow for later arc or taller height
  } else if (comparison === 'down-arrow') {
    return '↓';  // Down arrow for earlier arc or shorter height
  } else {
    return '';   // No arrow for exact match
  }
}




function showCongratulations() {
  const congratsBox = document.createElement('div');
  congratsBox.classList.add('congratulations-box');
  congratsBox.innerHTML = `
    <h2>Well done!</h2>
    <p>You guessed the right character!</p>
    <button onclick="resetGame()">Play Again</button>
  `;
  document.body.appendChild(congratsBox);
}



function resetGame() {


  const congratsBox = document.querySelector('.congratulations-box');
  congratsBox.remove();


  const guessTable = document.getElementById('guess-table');
  guessTable.innerHTML = '';


  selectedCharacter = characters[Math.floor(Math.random() * characters.length)];
}

function showSuggestions() {
  const input = document.getElementById("character-input").value.toLowerCase();
  const suggestions = document.getElementById("suggestions");
  suggestions.innerHTML = '';

  if (input.length > 0) {
    const filteredCharacters = characters.filter(character =>
      character.name.toLowerCase().includes(input)
    );

    filteredCharacters.forEach((character) => {
      const suggestionDiv = document.createElement('div');
      
      const characterImg = document.createElement('img');
      characterImg.src = character.image; 
      characterImg.alt = character.name;  
      characterImg.style.width = '60px';  
      characterImg.style.height = '60px';  
      characterImg.style.marginRight = '20px'; 

      const characterName = document.createElement('span');
      characterName.innerText = character.name;


      suggestionDiv.appendChild(characterImg);
      suggestionDiv.appendChild(characterName);


      suggestionDiv.onclick = () => {
        document.getElementById('character-input').value = character.name;
        suggestions.innerHTML = ''; 
        submitGuess(); 
      };
      
      suggestions.appendChild(suggestionDiv);
    });
  }
}
