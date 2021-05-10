const gameScheduleApi = require('../utilities/constants');
const startLiveGameMonitor = require('./live-game-feed');

const scheduleMonitor = async () => {
    // call gameScheduleApi with todays date
    // loop through dates.games arr setInterval(startLiveGameMonitor, milliseconds to game time)
};

module.exports = scheduleMonitor;
