interface ICalculateTimeLeftProps {
  year: number
  month: number
  day: number
  hour: number
  minute: number
  second: number
}
interface ICalculateTimeLeftReturn {
  days: number
  hours: number
  minutes: number
  seconds: number
}
const calculateTimeLeft = ({
  year,
  month,
  day,
  hour,
  minute,
  second,
}: ICalculateTimeLeftProps): ICalculateTimeLeftReturn => {
  const difference =
    +new Date(year, month, day, hour, minute, second) - +new Date()
  let timeLeft: ICalculateTimeLeftReturn = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  }

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }

  return timeLeft
}

export type { ICalculateTimeLeftProps, ICalculateTimeLeftReturn }
export default calculateTimeLeft
