import styled from "../../../ui/styledComponents/styledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const StyledDivContainer = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 16px;
  color: #94979a;
`;

const StyledDivFirst = styled.div`
  margin-left: 26px;
`;

const StyledInputSearch = styled.input`
  border: none;
  padding: 0;
  margin-left: 25px;
  font-size: 15px;
  outline: 0;

  &::placeholder {
    background-color: ${({ theme }) => theme.colors.gray};
  }
`;

const SearchBar = () => {
  return (
    <StyledDivContainer>
      <StyledDivFirst>
        <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
        <StyledInputSearch type="text" placeholder="Search" />
      </StyledDivFirst>

      <div>
        <FontAwesomeIcon icon={faBell} size="lg" />
        <img src="" alt="profile" />
      </div>
    </StyledDivContainer>
  );
};

export default SearchBar;
