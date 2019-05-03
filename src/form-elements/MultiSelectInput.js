import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import {
  ListItemText, FormControl, Input, InputLabel, MenuItem, Select, Checkbox
} from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: '100%',
    maxWidth: '100%',
  }
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

@inject('store')
@observer
class MultiSelectInput extends React.Component {
  render() {
    const { field, cols, options, classes } = this.props;
    let cont = `mt-5 col-${cols} ${field.errors.length > 0 && 'has-error'}`;
    return (
      <div className={cont + classes.root}>
        <div className={'row'}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="select-multiple-checkbox">{field.label}</InputLabel>
            <Select
              multiple
              value={field.value}
              onChange={e=> this.props.store._handleChange(field.name, e.target.value, e)}
              input={<Input id="select-multiple-checkbox" />}
              renderValue={selected => selected.join(', ')}
              MenuProps={MenuProps}
            >
              {options.map(e => (
                <MenuItem key={e.name} value={e.name}>
                  <Checkbox checked={field.value.indexOf(e.name) > -1} />
                  <ListItemText primary={e.name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
    );
  }
}

MultiSelectInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MultiSelectInput);