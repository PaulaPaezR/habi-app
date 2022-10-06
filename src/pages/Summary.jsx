import { useContext, useEffect } from 'react';
import { clearData } from '../store/stepsSlices';
import { StepperContext } from '../context/StepperContext';
import { Button, SummaryInfo } from '../components';
import { useStepper } from '../hooks/useStepper';
import styled from 'styled-components';

const SummaryStyled = styled.div`
  height: 90vh;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SummaryContainerStyled = styled.div`
  width: 100%;
  max-width: 500px;
  background: #ffffff;
  padding: 40px 30px;
  border-radius: 15px;
  margin: 0 auto;
`;

export const Summary = () => {
  const { steps, clearSteps, allStepsCompleted, totalSteps } = useContext(StepperContext);
  const { navigate, dispatch } = useStepper();

  useEffect(() => {
    if (!allStepsCompleted()) {
      navigate(steps.find((step) => step.order === totalSteps()).path, { replace: true });
    }
  }, []);

  const handleClick = () => {
    dispatch(clearData());
    clearSteps();
    navigate('/', { replace: true });
  };
  return (
    <SummaryStyled>
      <SummaryContainerStyled>
        <SummaryInfo />
        <Button fullWidth onClick={handleClick}>
          Registrar otro inmueble
        </Button>
      </SummaryContainerStyled>
    </SummaryStyled>
  );
};
