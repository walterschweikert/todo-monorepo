import React, {FC} from 'react'
import List from "@mui/material/List";
import {TODO, todos} from './todos'
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import {useDatetime} from "@todo-monorepo/datetime/interface";

export const TodoList: FC = () => {
 const { now, format} = useDatetime()
  const displayTask = (todo: TODO): string => {
    return `${todo.task} created at: ${format(todo.createdAt)}`
  }

  return (
    <div style={{width: '400px', margin: 'auto'}}>
      <Typography variant={"h2"} > My To-Do List</Typography>
      <Typography variant={"h4"}> as of: {format(now())}</Typography>

      <List>
        {todos.map((todo) => (
          <ListItem key={todo.id}>
            <ListItemText primary={displayTask(todo)}/>
          </ListItem>
        ))}
      </List>
    </div>
  )
}
