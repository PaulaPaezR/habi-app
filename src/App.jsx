import { Route, Routes } from 'react-router-dom';
import { PageNotFound, Summary } from './pages';
import { StepperLayout } from './layout';
import './App.css';
import { useContext } from 'react';
import { StepperContext } from './context/StepperContext';

export const App = () => {
  const { steps } = useContext(StepperContext);

  return (
    <Routes>
      <Route path='/' element={<StepperLayout />}>
        {steps.map((step, index) => {
          return <Route path={step.path} element={step.component} key={index} />;
        })}
      </Route>
      <Route path='summary' element={<Summary />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
};
