const pool = require('./config');

// playerId: 8478398,
// playerName: 'Kyle Connor',
// teamId: 52,
// teamName: 'Winnipeg Jets',
// playerAge: 24,
// playerNumber: '81',
// playerPosition: 'Left Wing',
// Assists: 1

const createTable = async () => {
    const gameId = 'game_id VARCHAR(30)';
    const playerId = 'player_id INTEGER';
    const playerName = 'player_name VARCHAR(30)';
    const teamId = 'team_id INTEGER';
    const teamName = 'team_name VARCHAR(30)';
    const playerAge = 'player_age VARCHAR(30)';
    const playerNumber = 'play_number VARCHAR(30)';
    const playerPosition = 'player_position VARCHAR(30)';
    const goals = 'goals INTEGER';
    const assists = 'assists INTEGER';

    let columnString = '';
    const columns = [gameId, playerId, playerName, teamId, teamName, playerAge, playerNumber, playerPosition, goals, assists];

    columns.forEach((c,i) => columnString += i !== columns.length-1 ? `${c}, ` : c);

    const text = `CREATE TABLE live_game (ID SERIAL PRIMARY KEY, ${columnString} )`;

    try {
        const res = await pool.query(text);
        return res;
    } catch(err) {
        console.log('err', err)
    }
};

createTable();
