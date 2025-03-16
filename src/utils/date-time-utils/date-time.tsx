import React from "react"

export type DateTimeProps = {
  text: 'year' | 'month' | 'day' | 'date'
}

const daysOfWeek = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];

const monthsOfYear = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
];

export const DateTime: React.FC<DateTimeProps> = (props) => {
  const date = new Date()

  const dateTimeMethod: Record<string, () => string | number> = {
    year: () => date.getFullYear(),
    month: () => monthsOfYear[date.getMonth()],
    day: () => daysOfWeek[date.getDay()],
    date: () => date.getDate()
  }

  return <>{dateTimeMethod[props.text]()}</>
}