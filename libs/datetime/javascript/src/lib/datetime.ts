import {DateTimeService} from "@todo-monorepo/datetime/interface"


export const datetime = (): DateTimeService => {
  const now = () => Number(new Date())

  const format = (dateTime: number) => {
    const myDateTime = new Date(dateTime)
    const month = myDateTime.getMonth() + 1
    const day = myDateTime.getDate()
    const year: number = myDateTime.getFullYear()
    const hours = myDateTime.getHours()
    const minutes = myDateTime.getMinutes()
    return `${month}/${day}/${year} ${hours}:${minutes}`
  }

  return {now, format}
}
