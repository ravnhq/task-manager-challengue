import styled from "../../../ui/styledComponents/styledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBorderAll } from "@fortawesome/free-solid-svg-icons";

const StyledDivContainer = styled.div`
  width: 232px;
  height: 90vh;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 24px;
`;

const StyledDivImage = styled.div`
  width: 40px;
  height: 40px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 14px;
  margin-bottom: 46px;
`;

const StyledUlNav = styled.ul`
  list-style: none;
  padding: 0;
`;

const StyledLiItem = styled.li`
  width: 228px;
  height: 56px;
  display: flex;
  align-items: center;
  color: #94979a;
`;

const StyledLiItemSelection = styled(StyledLiItem)`
  border-right: 4px solid ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.red};
`;

const StyledSpan = styled.span`
  margin: 19px;
`

const Sidebar = () => {
  return (
    <StyledDivContainer>
      <StyledDivImage>
        <svg
          width="40"
          height="40"
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M54.7593 47.8017C64.2989 45.1947 71.3129 36.4665 71.3129 26.1C71.3129 13.8892 61.5852 3.95061 49.4587 3.61186V3.59998H14.5193H0L12.0512 18.596H14.5193V18.6H48.9259C53.0162 18.6594 56.3142 21.9934 56.3142 26.098C56.3142 30.2403 52.9568 33.598 48.8149 33.598H43.3459H24.1044L52.0714 68.4H71.3109L54.7593 47.8017Z"
            fill="white"
          />
          <path
            d="M16.2 68.4C21.6676 68.4 26.1 63.9676 26.1 58.5C26.1 53.0324 21.6676 48.6 16.2 48.6C10.7324 48.6 6.29999 53.0324 6.29999 58.5C6.29999 63.9676 10.7324 68.4 16.2 68.4Z"
            fill="white"
          />
        </svg>
      </StyledDivImage>

      <StyledUlNav>
        <StyledLiItemSelection>
          <StyledSpan>
            <FontAwesomeIcon icon={faBorderAll} />
          </StyledSpan>
          Dashboard
        </StyledLiItemSelection>
        <StyledLiItem>
          <StyledSpan>
            <FontAwesomeIcon icon={faBars} />
          </StyledSpan>
          My Task
        </StyledLiItem>
      </StyledUlNav>
    </StyledDivContainer>
  );
};

export default Sidebar;
