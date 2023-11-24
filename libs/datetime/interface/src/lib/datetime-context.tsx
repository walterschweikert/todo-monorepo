import {DateTimeService} from "./datetype-types";
import {createContext, FC, ReactNode, useContext} from "react";


interface DatetimeContextType {
  datetime: () => DateTimeService
}

const DatetimeContext = createContext<DatetimeContextType | null>(null)

export const useDatetimeContext = () => {
  const datetimeContext = useContext(DatetimeContext)
  if(!datetimeContext){
    throw new Error('No datetime provider detected')
  }
  return datetimeContext
}

interface DatetimeProviderProps {
  datetime: () => DateTimeService
  children: ReactNode
}
export const DatetimeProvider: FC<DatetimeProviderProps> = (props) => {
  const {datetime, children} = props
  return (
    <DatetimeContext.Provider value={{datetime}}>{children}</DatetimeContext.Provider>
  )
}
