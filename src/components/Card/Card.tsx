import { H2, H3 } from "../Heading";
import {
  CardContainer,
  CommentsForm,
  CommentsInput,
  CommentsLabel,
  IMG,
  StarContainer,
  StarWatchContainer,
  UserContainer,
  UserName,
  WatchContainer,
} from "./Card.styled";
import garold from "../../assets/Garold.png";
import { Icon } from "../Icon/Icon";
import { BUTTON } from "../Button";

export interface Owner {
  login: string;
  avatar_url: string;
}

export interface Repository {
  id: number;
  full_name: string;
  stargazers_count: number;
  watchers_count: number;
  html_url: string;
  owner: Owner;
  
}

export interface CardProps {
  repo: Repository;
}

const Card = ({ repo }: CardProps) => {
  return (
    <CardContainer>
      <a href={"repo.html_url"} target="_blank" rel="noopener norefferer">
        <H2>{repo.full_name}</H2>
      </a>
      <UserContainer>
        <IMG src={repo.owner.avatar_url} alt={garold} />
        <UserName>
          <H3>{repo.owner.login}</H3>
        </UserName>
      </UserContainer>
      <StarWatchContainer>
        <StarContainer>
          <Icon name="Star" />
          {repo.stargazers_count}
        </StarContainer>
        <WatchContainer>
          <Icon name="Watch" />
          {repo.watchers_count}
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
