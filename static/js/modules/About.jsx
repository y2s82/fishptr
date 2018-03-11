import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

import { Card, CardTitle, CardText, Row, Col, CardImg } from 'reactstrap';

export default class Home extends React.Component {
  render() {
    return (
      <div>
      <Row>
        <Col sm="4">
          <Card body>
            <img width="100%" src="https://www.spotmydive.com/media/cache/my_thumb_article_img/uploads/images/1468837023_stargazer-fish.png" alt="Card image cap" />
            <CardTitle>Jerry Jeyachandra</CardTitle>
            <CardText>AI architect.</CardText>
          </Card>
        </Col>
        <Col sm="4">
          <Card body>
            <img width="100%" src="http://www.dreams.metroeve.com/wp-content/uploads/2017/03/dreams.metroeve_blowfish-dreams-meaning.jpg" alt="Card image cap" />
            <CardTitle>Tony Sim</CardTitle>
            <CardText>Project Manager and problem creator.</CardText>
          </Card>
        </Col>
        <Col sm="4">
          <Card body>
            <img width="100%" src="http://www.petsfoto.com/wp-content/uploads/2010/04/Moorish-Idol1.jpg" alt="Card image cap" />
            <CardTitle>Inna Zhogova</CardTitle>
            <CardText>Fellow behind the server.</CardText>
          </Card>
        </Col>
      </Row>
      <br/>
       <Row>
       <Col sm="4">
         <Card body>
           <img width="100%" src="https://thumbs-prod.si-cdn.com/c86on9yeBmn5_G7b4ng_ZQWjiII=/800x600/filters:no_upscale()/https://public-media.smithsonianmag.com/filer/d6/93/d6939718-4e41-44a8-a8f3-d13648d2bcd0/c3npbx.jpg" alt="Card image cap" />
           <CardTitle>Robert Dittrich</CardTitle>
           <CardText>Assitant backend.</CardText>
         </Card>
       </Col>
       <Col sm="4">
         <Card body>
           <img width="100%" src="https://www.thesun.co.uk/wp-content/uploads/2017/06/nintchdbpict0002407806071.jpg?strip=all&w=960" alt="Card image cap" />
           <CardTitle>Oleksii Polovyi</CardTitle>
           <CardText>Frontend sharky.</CardText>
         </Card>
       </Col>
     </Row>
     </div>
    );
  }
}