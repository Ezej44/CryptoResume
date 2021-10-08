const loadTokens = async () => {
    const usersAddedTokens = await getAsyncStorageProp("listToken");
    const userCurrency = await getAsyncStorageProp("currency");

    for (let index = 0; index < usersAddedTokens.length; index++) {
        const tokenId = usersAddedTokens[index].id;
        const tokenInfo = await getTokenInfo(tokenId);
        buidlListItem(tokenInfo, userCurrency)
    }

};

loadTokens();