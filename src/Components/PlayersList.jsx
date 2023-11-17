
import Player from "../Player";
import playersData from "../players";
import '../App.css';

const PlayersList = () => {
  return (
    <div className="players-list-container">
      {playersData.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
