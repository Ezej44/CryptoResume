let TOKENS = [];

const loadCryptos = async () => {
  TOKENS = await getTokens(() => {
    setAlert('error', 'error getting the token list, please re-try in seconds')
  });

  const mainElement = document.getElementById("cryptoList");

  TOKENS.forEach((token, index) => {
    const $option = document.createElement("option");
    $option.value = token.symbol + " - " + token.name;
    $option.setAttribute("data-value", index);
    mainElement.appendChild($option);
  });
};

loadCryptos();
