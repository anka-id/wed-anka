import { useEffect, useState } from 'react'
import calculateTimeLeft, {
  ICalculateTimeLeftProps,
  ICalculateTimeLeftReturn,
} from '../../../libraries/calculateTimeLeft'

const SaveTheDate = (): JSX.Element => {
  const [weddingDate] = useState<ICalculateTimeLeftProps>({
    year: 2022,
    month: 5,
    day: 12,
    hour: 8,
    minute: 0,
    second: 0,
  })
  const [leftTime, setLeftTime] = useState<ICalculateTimeLeftReturn>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    setLeftTime(calculateTimeLeft(weddingDate))
  }, [])
  useEffect(() => {
    setInterval(() => {
      setLeftTime(calculateTimeLeft(weddingDate))
    }, 1000)
  }, [leftTime])

  return (
    <div className="save-the-date">
      <div className="canvas"></div>
      <img
        src={`static/images/save-the-date--bg.jpg`}
        alt="save-the-date--bg"
      />
      <div className="content">
        <h1 className="title">Save The Date</h1>
        <h2>
          on June, 12<sup>th</sup> 2022 at 08:00 WIB
        </h2>
        <div className="left-time">
          <div className="section">
            <h3 className="value">{leftTime.days}</h3>
            <h4 className="caption">Days</h4>
          </div>
          <div className="section">
            <h3 className="value">{leftTime.hours}</h3>
            <h4 className="caption">Hours</h4>
          </div>
          <div className="section">
            <h3 className="value">{leftTime.minutes}</h3>
            <h4 className="caption">Minutes</h4>
          </div>
          <div className="section">
            <h3 className="value">{leftTime.seconds}</h3>
            <h4 className="caption">Seconds</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SaveTheDate
