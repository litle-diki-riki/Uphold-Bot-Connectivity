const axios = require('axios');
const logEvents = require('./logEvents');

const args = process.argv;
const currencyPairs = args[2].split(',');
const fetchInterval = args[3];
const oscillationThreshold = args[4];
const pairData = {};

if (isNaN(fetchInterval) || fetchInterval < 0) {
    console.error('Error: Second argument must be a postive number.');
    process.exit(1); 
}
if (isNaN(oscillationThreshold) || oscillationThreshold < 0) {
    console.error('Error: Third argument must be a postive number.');
    process.exit(1); 
}

async function fetchCurrencyPair(pair) {
    const url = `https://api.uphold.com/v0/ticker/${pair}`;
    
    try {
        const response = await axios.get(url);

        if (response.status === 404) {
            console.error(`Error: Currency pair ${pair} is not valid.`);
            process.exit(1);
        }

        const currentPrice = response.data.ask;

        if(!pairData[pair]){

            pairData[pair] = {
                firstPairValue: currentPrice,
                previousAlertedValue: currentPrice,
            };
        }

        const oscillationPercentage = ((currentPrice - pairData[pair].previousAlertedValue) * 100) / pairData[pair].previousAlertedValue;

        if(Math.abs(oscillationPercentage) >= oscillationThreshold) {
            pairData[pair].previousAlertedValue = currentPrice;
            logEvents(oscillationPercentage, pair, currentPrice);
        }

    } catch (error) {
        if (error.response && error.response.status === 404) {
            console.error(`Error: Currency pair '${pair}' is not valid.`);
            process.exit(1);
        } else {
            console.error(`Error fetching data for ${pair}:`, error.message);
        }
    }
}

async function fetchAllCurrencyPairs() {
    const promises = currencyPairs.map((pair) => fetchCurrencyPair(pair));
    await Promise.all(promises);
}

setInterval(fetchAllCurrencyPairs, fetchInterval);
fetchAllCurrencyPairs();