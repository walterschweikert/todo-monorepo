export interface TODO {
  id: string
  task: string
  createdAt: number
}

export const todos: TODO[] = [
  {
    id: 'todo1',
    task: 'Wash the Dishes',
    createdAt: 1700616164099
  },
  {
    id: 'todo2',
    task: 'Go shopping',
    createdAt: 1700616264099
  },
  {
    id: 'todo3',
    task: 'Cook lunch',
    createdAt: 1700616364099
  },
  {
    id: 'todo4',
    task: 'Vacuum the Carpet',
    createdAt: 1700616464099
  }
]

