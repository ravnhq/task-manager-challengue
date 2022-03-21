import SearchBar from "../../shared/layouts/SearchBar/SearchBar";
import TopBar from "../../shared/layouts/TopBar/TopBar";
import TaskListView from "./TaskListView/TaskListView";
import styled from "../../ui/styledComponents/styledComponents";

const StyledDivContainer = styled.div`
  width: 1010px;
  height: 90vh;
  margin-left: 25px;
`;

const StyledDivListTasks = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Dashboard = () => {
  return (
    <StyledDivContainer>
      <SearchBar />
      <TopBar />

      <StyledDivListTasks>
        <TaskListView text="ToDo" />
        <TaskListView text="In_Progress" />
        <TaskListView text="Done" />
      </StyledDivListTasks>
    </StyledDivContainer>
  );
};

export default Dashboard;
