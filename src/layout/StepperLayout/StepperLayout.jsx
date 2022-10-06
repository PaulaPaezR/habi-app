import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { PanelSummary, Stepper } from '../../components';
import { StepperContext } from '../../context/StepperContext';
import styled from 'styled-components';

const LayoutStyled = styled.div`
  max-width: 1400px;
  padding: 20px;
  margin: 0 auto;

  @media screen and (min-width: 1024px) {
    padding-top: 150px;
    display: flex;
    justify-content: center;
    gap: 15px;
  }
`;

const MainStyled = styled.div`
  max-width: 1100px;
  background: #fff;
  padding: 30px;
  border-radius: 15px;
  margin-bottom: 30px;
  
  @media screen and (min-width: 1024px) {
    flex: 2;
  }
`;

export const StepperLayout = () => {
  const { steps } = useContext(StepperContext);

  return (
    <LayoutStyled>
      <MainStyled className='main'>
        <Stepper steps={steps} />
        <Outlet />
      </MainStyled>
      <PanelSummary />
    </LayoutStyled>
  );
};
