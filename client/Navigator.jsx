import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.div`
  flex: 1 1 50%;
  max-width: 50%;
  color: #656666;
  font: 15px/24px 'Calibre-Regular', sans-serif;
  letter-spacing: .086em;
  padding-top: 25px;
  text-transform: uppercase;

  > div {
    float: right;
    padding-right: 40px;

    :hover {
      color: #b70038;
      cursor: pointer;
    }
  }
`;

export default function Navigator() {
  return (
    <NavContainer>
      <div>
        the latest
      </div>
      <div>
        city's best
      </div>
      <div>
        san francisco
      </div>
    </NavContainer>
  );
}