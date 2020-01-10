export const hasScrolledToTheEndOfList = function () {
    let scrollY = window.scrollY
    let visible = document.documentElement.clientHeight
    let pageHeight = document.documentElement.scrollHeight
    let reachedBottom = visible + scrollY >= pageHeight

    return reachedBottom || pageHeight < visible
}
//
export const thirtyDaysBeforeToday = function () {
    let thirtyDays = (30* 24 * 60 * 60 * 1000);
    let todayMinus30Days = new Date(Date.now() - thirtyDays);
    let year = todayMinus30Days.getFullYear()
    let month = todayMinus30Days.getMonth() + 1
    let day = todayMinus30Days.getDate()
    // the api recognizes months as from 1 to 12 while the date obj in js treats months as from 0 to 11.
    let dateString = `${year}-${
        month < 9 ? '0' + month : month
        }-${day < 10 ? '0' + day : day}`
    console.log('the target date.. ', dateString)
    return dateString
}
