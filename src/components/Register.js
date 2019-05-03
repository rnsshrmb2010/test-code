import React from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { RegisterInput } from './../inputs'
import { TextInput, MultiSelectInput } from './../form-elements';

@inject('store')
@observer
class Register extends React.Component {
  componentWillMount() {
    this.props.store.createForm(RegisterInput);
  }

  render() {
    const { store } = this.props;
    const otps = [
      {name: 'Academic librarian', value: 'Academic librarian'},
      {name: 'Accountant', value: 'Accountant'},
      {name: 'Accounting technician', value: 'Accounting technician'},
      {name: 'Actuary', value: 'Actuary'},
      {name: 'Adult nurse', value: 'Adult nurse'}
    ]
    return (
        <div className="col">
          <h1>Registation Form</h1>
          <TextInput
            autoFocus={true}
            field={store.formInput.name}
            handleChange={(n,v, e)=> {this._handleChange(n,v, e);}}
            icon={'fas fa-user-tie'}
            isIconShow={true}
            cols={6}
          />
          <MultiSelectInput
            field={store.formInput.job_duties}
            cols={6}
            options={otps}
          />
        </div>
    );
  }
}

export default withRouter(Register);