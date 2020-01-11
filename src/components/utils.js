export const hasScrolledToTheEndOfList = function () {
    let scrollY = window.scrollY
    let visible = document.documentElement.clientHeight
    let pageHeight = document.documentElement.scrollHeight
    let reachedBottom = visible + scrollY >= pageHeight

    return reachedBottom || pageHeight < visible
}
//
export const thirtyDaysBeforeToday = function () {
    let thirtyDays = (30 * 24 * 60 * 60 * 1000); // in milleseconds
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
//
export const timePassedSinceCreated = function (created_at) {
    const TODAY = new Date()
    return TODAY - new Date(created_at)
}
//
export const hasADayOrMorePassedSinceCreated = function (created_at) {
    return timePassedSinceCreatedInHours(created_at) >= 24
}
//
export const hasAnHourOrMorePassedSinceCreated = function (created_at) {
    return timePassedSinceCreatedInMinutes(created_at) >= 60
}
//
export const timePassedSinceCreatedInDays = function (created_at) {
    return convertTimePassedToDays(timePassedSinceCreated(created_at))
}
//
export const timePassedSinceCreatedInHours = function (created_at) {
    return convertTimePassedToHours(timePassedSinceCreated(created_at))
}
//
export const timePassedSinceCreatedInMinutes = function (created_at) {
    return convertTimePassedToMinutes(timePassedSinceCreated(created_at))
}
//
export const convertTimePassedToMinutes = function (TimePassed) {
    const A_MILLESECOND_IN_MINUTES = 1000 * 60
    return parseInt(TimePassed / A_MILLESECOND_IN_MINUTES)
}
//
export const convertTimePassedToHours = function (TimePassed) {
    const A_MILLESECOND_IN_HOURS = 1000 * 60 * 60
    return parseInt(TimePassed / A_MILLESECOND_IN_HOURS)
}
//
export const convertTimePassedToDays = function (TimePassed) {
    const A_MILLESECOND_IN_DAYS = 1000 * 60 * 60 * 24
    return parseInt(TimePassed / A_MILLESECOND_IN_DAYS)
}
