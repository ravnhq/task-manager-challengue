import SearchBar from "../../shared/layouts/SearchBar/SearchBar";
import TopBar from "../../shared/layouts/TopBar/TopBar";
import styled from "../../ui/styledComponents/styledComponents";

const StyledDivContainer = styled.div`
  width: 1010px;
  height: 90vh;
  margin-left: 25px;
`;

const Dashboard = () => {
  return (
    <StyledDivContainer>
      <SearchBar />
      <TopBar />
    </StyledDivContainer>
  );
};

export default Dashboard;
