import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { setFeatures } from '../store/stepsSlices';
import { useStepper } from '../hooks/useStepper';
import { Button } from '../components';
import {useEffect} from "react";

const optionsFeatures = ['Zona BBQ', 'Salón comunal', 'Parque de juegos', 'Ascensor', 'Parqueadero', 'Gimnasio'];

export const ApartmentFeatures = () => {
  const { navigate, currentStep, setCompletedStep, dispatch, prevStep } = useStepper();
  const features = useSelector((state) => state.features);

  const { register, handleSubmit } = useForm();

  useEffect(() => {
      if (!prevStep.completed) {
          navigate(prevStep.path, { replace: true });
      }
  }, [])

  const onSubmit = (data) => {
    dispatch(setFeatures(data.features || []));
    setCompletedStep(currentStep.order);
    navigate('/summary', { replace: true });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='form__fields'>
        <p className='form__label'>Seleccione las caracteristicas de su inmueble:</p>
        {optionsFeatures.map((option, index) => (
          <label key={index} className='checkbox'>
            <input type='checkbox' value={option} {...register('features')} />
            <span className='checkbox__checkmark' />
            <span className='checkbox__label'>{option}</span>
          </label>
        ))}
      </div>
      <div className='buttons'>
        <Link to={prevStep.path}>
          <Button secondary>Regresar</Button>
        </Link>
        <Button>Siguiente</Button>
      </div>
    </form>
  );
};
