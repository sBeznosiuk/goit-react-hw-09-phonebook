import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

 
  }
`;

const StyledList = styled.ul`
  list-style: none;

  & li {
    margin-bottom: 20px;
  }

  & li button {
    height: 25px;
    margin-left: 30px;
  }
`;

export { StyledForm, StyledList };
