import React, { useEffect } from "react";
import styled from "../../../ui/styledComponents/styledComponents";
import {
  ActionKindTask,
  useTaskContext,
} from "../../../shared/contexts/TaskProvider";
import TaskCard from "./TaskCard/TaskCard";
import {
  GetTasksDocument,
  GetTasksQuery,
} from "../../../__generated__/graphql-types";
import { useQuery } from "@apollo/client";

const StyledDivContainer = styled.div`
  width: 32%;
  height: auto;
  background-color: transparent;
`;

const StyledPText = styled.p`
  color: #fff;
  margin: 0;
  margin-top: 10px;
`;

interface ITaskListProps {
  text: string;
}

const TaskListView = ({ text }: ITaskListProps) => {
  const { tasks, distpach } = useTaskContext();

  const { loading, error, data } = useQuery<GetTasksQuery>(GetTasksDocument, {
    variables: { input: { status: text.toUpperCase() } },
  });

  useEffect(() => {
    distpach({
      type: ActionKindTask.GetTasks,
      payload: { listData: data ? data.tasks : null },
    });
  }, [data, distpach]);

  if (loading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    //ERROR;
  }

  return (
    <StyledDivContainer>
      <StyledPText>{`${text} ()`}</StyledPText>

      {
        // eslint-disable-next-line array-callback-return
        tasks.map((task) => {
          if (task.status === text.toUpperCase()) {
            return <TaskCard key={task.id} task={task} />;
          }
        })
      }
    </StyledDivContainer>
  );
};

export default TaskListView;
