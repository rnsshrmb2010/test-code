import React from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { Register } from './../components';
@inject('store')
@observer
class Defaultlayout extends React.Component {
  render() {
    const { match } = this.props;
    let pageContent = '';
    switch(match.path) {
      case '/':
      case '/register':
        pageContent = <Register /> ;
        break;
      default: break;
    }

    return (
      <div className="container">
        <div className="row">  
          {pageContent}
        </div>
      </div>
    );
  }
}

export default withRouter(Defaultlayout);