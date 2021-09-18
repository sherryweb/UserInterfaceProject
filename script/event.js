// JavaScript source code for event page
// Developed by: Jia Zhu, Tingting Song, Xiaotong Zhang
// Script Date: September 12, 2021

"use strict";

/* set the date displayed in the calendar */
let thisDay = new Date();

/* write the calendar to the element with the id 'calendar' */
document.getElementById('calendarEvent').innerHTML = createCalendar(thisDay);


/**
 * Creates the calendar table for the month specified in the
calDate parameter. The current date is highlighted in 
the table.
 * @param {date} calDate 
 */
function createCalendar(calDate) {
   let calendarHTML = "<table id='calendar_table'>";
   calendarHTML += calendarCaption(calDate);
   calendarHTML += calendarWeekDayRow();
   calendarHTML += calendarDays(calDate);
   calendarHTML += '</table>';

   return calendarHTML;
} // end function createCalendar


/**
 * Writes the caption of the calendar table
 * @param {date} calDate 
 */
function calendarCaption(calDate) {
   // monthName array contains the list of month names
   let monthName = [
      'January', 'February', 'March',
      'April', 'May', 'June',
      'July', 'August', 'September',
      'October', 'November', 'December'
   ];

   // determine the current month
   let thisMonth = calDate.getMonth();

   // determine the current year
   let thisYear = calDate.getFullYear();

   // write the caption
   let calCaption = monthName[thisMonth] + ' ' + thisYear;
   return '<caption>' + calCaption + '</caption>';
} // end calendarCaption


/**
 * Writes the weekday title rows in the calendar table
 */
function calendarWeekDayRow() {
   // array of weekday abbriviations
   let dayName = [
      'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'
   ];

   let rowHTML = '<tr>';

   // loop through the dayName array
   for (let dayIndex = 0; dayIndex < dayName.length; dayIndex++) {
      rowHTML += "<th class='calendar_weekdays'>" +
         dayName[dayIndex] + '</th>';
   } // end for loop
   rowHTML += '</tr>';
   return rowHTML;
} // end function calendarWeekDayRow

/**
 * Returns the number of days in the month from calDate
 * @param {date} calDate 
 */
function daysInMonth(calDate) {
   // array of days in each month
   let dayCount = [
      31, 28, 31,
      30, 31, 30,
      31, 31, 30,
      31, 30, 31
   ];

   // extract the four digit year and month value
   let thisYear = calDate.getFullYear();
   let thisMonth = calDate.getMonth();

   // check if the year is a leap year
   if (thisYear % 4 === 0) {
      if ((thisYear % 100 != 0) || (thisYear % 400 === 0)) {
         dayCount[1] = 29;
      } // inner if
   } // outer if

   // return the number of days for the current month
   return dayCount[thisMonth];
} // end function daysInMonth

/**
 * Writes the daily rows in the calendar table, highlighting calDate
 * @param {date} calDate 
 */
function calendarDays(calDate) {
   // determine the starting day of the month 
   let today = new Date(calDate.getFullYear(), calDate.getMonth(), 1);
   let weekDay = today.getDay();

   // write blank cells preceeding the starting day
   let htmlCode = '<tr>';
   for (let countBlank = 0; countBlank < weekDay; countBlank++) {
      htmlCode += '<td>&nbsp;</td>';
   } // end for

   // write cells for each day of the month
   let totalDays = daysInMonth(calDate);

   let highlightDay = calDate.getDate();

   for (let days = 1; days <= totalDays; days++) {
      today.setDate(days);
      weekDay = today.getDay();

      if (weekDay === 0) {
         htmlCode += '<tr>';
      }
      if (days === highlightDay) {
         htmlCode += "<td class='calendar_dates' id='calendar_today'>" + days +
            dayEvent[days] + '</td>';
      } // end if
      else {
         htmlCode += "<td class='calendar_dates'>" + days +
            dayEvent[days] + '</td>';
      }
      if (weekDay === 6) {
         htmlCode += '</tr>';
      } // end if      
   } // for loop
   return htmlCode;
} // end function calendarDays