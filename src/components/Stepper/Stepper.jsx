import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import './Stepper.css';

const StepperStyled = styled.div`
  max-width: 1000px;
  padding-bottom: 30px;
  border-bottom: 1px solid #cbcbcb;
  margin: 0 auto 20px;
  display: block;

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 5px
  }
  @media screen and (min-width: 900px) {
    gap: 10px
`;

export const Stepper = ({ steps }) => {
  return (
    <StepperStyled>
      {steps.map((step, index) => (
        <Step key={index} {...step} totalSteps={steps.length} />
      ))}
    </StepperStyled>
  );
};

const Step = ({ path, order, description, completed, totalSteps }) => {
  const location = useLocation();
  const urlPath = location.pathname;
  const stepIsActive = path === urlPath;
  const className = `step ${stepIsActive ? 'active' : ''} ${completed ? 'completed' : ''}`;

  return (
    <div className={className}>
      <div className='step__position'>
        {order}
        <span> de {totalSteps}</span>
      </div>
      <div className='step__info'>
        <span className='step__label'>Paso {order}</span>
        <span className='step__title'>{description}</span>
        <span className={`step__state ${stepIsActive ? 'step__state--progress' : ''}`}>
          {stepIsActive ? 'En progreso' : completed ? 'Completado' : null}
        </span>
      </div>
    </div>
  );
};
