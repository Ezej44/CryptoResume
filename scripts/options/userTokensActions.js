const changeUserTokenPosition = (index, mov, length) => {
  let moveTo = "";
  if (mov === "up") {
    moveTo = index === 0 ? length -1 : index - 1;
  } else if (mov === "down") {
    moveTo = index === length - 1 ? 0 : index + 1;
  }

  const element = USER_ADDED_TOKENS[index];
  USER_ADDED_TOKENS.splice(index, 1);
  USER_ADDED_TOKENS.splice(moveTo, 0, element);

  buildTokenList();
};


const removeUserToken = (index) => {
  USER_ADDED_TOKENS.splice(index, 1);

  buildTokenList();
};


