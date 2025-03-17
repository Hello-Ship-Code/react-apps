import React, { useEffect, useState } from "react"

// create hook instead of Functional component
export type DateTimeProps = {
  text: 'year' | 'month' | 'day' | 'date' | 'time'
}

const daysOfWeek = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];

const monthsOfYear = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
];

export const DateTime: React.FC<DateTimeProps> = (props) => {
  const date = new Date()

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const dateTimeMethod: Record<string, () => string | number> = {
    year: () => date.getFullYear(),
    month: () => monthsOfYear[date.getMonth()],
    day: () => daysOfWeek[date.getDay()],
    date: () => date.getDate(),
    time: () => currentTime?.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    })
  }

  return <>{dateTimeMethod[props.text]()}</>
}