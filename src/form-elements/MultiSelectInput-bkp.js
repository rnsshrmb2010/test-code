import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class MultiSelectInput extends Component {
  render() {
    const { icon, field, cols, isIconShow, options } = this.props;
    let iconContent = '';
    if(isIconShow) {
      iconContent = (
          <div className="input-group-prepend">
            <div className="input-group-text"><i className={icon}></i></div>
          </div>
        )
    }
    let cont = `input-group col-${cols} ${field.errors.length > 0 && 'has-error'}`;
    let selectedItems = field.value.map(e => e);
    let otpSelect = options.map(e=> {
      let sel = selectedItems.indexOf(e.name);
      return (
        <Link key={e.value} className={sel === -1 ? 'dropdown-item' : 'dropdown-item active'} to='#!'>{e.name}</Link>
      )
    })
    return (
      <>
      <label>{field.label}<sup className="text-danger">{field.required && '*'}</sup></label><br />
      <div className="row">
        <div className={cont}>
          {iconContent}
          <div
            className="dropdown show w-100"
          >
            <div
              role="button" id="dropdownMenuLink"
              className={"btn-select btn border dropdown-toggle w-100 text-left " + (field.errors.length > 0 && 'error-input')}
            >
              Select
            </div>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              {otpSelect}
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              {field.errors.length > 0 && field.errors.map(error => (
                <div key={error} className="text-danger">
                  {error}&nbsp;
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default withRouter(MultiSelectInput)