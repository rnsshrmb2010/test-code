import React from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  Button
 } from '@material-ui/core';
 import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
 import SaveIcon from '@material-ui/icons/Save';
import { RegisterInput } from './../inputs';
import { CONSTS } from './../constants';
import { TextInput, MultiSelectInput } from './../form-elements';


@inject('store')
@observer
class Register extends React.Component {
  componentWillMount() {
    this.props.store.createForm(RegisterInput);
  }

  _handleSubmit(event) {
    const { store } = this.props;
    const isValid = store.formInput.validate();
    if(isValid) {
      const item = store.formInput.getParams();
      store.formInput.resetInputs();
      store.itemList.push(item);
    } else {
      console.log('Not Valid Inputs');
    }
    event.preventDefault();
  }

  render() {
    const { store } = this.props;
    return (
      <div className="col">
        <h1>Registation Form</h1>
        <form onSubmit={e=>this._handleSubmit(e)}>
          <TextInput
            field={store.formInput.name}
            handleChange={(n,v, e)=> {this._handleChange(n,v, e);}}
            cols={6}
          />
          <MultiSelectInput
            field={store.formInput.job_duties}
            cols={6}
            options={CONSTS.OPTIONS}
          />
          <div className={'mt-5 col-6 '}>
            <div className='row'>
              <div className='w-100'>
                <ExpansionPanel>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>More</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <TextInput
                      field={store.formInput.email}
                      handleChange={(n,v, e)=> {this._handleChange(n,v, e);}}
                      cols={12}
                    />
                    <Typography>
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </div>
            </div>
          </div>
          <div className={'mt-5 col-6 '}>
            <div className='row'>
              <Button variant="contained" size="medium" type='submit'>
                <SaveIcon />
                &nbsp;&nbsp;Register Now
              </Button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}


export default withRouter(Register);