import React from "react";
import CircularProgressbar from 'react-circular-progressbar';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/react-circular-progressbar/dist/styles.css';
import Data from '../data';
import { Container, Row, Col } from 'reactstrap';

export default class Results extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <h1>{Data[0][0].fishname}</h1>
                    <Row>
                        <Col xs="3">
                        </Col>
                        <Col xs="6">
                            <CircularProgressbar percentage={Math.round(Data[0][0].probability * 100)} initialAnimation={true} strokeWidth={4} />
                        </Col>
                    </Row>
                    <p> Processes in {Data[0][0].time} </p>
                </Container>
            </div>
        );
    }
}