const $listInput = document.getElementById("inputList");

$listInput.addEventListener("change", ({ target }) => {
    const inputValue = target.value;
    // get the data-value from the option element
    const $inputNumber = document.querySelector("option[value='" + inputValue + "']").dataset.value;

    // retrive all data of the selected TOKEN from the TOKEN LIST
    const newUserToken = TOKENS[$inputNumber];

    $listInput.value = "";

    // add token to the user list and re-paint
    const alreadyInList = USER_ADDED_TOKENS.find((token) => token.id === newUserToken.id);
    if (alreadyInList) {
        setAlert("warning", "this token is already in the list")
        return;
    };

    USER_ADDED_TOKENS.push(newUserToken);
    buildTokenList();
});