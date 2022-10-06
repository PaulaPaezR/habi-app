import { StepperContext } from '../context/StepperContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useContext } from 'react';

export const useStepper = () => {
  const { steps, setCompletedStep, getPrevStep } = useContext(StepperContext);
  const navigate = useNavigate();
  const location = useLocation();
  const urlPath = location.pathname;
  const dispatch = useDispatch();

  const currentStep = steps.find((step) => step.path === urlPath);
  const prevStep = getPrevStep(currentStep);

  return {
    navigate,
    currentStep,
    setCompletedStep,
    dispatch,
    prevStep,
  };
};
