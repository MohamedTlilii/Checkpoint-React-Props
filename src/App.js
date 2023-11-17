import PlayersList from "./Components/PlayersList";
// import playerlist fucntion 
function App() {
  return (
    <div >
      <h1>NBA Players</h1>
      <PlayersList />
    </div>
  );
}

export default App;
// and put it into the div 
//so i have [{object in array}] data 
//and a card that take {object}
//and create a function that return the data  [for aech player .map]
//and each player have key and value {name,team, nationality, jerseyNumber, age, image}