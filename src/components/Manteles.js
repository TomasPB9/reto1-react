import '../css/Manteles.css';
import Cubiertos from './Cubiertos';
import Platos from './Platos';

const Manteles = () => {
  return (
    <div className="manteles">
      <Cubiertos />
      <Platos />
      <Cubiertos />
    </div>
  )
}

export default Manteles;