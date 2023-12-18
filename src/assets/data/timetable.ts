type TimetableClass = {
  classType: ClassType
}

type ClassType = {
  name: string
}

const classTypeTest: ClassType = {name: 'classTypeTest'}
export const classTest: TimetableClass = {classType: classTypeTest}
