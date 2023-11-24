import {DateTimeService} from "./datetype-types";
import {createContext} from "react";


interface DatetimeContextType {
  datetime: () => DateTimeService
}

const datetimeContext = createContext<DatetimeContextType | null>(null)


