const buildSelectOption = (currency) => {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = `<option value="${currency}">${currency}</option>`;

  return tempElement.firstChild;
};

const loadCurrencies = async () => {
  const currencies = await getCurrencies(() => {
    setAlert('error', 'error getting the currency list, please re-try in seconds')
  });
  const userCurrency = await getAsyncStorageProp("currency");

  const $selectElement = document.getElementById("currencies");

  currencies.forEach((currency) => {
    const $option = buildSelectOption(currency);

    $selectElement.appendChild($option);
  });

  $selectElement.value = userCurrency;
};

loadCurrencies();
