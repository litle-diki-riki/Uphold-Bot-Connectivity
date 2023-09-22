# Uphold-Bot-Connectivity

This Node.js script fetches data for multiple currency pairs from the Uphold API and monitors the price oscillation of those pairs. It provides alerts when the price oscillation exceeds a specified threshold and logs them into a txt file.

## Prerequisites

Before running this script, ensure that you have the following prerequisites installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) 

## Usage

1. Clone this repository to your local machine:

    ```terminal
    git clone https://github.com/litle-diki-riki/Uphold-Bot-Connectivity

2. Navigate to the project directory:

    ```terminal
    cd Uphold-Bot-Connectivity

3. Install the required dependencies:

    ```terminal
    npm install

4. Run the script with the following command:

    ```terminal
    node index.js [currencyPairs] [fetchInterval] [oscillationThreshold]

Replace `[currencyPairs]`, `[fetchInterval]`, and `[oscillationThreshold]` with the appropriate arguments:

- `currencyPairs`: A comma-separated list of currency pairs (e.g., BTC-USD,BTC-EUR).
- `fetchInterval`: The interval (in milliseconds) at which data is fetched for the currency pairs.
- `oscillationThreshold`: The threshold percentage for price oscillation that triggers an alert.

## Error Handling

- If the script encounters invalid input arguments, it will log error messages and exit with a status code of 1.

## Acknowledgments

- `axios` - Used for making HTTP requests.
- `logEvents` - A custom module for logging events.

## Requirments Implemented

- Phase 1 ✔

- Phase 2:
    - Enable the bot to handle multiple currency pairs concurrently, allowing it to monitor
    and analyze several pairs simultaneously. ✔

    -  Accept all parameters, such as currency pairs, fetch interval, price oscillation
    percentage, etc., as arguments to enhance flexibility and customization. ✔

- Phase 3:
    -  Store relevant information in the database for each alert, including timestamps, rates,
    and the bot configuration at the time of the alert. This allows for comprehensive
    tracking and analysis of the alerts over time. ✔
