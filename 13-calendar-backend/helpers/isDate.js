const moment = require('moment');

const isDate = (value) => {
    if(!value) return false;
    const dateTest = moment(value);
    return dateTest.isValid();
}

module.exports = {
    isDate
}