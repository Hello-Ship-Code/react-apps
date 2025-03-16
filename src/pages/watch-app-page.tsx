import { HeadingTag } from "../components/html-element-reference/text-content/heading-tag"

import { DateTime } from "../utils/date-time-utils/date-time"

export const WatchesApp = () => {

  return (
    <>
      <div className="app-bar-fix flex flex-col items-center justify-center bg-gradient-to-br from-primary-500 to-secondary-500 text-white">
        < HeadingTag className="text-2xl lg:text-4xl">Welcome to watch app </HeadingTag>

        <div>📅 {<DateTime text="day" />},  {<DateTime text="month" />} {<DateTime text="date" />}</div>
        <div>🕕 {
          <DateTime text="time" />
        }</div>
      </div>
    </>
  )
}