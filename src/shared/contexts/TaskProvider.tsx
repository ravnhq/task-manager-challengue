import React, { createContext, useContext, useReducer } from "react";
import { Task } from "../../__generated__/graphql-types";

export interface TaskDistpach {
  tasks: Task[];
  distpach: (value: ActionTask) => void;
}

export enum ActionKindTask {
  GetTasks = "GET_TO_TASKS",
  AddTask = "ADD_TASK",
}

export type ActionTask = {
  type: ActionKindTask;
  payload: { listData: Task[] | null };
};

export const TaskContext = createContext<TaskDistpach | null>(null);

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!context) {
    throw new Error("You can't use the TaskContext outside of the provider");
  }
  return context;
};

const reducer = (state: Task[], action: ActionTask): Task[] => {
  const { type, payload } = action;

  switch (type) {
    case ActionKindTask.GetTasks:
      if (payload.listData) {
        return [...state, ...payload.listData];
      }

      return state;
    case ActionKindTask.AddTask:
      if (payload.listData) {
        return [...state, ...payload.listData];
      }

      return state;
    default:
      return state;
  }
};

const TaskContextProvider = ({ children }: { children: JSX.Element[] }) => {
  const [dataTasks, dispatch] = useReducer(reducer, []);

  return (
    <TaskContext.Provider value={{ tasks: dataTasks, distpach: dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
