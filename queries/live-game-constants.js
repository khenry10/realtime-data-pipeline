const gameId = 'game_id';
const playerId = 'player_id';
const playerName = 'player_name';
const teamId = 'team_id';
const teamName = 'team_name';
const playerAge = 'player_age';
const playerNumber = 'play_number';
const playerPosition = 'player_position';
const goals = 'goals';
const assists = 'assists';
const columns = [gameId, playerId, playerName, teamId, teamName, playerAge, playerNumber, playerPosition, goals, assists];

const liveGamePlayerStatsColumnObj = {gameId, playerId, playerName, teamId, teamName, playerAge, playerNumber, playerPosition, goals, assists}

const gameIdColumn = 'game_id VARCHAR(30)';
const playerIdColumn = 'player_id INTEGER';
const playerNameColumn = 'player_name VARCHAR(30)';
const teamIdColumn = 'team_id INTEGER';
const teamNameColumn = 'team_name VARCHAR(30)';
const playerAgeColumn = 'player_age VARCHAR(30)';
const playerNumberColumn = 'play_number VARCHAR(30)';
const playerPositionColumn = 'player_position VARCHAR(30)';
const goalsColumn = 'goals INTEGER';
const assistsColumn = 'assists INTEGER';
const columnsMetaData = [gameIdColumn, playerIdColumn, playerNameColumn, teamIdColumn, teamNameColumn, playerAgeColumn,
    playerNumberColumn, playerPositionColumn, goalsColumn, assistsColumn];

module.exports = {
    columnsMetaData,
    columns,
    liveGamePlayerStatsColumnObj
}
