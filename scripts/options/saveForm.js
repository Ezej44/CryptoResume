const saveFrom = () => {
    const selectedCurrency = document.getElementById('currencies').value;

    if(!selectedCurrency && !USER_ADDED_TOKENS ){
        setAlert('error', 'A problem has occurred, please try again later')
    }

    chrome.storage.sync.set({
        currency: selectedCurrency,
        listToken: USER_ADDED_TOKENS
    }, () => {
        setAlert('success', 'Saved correctly!')
    });

}


$btnSaveOptions = document.getElementById('option-btn-save');
$btnSaveOptions.addEventListener('click', (e) => {
    saveFrom(e);
})