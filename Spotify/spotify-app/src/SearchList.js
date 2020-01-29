import React from "react";
import { Button, Card, Image, Icon } from "semantic-ui-react";

export const SearchList = ({ list }) => {
  return (
    <div>
      <Card.Group centered>
        {list.map(unit => (
          <Card key={unit.id} color='red' size='mini'>
            <Image src={unit.album.images[0].url} size='mini'/>
            <Card.Content>
              <Card.Header>{unit.name}</Card.Header>
              <Card.Meta><span> {unit.artists[0].name} </span></Card.Meta>
              <Card.Description>
           
              </Card.Description>
            </Card.Content>
            {/* <Card.Content extra>
              <a>
                  <Icon name ='song'/>
              </a>
            </Card.Content> */}
          </Card>
        ))}
      </Card.Group>
    </div>
  );
};

