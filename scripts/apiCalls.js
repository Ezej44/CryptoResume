const getTokenInfo = async (tokenId, errorCallback) => {
    const url = `https://api.coingecko.com/api/v3/coins/${tokenId}`;

    try {
        const response = await fetch(url);
        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.log(`cannot get info for token ${token}`, error);
        if(errorCallback){
          errorCallback();
        }
        return {};
    }
};

const getTokens = async (errorCallback) => {
    const url = 'https://api.coingecko.com/api/v3/coins/list';

    try {
        const response = await fetch(url);
        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.log('cannot get the token list ', error);
        if(errorCallback){
          errorCallback();
        }
        errorCallback();
        return [];
    }
};

const getCurrencies = async (errorCallback) => {
    const url = 'https://api.coingecko.com/api/v3/simple/supported_vs_currencies';

    try {
        const response = await fetch(url);
        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.log('cannot get the currencies ', error);
        if(errorCallback){
          errorCallback();
        }
        errorCallback();
        return [];
    }
};