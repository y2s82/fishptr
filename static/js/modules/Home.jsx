import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import {
  Button,
  Jumbotron
} from 'reactstrap';

export default class Home extends React.Component {
  render() {
    return (
      <Jumbotron>
        <h1>SeeFish</h1>
        <hr />
        <form action = "/upload" method = "POST" 
        encType = "multipart/form-data">
        <input type = "file" name = "file" />
        <input type = "submit"/>
     </form>
      </Jumbotron>
    );
  }
}