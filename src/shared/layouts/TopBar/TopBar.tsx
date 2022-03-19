import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBorderAll } from "@fortawesome/free-solid-svg-icons";
import styled from "../../../ui/styledComponents/styledComponents";

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

const TopBar = () => {
  return (
    <StyledDivContainer>
      <StyledDivIcons>
        <StyledSpanIcon>
          <FontAwesomeIcon icon={faBars} size="lg" color="#fff" />
        </StyledSpanIcon>
        <FontAwesomeIcon icon={faBorderAll} size="lg" />
      </StyledDivIcons>

      <div>
        <StyledButtonAdd>+</StyledButtonAdd>
      </div>
    </StyledDivContainer>
  );
};

export default TopBar;
