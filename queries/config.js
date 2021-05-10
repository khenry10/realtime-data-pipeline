const Pool = require('pg').Pool
module.exports = new Pool({
    user: 'keith',
    host: 'localhost',
    database: 'realtime_sports_db',
    password: 'keithprifte',
    port: 5432,
})
