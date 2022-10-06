import { useNavigate } from 'react-router-dom';
import { Button } from '../components';
import styled from 'styled-components';

const NotFoundStyled = styled.div`
  min-height: 100vh;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NotFoundContainerStyled = styled.div`
  text-align: center;
  background: #fff;
  padding: 20px;
  border-radius: 20px;
  @media screen and (min-width: 1024px) {
    padding: 80px;
  }
`;

const NotFoundErrorStyled = styled.h2`
  font-size: calc(2em + 30vw);
  text-align: center;
  letter-spacing: 0.5rem;
  @media screen and (min-width: 1024px) {
    font-size: 400px;
  }
`;

const NotFoundTextStyled = styled.p`
  color: grey;
  font-size: 15px;
  margin-bottom: 30px;
  @media screen and (min-width: 1024px) {
    font-size: 18px;
  }
`;

export const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <NotFoundStyled>
      <NotFoundContainerStyled>
        <NotFoundErrorStyled>404</NotFoundErrorStyled>
        <NotFoundTextStyled>Al parecer te has perdido, pero no te preocupes, te ayudamos a regresar</NotFoundTextStyled>
        <Button onClick={() => navigate('/')} secondary>
          Regresar
        </Button>
      </NotFoundContainerStyled>
    </NotFoundStyled>
  );
};
