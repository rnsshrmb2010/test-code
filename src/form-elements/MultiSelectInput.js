import React from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import {
  ListItemText, FormControl, Input, InputLabel, MenuItem, Select, Checkbox
} from '@material-ui/core';


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
    const { field, cols, options } = this.props;
    let cont = `mt-5 col-${cols} ${field.errors.length > 0 && 'has-error'}`;
    return (
      <div className={cont}>
        <div className={'row'}>
          <FormControl className="form-control">
            <InputLabel htmlFor="select-multiple-checkbox">{field.label}</InputLabel>
            <Select
              multiple
              value={field.value.map(e=>e)}
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
          <div className="col-md-12 mt-2">
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
    );
  }
}

export default withRouter(MultiSelectInput);