const pool = require('./config');

const addRecord = async (table, columns, values, valuesArr) => {
    const text = `INSERT INTO ${table} ${columns} VALUES ${values}`;
    try {
        const res = await pool.query(text, valuesArr);
        return res;
    } catch(err) {
        console.log('err', err)
    }
};

module.exports = addRecord;
