const domain = 'https://statsapi.web.nhl.com';
const api    = `${domain}/api/v1`;
const liveGameFeedApi = `${api}/game/$ID/feed/live`;
const gameScheduleApi = `${api}/schedule?date=`;

module.exports = {
    liveGameFeedApi,
    gameScheduleApi
};
