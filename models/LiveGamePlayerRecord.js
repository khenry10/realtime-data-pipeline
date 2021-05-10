const liveGamePlayerStatsColumnObj = require('../queries/live-game-constants');
const addRecord = require('../queries/add-record');

class LiveGamePlayerRecords {
    constructor(
        gameId,
        playerId,
        playerName,
        teamId,
        teamName,
        playerAge,
        playerNumber,
        playerPosition,
        goals,
        assists
    ) {
        this.gameId = gameId;
        this.playerId = playerId;
        this.playerName = playerName;
        this.teamId = teamId;
        this.teamName = teamName;
        this.playerAge = playerAge;
        this.playerNumber = playerNumber;
        this.playerPosition = playerPosition;
        this.goals = goals || 0;
        this.assists = assists || 0;
    }

    toJson() {
        const keys = Object.keys(this);
        const values = Object.values(this);

        const obj = {};
        keys.forEach((key, index) => {
            this[key] = values[index];
            obj[key] = values[index];

        });
        return obj;
    }

    createSqlStatement(arr, prefix) {
        let sql = '(';
        arr.forEach((el, i) => {
            let str = '';
            if (prefix && prefix.length) {

                if (i === arr.length-1) {
                    sql += `${prefix}${i+1}) `
                } else {
                    sql += `${prefix}${i+1}, `
                }

            } else {
                str += `${el}, `;
                if (i === arr.length-1) {
                    sql += `${el})`;
                } else {
                    sql += `${el}, `;
                }
            }

        });
        return sql;
    }

    addGoal() {
        this.goals++;
        return this;
    }

    addAssist() {
        this.assists++;
        return this;
    }

    async create() {
        const json = this.toJson();

        //@TODO map keys to liveGamePlayerStatsColumnObj
        const columns = this.createSqlStatement(Object.keys(json));
        const valuesArr = Object.values(json);
        const values = this.createSqlStatement(valuesArr, '$');
        await addRecord('live_game', columns, values, valuesArr);
    }
}

module.exports = LiveGamePlayerRecords
