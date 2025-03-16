import React from "react"

export type DateTimeProps = {
  text: 'year' | 'month' | 'day'
}

export const DateTime: React.FC<DateTimeProps> = (props) => {
  const date = new Date()

  const dateTimeMethod: Record<string, () => number> = {
    year: () => date.getFullYear(),
    month: () => date.getMonth() + 1,
    day: () => date.getDay()
  }

  return <>{dateTimeMethod[props.text]()}</>
}