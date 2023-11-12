import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const GridItem = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

const ItemImage = styled.img`
  width: 100%;
  height: 360px;
  margin-bottom: 15px;
  object-fit: contain;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
  transform: scale(1.03);
  `;

const Link = styled(NavLink)`
  &:hover {
    color: orangered;
  }
`;

const MovieName = styled.h3`
  text-align: center;
`;

export { GridItem, ItemImage, Link, MovieName };
