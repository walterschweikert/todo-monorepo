import {TodoList} from "./TodoList";
import {JsDatetimeProvider} from "@todo-monorepo/datetime/javascript";

export function App() {
  return (
    <div>
      <JsDatetimeProvider>
        <TodoList  />
      </JsDatetimeProvider>
    </div>

  );
}

export default App;
