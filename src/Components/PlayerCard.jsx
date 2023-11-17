import Card from "react-bootstrap/Card";
//btstrap card

const PlayerCard = ({ name, team, nationality, jerseyNumber, age, image }) => {
  return (
    <Card style={{ width: "15rem", margin: "10px" }}>
      <Card.Img
        style={{ width: "200px", height: "200px", objectfit: "cove" }}
        // inline style for the img
        className="img"
        variant="top"
        src={image}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Team: {team}
          <br />
          Nationality: {nationality}
          <br />
          Jersey Number: {jerseyNumber}
          <br />
          Age: {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PlayerCard;
//create playercard component i can use for all palyers
//create arrow function that take object parameter that return the card with this parameter
