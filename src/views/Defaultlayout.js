import React from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { Register, ShowList } from './../components';
@inject('store')
@observer
class Defaultlayout extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">  
          <Register />
        </div>
        <div className="row mt-5">  
          <ShowList />
        </div>
      </div>
    );
  }
}

export default withRouter(Defaultlayout);