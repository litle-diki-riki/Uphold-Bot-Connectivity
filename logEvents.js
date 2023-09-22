const { format } = require('date-fns');
const { v4: uuid } = require('uuid');
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const logEvents = async (oscillation, thresold, pair, value) => {
    const dateTime = `${format(new Date(), 'dd/MM/yyyy HH:mm:ss')}`;

    const logItem = `ID: ${uuid()}\tDateTime: ${dateTime}\tOscillation Percentage: ${oscillation}%\tOscillation Threshold: ${thresold}%\tCurrency Pair: ${pair}\tCurrent Value: ${value}\n`;
    console.log(logItem);

    try{
        if (!fs.existsSync(path.join(__dirname, 'logs'))){
            await fsPromises.mkdir(path.join(__dirname, 'logs'));
        }
        await fsPromises.appendFile(path.join(__dirname, 'logs', 'logs.txt'), logItem)
    }catch (err){
        console.log(err);
    }
}

module.exports = logEvents;