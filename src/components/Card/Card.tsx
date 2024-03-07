import { H2, H3 } from "../Heading";
import {
  CardContainer, CommentsForm,
  CommentsInput,
  CommentsLabel,
  IMG,
  StarContainer,
  StarWatchContainer,
  UserContainer,
  UserName,
  WatchContainer
} from "./Card.styled";
import garold from "../../assets/Garold.png";
import { Icon } from "../Icon/Icon";
import { BUTTON } from "../Button";

const Card = () => {
  return (
    <CardContainer>
      <H2>Название</H2>
      <UserContainer>
        <IMG src={garold} />
        <UserName>
          <H3>User name</H3>
        </UserName>
      </UserContainer>
      <StarWatchContainer>
        <StarContainer>
          <Icon name="Star" />
        </StarContainer>
        <WatchContainer>
          <Icon name="Watch" />
        </WatchContainer>
      </StarWatchContainer>

        <CommentsForm>
          <CommentsLabel htmlFor="CommentsInput"></CommentsLabel>
          <CommentsInput
            id="commentsInput"
            placeholder="Комментарий к проекту"
          ></CommentsInput>
          <BUTTON type="submit" view="edit" width="64px" height="54px"></BUTTON>
        </CommentsForm>
    </CardContainer>
  );
};

export default Card;
