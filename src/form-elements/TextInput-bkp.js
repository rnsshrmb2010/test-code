import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class TextInput extends Component {
  render() {
    const { icon, field, cols, isIconShow } = this.props;
    let autoFocus = false;
    if(this.props.autoFocus) {
      autoFocus = this.props.autoFocus
    }
    let cont = `input-group col-${cols} ${field.errors.length > 0 && 'has-error'}`;
    let iconContent = '';
    if(isIconShow) {
      iconContent = (
          <div className="input-group-prepend">
            <div className="input-group-text"><i className={icon}></i></div>
          </div>
        )
    }
    return (
      <>
      <label>{field.label}<sup className="text-danger">{field.required && '*'}</sup></label><br />
      <div className="row">
        <div className={cont}>
          {iconContent}
          <input
            autoFocus={autoFocus}
            name={field.name}
            placeholder={field.label}
            className={"form-control form-control-md " + (field.errors.length > 0 && 'error-input')}
            type={"text"}
            autoComplete={field.name}
            value={field.value}
            onChange={e=> this.props.store._handleChange(field.name, e.target.value, e)}
          />
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

export default withRouter(TextInput)