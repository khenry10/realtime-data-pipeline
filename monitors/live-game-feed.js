const { fetcher }         = require('../utilities/fetcher');
const { liveGameFeedApi } = require('../utilities/constants');
const { playParser }     = require('../jobs/live-game-data');

const getGameFeedData = async (gameId) => {
    const url = liveGameFeedApi.replace('$ID', gameId);
    return await fetcher(url);
};

const getLiveDataPlays = (liveFeed) => {
    return liveFeed.liveData.plays;
};

const startJob = async (gameId) => {
    console.log('* start live-game-data job *');

    // @TODO create tmp db to store/track the index of scoring plays processed
    const scoringPlayIndex = 0;
    const gameFeedData = await getGameFeedData(gameId);

    // @TODO add other appropriate status to kill interval (postponed, cancelled, etc...)
    if (gameFeedData.gameData.game.codedGameState === 'Final') {
        return { isOver : true}
    }
    const { allPlays, scoringPlays } = getLiveDataPlays(gameFeedData);
    const scoringPlay              = scoringPlays[scoringPlayIndex];
    const goalFromAllPlays           = allPlays[scoringPlay];

    const records =  playParser(goalFromAllPlays, gameId);
    console.log(`* ${ records ? records.length : 0 } new db records to store *`);
    console.log('records = ', records);
    console.log('* end live-game-data job *');
};

const startLiveGameMonitor = async (gameId) => {
    const oneMinute = 60000;
    const monitor = setInterval(startJob(gameId), oneMinute);

    if (monitor.isOver) {
        clearTimeout(monitor)
    }

}

module.exports = startLiveGameMonitor;
//'2017020653'
