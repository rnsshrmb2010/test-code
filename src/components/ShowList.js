import React from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core';


@inject('store')
@observer
class ShowList extends React.Component {
  render() {
    const { store } = this.props;
    if(!store.itemList.length) {
      return null;
    }
    return (
      <div className="col">
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell component="th">Name</TableCell>
                <TableCell component="th">Email</TableCell>
                <TableCell component="th">Job Duties</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {store.itemList.map((row, i) => (
                <TableRow key={i}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.job_duties.join(', ')}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    )
  }
}

export default withRouter(ShowList);