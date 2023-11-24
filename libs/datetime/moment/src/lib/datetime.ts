
import moment from "moment/moment";
import {DateTimeService} from "@todo-monorepo/datetime/interface";

export const datetime = (): DateTimeService => {
  const now = () => moment().valueOf()
  const format = (datetime: number) =>
    moment(datetime).format('M/D/YYYY - H:mm')


  return {now, format}
}
