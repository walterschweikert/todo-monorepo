import {DateTimeService} from "./datetype-types";
import {useDatetimeContext} from "./datetime-context";

export const useDatetime = (): DateTimeService => {
  const {datetime: datetimeImp} = useDatetimeContext()
  return datetimeImp()
}
