const Decem = require("../assets/Decem.mp3");
const Duo = require("../assets/Duo.mp3");
const Novem = require("../assets/Novem.mp3");
const Octo = require("../assets/Octo.mp3");
const Quattuor = require("../assets/Quattuor.mp3");
const Quinque = require("../assets/Quinque.mp3");
const Septem = require("../assets/Septem.mp3");
const Sex = require("../assets/Sex.mp3");
const Tres = require("../assets/Tres.mp3");
const Unus = require("../assets/Unus.mp3");
const Feles = require("../assets/Feles.mp3");
const Canis = require("../assets/Canis.mp3");
const Psittacus = require("../assets/Psittacus.mp3");
const Equs = require("../assets/Equs.mp3");
const Mustella = require("../assets/Mustella.mp3");
const Cavia_porcellus = require("../assets/Cavia_porcellus.mp3");
const Lynx = require("../assets/Lynx.mp3");
const Criceta = require("../assets/Criceta.mp3");
const Piscis = require("../assets/Piscis.mp3");
const Alces = require("../assets/Alces.mp3");
const Ianuarii = require("../assets/Ianuarii.mp3");
const Februarius = require("../assets/Februarius.mp3");
const Martius = require("../assets/Martius.mp3");
const Aprilis = require("../assets/Aprilis.mp3");
const Maius = require("../assets/Maius.mp3");
const Iunius = require("../assets/Iunius.mp3");
const Iulius = require("../assets/Iulius.mp3");
const Augustus = require("../assets/Augustus.mp3");
const Septembris = require("../assets/Septembris.mp3");
const Octobris = require("../assets/Octobris.mp3");
const Novembris = require("../assets/Novembris.mp3");
const Decembris = require("../assets/Decembris.mp3");
const Dies_lunae = require("../assets/Dies_lunae.mp3");
const Dies_martis = require("../assets/Dies_martis.mp3");
const Dies_mercurii = require("../assets/Dies_mercurii.mp3");
const Dies_Iovis = require("../assets/Dies_iovis.mp3");
const Dies_veneris = require("../assets/Dies_veneris.mp3");
const Dies_saturni = require("../assets/Dies_saturni.mp3");
const Dies_solis = require("../assets/Dies_solis.mp3");
const Rubrum = require("../assets/Rubrum.mp3");
const Caeruleum = require("../assets/Caeruleum.mp3");
const Viridis = require("../assets/Viridis.mp3");
const Flavum = require("../assets/Flavum.mp3");
const Purpureus = require("../assets/Purpureus.mp3");
const Roseus = require("../assets/Roseus.mp3");
const Candidus = require("../assets/Candidus.mp3");
const Aureus = require("../assets/Aureus.mp3");

const audioMapping = {
  unus: Unus,
  duo: Duo,
  tres: Tres,
  quattuor: Quattuor,
  quinque: Quinque,
  sex: Sex,
  septem: Septem,
  octo: Octo,
  novem: Novem,
  decem: Decem,
  feles: Feles,
  canis: Canis,
  psittacus: Psittacus,
  equs: Equs,
  mustella: Mustella,
  cavia_porcellus: Cavia_porcellus,
  lynx: Lynx,
  criceta: Criceta,
  piscis: Piscis,
  alces: Alces,
  ianuarii: Ianuarii,
  februarius: Februarius,
  martius: Martius,
  aprilis: Aprilis,
  maius: Maius,
  iunius: Iunius,
  iulius: Iulius,
  augustus: Augustus,
  septembris: Septembris,
  octobris: Octobris,
  novembris: Novembris,
  decembris: Decembris,
  dies_lunae: Dies_lunae,
  dies_martis: Dies_martis,
  dies_mercurii: Dies_mercurii,
  dies_iovis: Dies_Iovis,
  dies_veneris: Dies_veneris,
  dies_saturni: Dies_saturni,
  dies_solis: Dies_solis,
  rubrum: Rubrum,
  caeruleum: Caeruleum,
  viridis: Viridis,
  flavum: Flavum,
  purpureus: Purpureus,
  roseus: Roseus,
  candidus: Candidus,
  aureus: Aureus,
};

export type LatinWord = keyof typeof audioMapping;

export default audioMapping;
