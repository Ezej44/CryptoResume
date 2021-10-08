
const loadCurrency = async () => {
  const userCurrency = await getAsyncStorageProp("currency");
  const $currencyLabel = document.getElementById('popup-user-currency');
  $currencyLabel.innerHTML = `Currency: ${userCurrency.toUpperCase()}`
};

loadCurrency();
