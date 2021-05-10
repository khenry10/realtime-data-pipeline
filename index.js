const scheduleMonitor     = require('./monitors/daily-schedule');

// @TODO turn this into a lambda function and use cloudwatch to schedule
const milliSecondsInADay = 86400000;

// check game schedule in the morning everyday (is this endpoint ever updated day of?)
setInterval(scheduleMonitor, milliSecondsInADay);
