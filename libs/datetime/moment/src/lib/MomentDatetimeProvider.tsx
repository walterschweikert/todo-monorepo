import React, {FC, ReactNode} from 'react'
import {DatetimeProvider} from "@todo-monorepo/datetime/interface";
import {datetime} from "./datetime";

interface MomentDatetimeProviderProps {
  children: ReactNode
}

export const MomentDatetimeProvider: FC<MomentDatetimeProviderProps> = (props) => {
  const {children} = props
  return (
    <DatetimeProvider datetime={datetime}>
      {children}
    </DatetimeProvider>
  )
}
