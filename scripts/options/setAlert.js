const ALERT_COLORS = {
    error: 'red',
    warning: 'orange',
    success: 'green',
    info: 'yelow',

}
const setAlert = (type, msj) => {
    const alertColor = ALERT_COLORS[type] || ALERT_COLORS.info;
    const animationDuration = 6; // seconds

    const $alertElement = document.getElementById('alert-msj');
    const $alertMSJElement = document.getElementById('alert-msj-text');

    $alertElement.style.display = 'block'
    $alertElement.style.animation = `fadeOut ${animationDuration}s ease forwards`;
    $alertElement.style.color = alertColor
    $alertMSJElement.innerHTML = msj

    setTimeout(() => {
        $alertElement.style.animation = 'none';
        $alertElement.style.display = 'none'
    }, animationDuration * 1000)
}