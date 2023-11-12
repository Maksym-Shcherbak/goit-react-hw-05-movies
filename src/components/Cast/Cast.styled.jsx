import styled from 'styled-components';

const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const CastItem = styled.li`
  flex-basis: calc((100% - 60px) / 4);
`;

const ActorAvatar = styled.img`
  max-width: 150px;
  height: 225px;
`;

const ActorName = styled.h3``;

const ActorRole = styled.p``;

export { CastList, CastItem, ActorAvatar, ActorName, ActorRole };
