let USER_ADDED_TOKENS = [];

const builListItem = (token, index) => {
  const $tempElement = document.createElement("div");
  $tempElement.innerHTML = `<li class="options__user-token">
    <div class="options__user-token-data">
        <span class="options_user-token-symbol">${token.symbol} </span>
        <span class="options_user-token-name">- ${token.name} </span>
    </div>
    <div class="options__user-token-actions">
      <i class="fas fa-chevron-up" id="option-token-up-${index}"></i>
      <i class="fas fa-chevron-down" id="option-token-down-${index}" ></i>
      <i class="fas fa-trash-alt" id="option-token-delete-${index}"></i>
    </div>
  </li>`;

  return $tempElement.firstChild;
};

const registerActions = (index) => {
  const buttonTokenUp = document.getElementById(`option-token-up-${index}`);
  const buttonTokenDown = document.getElementById(`option-token-down-${index}`);
  const buttonTokenDelete = document.getElementById(`option-token-delete-${index}`);

  buttonTokenUp.addEventListener("click", () => {
    changeUserTokenPosition(index, "up", USER_ADDED_TOKENS.length);
  });

  buttonTokenDown.addEventListener("click", () => {
    changeUserTokenPosition(index, "down", USER_ADDED_TOKENS.length);
  });

  buttonTokenDelete.addEventListener("click", () => {
    removeUserToken(index);
  });
};

const buildTokenList = () => {
  const $mainElement = document.getElementById("userTokenList");
  // blank element
  $mainElement.innerHTML = "";

  USER_ADDED_TOKENS.forEach((token, index) => {
    const $li = builListItem(token, index);

    $mainElement.appendChild($li);
    registerActions(index);
  });
};

const LoadUsersTokens = async () => {
  USER_ADDED_TOKENS = await getAsyncStorageProp("listToken");
  buildTokenList();
};

LoadUsersTokens();
