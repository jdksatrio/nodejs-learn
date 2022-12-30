const team = {
  _players: [
    {firstName: 'Pete', lastName: 'Wheeler', age: 54},
    {firstName: 'Jordan', lastName: 'Henderson', age: 38},
    {firstName: 'John', lastName: 'Doe', age: 29}
  ],
  _games: [
    {opponent: 'Team A', teamPoints: 3, opponentPoints: 2},
    {opponent: 'Team B', teamPoints: 2, opponentPoints: 0},
    {opponent: 'Team C', teamPoints: 1, opponentPoints: 2},
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName,newLastName,newAge) {
    let player = { firstName: newFirstName, lastName: newLastName, age: newAge };
    this._players.push(player);
  },
  addGame(newOpponent,newTeamPoints,newOpponentPoints) {
    let game = {opponent: newOpponent, teamPoints: newTeamPoints, opponentPoints: newOpponentPoints};
    this._games.push(game);
  }
};

team.addPlayer('Bugs','Bunny',76);
team.addGame('Titans',100,98)

console.log(team.games);
