import PlayerCard from "./PlayerCard";
import PlayersData from "../PlayersData";
import "../App.css";
// import playercard to use for all the players i have
// import playerdata to put in each card the info of each player
// import appcss to style my cards

const PlayersList = () => {
  return (
    <div className="players-list-container">
      {PlayersData.map((player, index) => (
        <PlayerCard key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;

//create  arrow function that return the data from playerdata .map for array to get the index for each player
//in the playercard take the [{key and value} index] ...for each player
