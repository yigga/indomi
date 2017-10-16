require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
      
        <div className="notice">My First Project </div>
        <img src="http://indonesiaexpat.biz/wp-content/uploads/2017/07/capital-city-735x400.jpg" />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
