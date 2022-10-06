import { createContext, useMemo, useState } from 'react';
import { StepperObject } from '../constants';

export const StepperContext = createContext({
  steps: null,
  setSteps: () => {},
  setCompletedStep: () => {},
  clearSteps: () => {},
  allStepsCompleted: () => {},
  totalSteps: () => {},
  getPrevStep: () => {},
});

export const StepperProvider = ({ children }) => {
  const { initialSteps } = StepperObject();
  const [steps, setSteps] = useState(initialSteps);

  const setCompletedStep = (stepOrder) => {
    console.log(stepOrder);
    const updateSteps = Object.values(steps).map((step) => {
      if (step.order === stepOrder) {
        return {
          ...step,
          completed: true,
        };
      }
      return step;
    });
    setSteps(updateSteps);
  };

  const totalSteps = () => {
    return steps.length;
  };

  const allStepsCompleted = () => {
    return steps.filter((step) => step.completed === true).length === totalSteps();
  };

  const getPrevStep = (currentStep) => {
    return Object.values(steps).find((step, index) => step.order === currentStep?.order - 1);
  };

  const clearSteps = () => {
    setSteps(initialSteps);
  };

  const data = useMemo(() => ({
    steps,
    setSteps,
    setCompletedStep,
    clearSteps,
    allStepsCompleted,
    totalSteps,
    getPrevStep,
  }));

  return <StepperContext.Provider value={data}>{children}</StepperContext.Provider>;
};
