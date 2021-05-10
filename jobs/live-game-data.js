
const LiveGamePlayerRecord = require('../models/LiveGamePlayerRecord');

const getLiveDataPlays = (liveFeed) => {
    return liveFeed.liveData.plays;
};

const getPlayerDataFromLiveFeed = (liveFeed, playerId) => {
    return liveFeed.gameData.players[`ID${playerId}`]
};

const createPlayerRecord = (playerMetaData) => {
    const { id, fullName, primaryNumber, currentAge, currentTeam, primaryPosition } = playerMetaData;
    return {
        playerId       : id,
        playerName     : fullName,
        teamId         : currentTeam.id,
        teamName       : currentTeam.name,
        playerAge      : currentAge,
        playerNumber   : primaryNumber,
        playerPosition : primaryPosition.name,
    }
};

const createDbRecord = (gameFeedData, playerId, gameId) => {
    const { id, fullName, primaryNumber, currentAge, currentTeam, primaryPosition } = getPlayerDataFromLiveFeed(gameFeedData, playerId);
    return new LiveGamePlayerRecord(gameId, id, fullName, currentTeam.id, currentTeam.name, currentAge, primaryNumber, primaryPosition.name)
};

const playParser = (gameFeedData, goalFromAllPlays, gameId) => {
    console.log('** start playParser job **');

    const dbRecords =  goalFromAllPlays.players.flatMap((plays) => {
        const { playerType, player } = plays;
        const record = createDbRecord(gameFeedData, player.id, gameId);

        if (playerType === 'Scorer') {
            record.addGoal();
            return record.create();
        } else if (playerType === 'Assist') {
            record.addAssist();
            return record.create();
        }
        return [];
    });
    console.log('** end playParser job **');
    return dbRecords;
};

module.exports = {
    playParser
};
