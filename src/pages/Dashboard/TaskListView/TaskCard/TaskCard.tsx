import styled from "../../../../ui/styledComponents/styledComponents";
import { Task } from "../../../../__generated__/graphql-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faComment,
  faFolderTree,
  faPaperclip,
} from "@fortawesome/free-solid-svg-icons";

const StyledDivContainer = styled.div`
  width: 310px;
  height: auto;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 8px;
`;

const StyledDivData = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
`;

const StyledPName = styled.p`
  font-size: 18px;
  margin: 0;
  padding-left: 16px;
  color: #fff;
`;

const StyledSpanEllipsis = styled.span`
  color: #94979a;
  padding-right: 16px;
`;

const StyledDivPoints = styled(StyledDivData)``;

const StyledPPoint = styled(StyledPName)`
  font-size: 15px;
`;

const TaskCard = ({ task }: { task: Task }) => {
  return (
    <StyledDivContainer>
      <StyledDivData>
        <StyledPName>{task.name}</StyledPName>
        <StyledSpanEllipsis>
          <FontAwesomeIcon icon={faEllipsis} size="lg" />
        </StyledSpanEllipsis>
      </StyledDivData>

      <StyledDivPoints>
        <StyledPPoint>{task.pointEstimate} Points</StyledPPoint>
        <div>Button</div>
      </StyledDivPoints>

      <div>{task.tags}</div>

      <div>
        <img
          src={task.creator.avatar ? task.creator.avatar : ""}
          alt="creator"
        />
        <div>
          <FontAwesomeIcon icon={faPaperclip} />
          5
          <FontAwesomeIcon icon={faFolderTree} />
          3
          <FontAwesomeIcon icon={faComment} />
        </div>
      </div>
    </StyledDivContainer>
  );
};

export default TaskCard;
