import React from 'react';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';

import {
  withStyles,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  Button
 } from '@material-ui/core';
 import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
 import SaveIcon from '@material-ui/icons/Save';
import { RegisterInput } from './../inputs'
import { CONSTS } from './../constants';
import { TextInput, MultiSelectInput } from './../form-elements';

const styles = theme => ({
  root: {
    width: '100%'
  },
  button: {
    margin: theme.spacing.unit,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

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
      console.log('Form Data is Validated');
    } else {
      console.log('Invalid');
    }
    event.preventDefault();
  }

  render() {
    const { store, classes } = this.props;
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
          <div className={'mt-5 col-6 '+classes.root}>
            <div className='row'>
              <div className='w-100'>
                <ExpansionPanel>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>More</Typography>
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
          <div className={'mt-5 col-6 '+classes.root}>
            <div className='row'>
              <Button variant="contained" size="medium" type='submit' className={classes.button}>
                <SaveIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
                &nbsp;&nbsp;Register Now
              </Button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

Register.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(Register));