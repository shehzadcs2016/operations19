export const getMonthName = (monthIndex) => {
  //An array containing the name of each month.
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  return months[monthIndex]
}
export const getDay = (date) => {
  var date = new Date(date)
  return date.getDay()
}
export const getFullYear = (date) => {
  var date = new Date(date)
  return date.getFullYear()
}
export const fullDate = (date) => {
  var date = new Date(date)
  return `${date.getDay(date)}/${date.getMonth(date)}/${getFullYear(date)}`
}
