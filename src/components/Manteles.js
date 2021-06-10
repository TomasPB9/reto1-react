import React from 'react';
import "../css/Manteles.css";
import Cubiertos from "./Cubiertos";
import Platos from "./Platos";
//good practices with props
import PropTypes from 'prop-types';

class Manteles extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      color: 'darksalmon',
      height: '120px',
    }
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: this.props.color || this.state.color,
          height: this.props.height || this.state.height,
        }}
        className="manteles"
      >
        <Cubiertos />
        <Platos />
        <Cubiertos />
      </div>
    );
  }
}

//good practice
Manteles.propTypes = {
  color: PropTypes.string,
  height: PropTypes.string,
}

export default Manteles;
