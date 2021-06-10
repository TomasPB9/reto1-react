import '../css/FilaSuperior.css';
import Manteles from './Manteles';

const FilaSuperior = () => {
  return (
    <div className="filaSuperior">
      <Manteles color="green" height="140px" />
      <Manteles height="170px"/>
      <Manteles color="purple" height="110px" />
    </div>
  );
}

export default FilaSuperior;