import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import {
  Button,
  Jumbotron
} from 'reactstrap';

export default class Contact extends React.Component {
  render() {
    return (
      <Jumbotron><h1>Contact Us</h1>
        <hr />
        <p>fishptr2018@gmail.com</p>
      </Jumbotron>
    );
  }
}