import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MovieName = styled.h2`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const InfoTable = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

export const ImageWrapper = styled.div`
  width: 350px;
  height: 450px;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const StyledSubTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 15px;
`;

export const StyledSection = styled.div`
  margin-bottom: 20px;
  padding-bottom: 10px;

  &:not(:last-child) {
    border-bottom: 2px solid black;
  }
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  border: 1px solid orangered;

  &.active {
    color: white;
    background: linear-gradient(
      to right bottom,
      hsl(154, 97%, 62%),
      hsl(225, 97%, 62%)
    );
    border: none;
  }
`;

export const MoreInfoAbout = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin-bottom: 20px;
`;
