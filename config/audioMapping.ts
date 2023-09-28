import Decem from "../assets/Decem.mp3";
import Duo from "../assets/Duo.mp3";
import Novem from "../assets/Novem.mp3";
import Octo from "../assets/Octo.mp3";
import Quattuor from "../assets/Quattuor.mp3";
import Quinque from "../assets/Quinque.mp3";
import Septem from "../assets/Septem.mp3";
import Sex from "../assets/Sex.mp3";
import Tres from "../assets/Tres.mp3";
import Unus from "../assets/Unus.mp3";

const audioMapping: { [key: string]: any } = {
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
};

export default audioMapping;
