import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';


import { Component } from "react";
import axios from "axios";

class JsonToTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    componentDidMount() {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                this.setState({ data: res.data });
            })
            .catch(err => console.log(err));
    }
    render() {
        return (
            <div>
            <h1 align="center">Json Table</h1>
            <TableContainer component={Paper} sx={{width:"auto",margin:"0 10%"}}>
              <Table sx={{width:"auto"}} aria-label="sticky table" >
                <TableHead>
                  <TableRow>
                    <TableCell   sx={{backgroundColor:"yellowgreen"}} align="center" colSpan={0}>id</TableCell>
                    <TableCell   sx={{backgroundColor:"yellowgreen"}} align="center" colSpan={1}>title</TableCell>
                    <TableCell   sx={{backgroundColor:"yellowgreen"}} align="center" colSpan={2}>body</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.data.map(data => (
                    <TableRow key={data.id} hover role="checkbox"  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell align="right">{data.id}</TableCell>
                      <TableCell align="right">{data.title}</TableCell>
                      <TableCell align="right">{data.body}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              </TableContainer>
          </div>
        );
    }
}

export default JsonToTable;