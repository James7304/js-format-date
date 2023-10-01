/*
 * File: format.js
 * Project: js-format-date
 * File Created: Sunday, 1st October 2023 13:45:32 pm
 * Author: James McCorkindale (james@harlyy.com)
 * -----
 * Last Modified: Sunday, 1st October 2023 13:45:32 pm
 * Modified By: James McCorkindale (<jamesmccorkindale0@gmail.com>)
 * -----
 * Copyright 2023 James McCorkindale
 */

function getSuffix(number) {
    switch (number.toString().substring(number.toString().length - 1)) {
      case '1':
        return 'st';
      case '2':
        return 'nd';
      case '3':
        return 'rd';
      default:
        return 'th';
    }
  }

function getWeekOfMonth(date) {
  const month = date.getMonth();
  const year = date.getFullYear();
  const firstDayOfMonth = new Date(year, month, 1);

  const calcDate = new Date(date.getTime());

  let week = 1;

  while (calcDate >= firstDayOfMonth) {
    calcDate.setDate(calcDate.getDate() - 7);
    week++;
  }

  week--;

  return week;
};

const format = (date, format) => {
  if (!format) {
    return date.getTime();
  }

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  const days = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
  ];

  const options = {
    day: () => days[date.getDay()],
    xd: () => date.getDate(),
    dd: () => date.getDate().toString().length === 1 ? '0' + date.getDate() : date.getDate(),
    mmm: () => months[date.getMonth()].substring(0, 3),
    MMM: () => months[date.getMonth()],
    MM: () => (date.getMonth() + 1).toString().length === 1 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1),
    yy: () => date.getFullYear().toString().substring(2, 4),
    yyyy: () => date.getFullYear(),
    hh: () => (date.getHours()).toString().length === 1 ? '0' + date.getHours() : date.getHours(),
    mm: () => date.getMinutes().toString().length === 1 ? '0' + date.getMinutes() : date.getMinutes(),
    xs: () => date.getSeconds(),
    ss: () => date.getSeconds().toString().length === 1 ? '0' + date.getSeconds() : date.getSeconds(),
    SSS: () => date.getMilliseconds(),
    sx: () => getSuffix(date.getDate()),
    wm: () => getWeekOfMonth(date),
    wmsx: () => getWeekOfMonth(date) + getSuffix(getWeekOfMonth(date)),
  };

  return format.replace(/{(.*?)}/g, (_, match) => {
    return options[match] ? options[match]() : '';
  });
};
  
export default format;
