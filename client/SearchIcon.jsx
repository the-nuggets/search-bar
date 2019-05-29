import React from 'react';
import styled from 'styled-components';

const SearchGlyph = styled.div`
  display: inline-block;
  height: 26px;
  width: 26px;  

  > svg {
    stroke: #656666;
  }    

  :hover {
    cursor: pointer;
  }
`;

export default function SearchIcon(props) {
  return (
    <SearchGlyph onClick={props.handleSubmit}>
      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>search</title>
        <g stroke-width="1.5" fill="none" fill-rule="evenodd">
          <path d="M9.623 4.5C6.8 4.5 4.5 6.8 4.5 9.623c0 2.825 2.3 5.124 5.123 5.123 2.825 0 5.123-2.298 5.123-5.124C14.746 6.8 12.45 4.5 9.623 4.5zM15.174 15.118L20 19.943"></path>
        </g>
      </svg>
    </SearchGlyph>
  );
}