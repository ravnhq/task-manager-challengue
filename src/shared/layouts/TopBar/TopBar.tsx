import { useMutation } from "@apollo/client";
import {
  CreateTaskDocument,
  CreateTaskMutation,
  PointEstimate,
  Status,
  Task,
  UserType,
} from "../../../__generated__/graphql-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBorderAll } from "@fortawesome/free-solid-svg-icons";
import styled from "../../../ui/styledComponents/styledComponents";
import { ActionKindTask, useTaskContext } from "../../contexts/TaskProvider";

const StyledDivContainer = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;

const StyledDivIcons = styled.div`
  color: ${({ theme }) => theme.colors.red};
`;

const StyledSpanIcon = styled.span`
  margin: 0 11px;
`;

const StyledButtonAdd = styled.button`
  width: 40px;
  height: 40px;
  font-size: 28px;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.red};
  border: none;
  border-radius: 8px;
`;

const initTask: Task = {
  id: "11",
  name: "Aaron",
  pointEstimate: PointEstimate.Four,
  creator: {
    avatar: null,
    createdAt: "",
    email: "",
    fullName: "Aaron",
    id: "567",
    type: UserType.Candidate,
    updatedAt: "",
  },
  status: Status.Todo,
  assignee: {
    avatar: null,
    createdAt: "",
    email: "",
    fullName: "Brayan",
    id: "567",
    type: UserType.Candidate,
    updatedAt: "",
  },
  createdAt: null,
  dueDate: null,
  position: 7,
  tags: [],
};

const TopBar = () => {
  const { distpach } = useTaskContext();

  const [addTask, { data, loading, error }] = useMutation(CreateTaskDocument, {
    refetchQueries: [
      { query: CreateTaskDocument, variables: { input: { status: initTask } } },
    ],
  });

  console.log(data);

  const handleAddTask = () => {
    addTask({ variables: { input: { status: initTask } } });

    distpach({
      type: ActionKindTask.AddTask,
      payload: { listData: data ? [data] : null },
    });
  };

  return (
    <StyledDivContainer>
      <StyledDivIcons>
        <StyledSpanIcon>
          <FontAwesomeIcon icon={faBars} size="lg" color="#fff" />
        </StyledSpanIcon>
        <FontAwesomeIcon icon={faBorderAll} size="lg" />
      </StyledDivIcons>

      <div>
        <StyledButtonAdd onClick={handleAddTask}>+</StyledButtonAdd>
      </div>
    </StyledDivContainer>
  );
};

export default TopBar;
