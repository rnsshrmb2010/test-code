import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, TextField } from '@material-ui/core';
import { inject, observer } from 'mobx-react';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
  }
});


@inject('store')
@observer
class TextInput extends React.Component {
  handleChange = name => event => {
  };

  render() {
    const { field, cols, classes } = this.props;
    let cont = `col-${cols} ${field.errors.length > 0 && 'has-error'}`;
    return (
      <div className={cont}>
        <div className='row'>
          <TextField
            label={field.label}
            className={classes.textField}
            value={field.value}
            onChange={e=> this.props.store._handleChange(field.name, e.target.value, e)}
            margin="normal"
          />
          <div className="col-md-12">
            <div className="row pl-2">
              {field.errors.length > 0 && field.errors.map(error => (
                <div key={error} className="text-danger">
                  {error}&nbsp;
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TextInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextInput);