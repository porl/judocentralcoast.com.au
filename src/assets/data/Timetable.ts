type TimetableClass = {
  classType: ClassType,
  day: Day,
  startTime: Time,
  endTime: Time
}

type ClassType = {
  name: string
  description: string
}

type Location = {
  name: string
}

const Day = {
  Sun: "Sunday",
  Mon: "Monday",
  Tue: "Tuesday",
  Wed: "Wednesday",
  Thu: "Thursday",
  Fri: "Friday",
  Sat: "Saturday"
} as const

type Time = {
  hour: number,
  minute: number
}

const classTypeTest: ClassType = {name: 'classTypeTest'}
const Timetable: TimetableClass = {classType: classTypeTest, day: Day.Sun}

export default Timetable
