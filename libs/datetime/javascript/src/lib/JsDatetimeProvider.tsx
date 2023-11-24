import React, {FC, ReactNode} from 'react'
import {DatetimeProvider} from "@todo-monorepo/datetime/interface";
import {datetime} from "./datetime";

interface JsDatetimeProviderProps {
  children: ReactNode
}

export const JsDatetimeProvider: FC<JsDatetimeProviderProps> = (props) => {
  const {children} = props
  return (
    <DatetimeProvider datetime={datetime}>
      {children}
    </DatetimeProvider>
  )
}
