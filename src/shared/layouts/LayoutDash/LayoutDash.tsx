import styled from "../../../ui/styledComponents/styledComponents";
import {
  ThemeProvider,
  createGlobalStyle,
} from "../../../ui/styledComponents/styledComponents";
import { theme } from "../../../ui/styledComponents/theme";
import TaskContextProvider from "../../contexts/TaskProvider";

//Components
import Sidebar from "../Sidebar/Sidebar";

const GlobalStyle = createGlobalStyle`
body {
  ${theme.font}
}
`;

const StyledContainer = styled.div`
  max-width: 1241px;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #222528;
  margin-left: auto;
  margin-right: auto;
`;

const StyledContainerGlobal = styled.div`
  width: 100%;
  height: 100%;
  background-color: #222528;
`;

const LayoutDash = ({ children }: { children: JSX.Element }) => {
  return (
    <StyledContainerGlobal>
      <StyledContainer>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <TaskContextProvider>
            <Sidebar />
            {children}
          </TaskContextProvider>
        </ThemeProvider>
      </StyledContainer>
    </StyledContainerGlobal>
  );
};

export default LayoutDash;
