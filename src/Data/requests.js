// src/data/requests.js
import PuntaCanaPhoto from '../Images/puntacana.jpg';
import ParqueEste from '../Images/parqueeste.jpg';
import IslaCabritos from "../Images/isla-cabritos.jpg";
import SierraBahoruco from "../Images/sierra-bahoruco.jpg";
import ValleNuevo from "../Images/valle-nuevo.jpg";


const requests = [
  {
    title: 'Parque Ecologico Ojos Indigenas - Punta Cana',
    date: '23/Nov/2023',
    status: 'ABIERTA',
    image: PuntaCanaPhoto,
  },
  {
    title: 'Parque Nacional Isla Cabritos - Lago Enriquillo',
    date: '05/Dic/2023',
    status: 'CERRADA',
    image: IslaCabritos,
  },
  {
    title: 'Parque Nacional del Este - Punta Cana',
    date: '12/Ene/2024',
    status: 'ABIERTA',
    image: ParqueEste,
  },
  {
    title: 'Parque Nacional Sierra de Bahoruco - Barahona',
    date: '15/Mar/2024',
    status: 'ABIERTA',
    image: SierraBahoruco,
  },
  {
    title: 'Parque Nacional Valle Nuevo',
    date: '20/May/2024',
    status: 'CERRADA',
    image: ValleNuevo,
  },
];

export default requests;
