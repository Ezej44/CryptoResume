const builListItem = (tokenInfo, currency) => {
    const tokenPrice = tokenInfo.market_data.current_price[currency] ||
        tokenInfo.market_data.current_price[usd] + " USD"
    const priceChangePorcentaje = tokenInfo.market_data &&
        tokenInfo.market_data.price_change_percentage_24h &&
        tokenInfo.market_data.price_change_percentage_24h.toFixed(2);

    const priceChangePositive = priceChangePorcentaje && priceChangePorcentaje > 0;
    const priceChangeClass = priceChangePositive ?
        "list-token__prince-change list-token__prince-change--positive" :
        "list-token__prince-change list-token__prince-change--negative";

    const urlRedirect = `https://www.coingecko.com/en/coins/${tokenInfo.id}`;

    const tempElement = document.createElement("div");
    tempElement.innerHTML = `<li class="list-token__li">
    <div class="list-token__content">
      <div class="list-token__img-wrapper">
      <a target="_blank" href=${urlRedirect}><img class="list-token__img" src="${tokenInfo.image.thumb}"></img></a>
      </div>
      <span class="list-token__title">${tokenInfo.symbol}</span>
    </div>
    <div class="list-token__values">
    <span class="list-token__price">$ ${tokenPrice}</span>
    <span class="${priceChangeClass}">${priceChangePorcentaje}%</span>
    </div>
    </li>`;

    return tempElement.firstChild;
};

const buidlListItem = (token, currency) => {
    const mainElement = document.getElementById("list-tokens");
    const $tokenLi = builListItem(token, currency);
    mainElement.appendChild($tokenLi);
};