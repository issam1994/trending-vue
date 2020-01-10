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
export const timePassedSincePushed = function (pushed_at) {
    const TODAY = new Date()
    return TODAY - new Date(pushed_at)
}
//
export const hasADayOrMorePassedSincePushed = function (pushed_at) {
    return timePassedSincePushedInHours(pushed_at) >= 24
}
//
export const hasAnHourOrMorePassedSincePushed = function (pushed_at) {
    return timePassedSincePushedInMinutes(pushed_at) >= 60
}
//
export const timePassedSincePushedInDays = function (pushed_at) {
    return convertTimePassedToDays(timePassedSincePushed(pushed_at))
}
//
export const timePassedSincePushedInHours = function (pushed_at) {
    return convertTimePassedToHours(timePassedSincePushed(pushed_at))
}
//
export const timePassedSincePushedInMinutes = function (pushed_at) {
    return convertTimePassedToMinutes(timePassedSincePushed(pushed_at))
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
