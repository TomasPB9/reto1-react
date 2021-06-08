import '../css/Mesa.css';
import FilaSuperior from './FilaSuperior';
import FilaCentral from './FilaCentral';
import FilaFinal from './FilaFinal';

const Mesa = () => {
  return (
    <div className="mesa">
      <FilaSuperior />
      <FilaCentral />
      <FilaFinal />
    </div>
  )
}

export default Mesa;