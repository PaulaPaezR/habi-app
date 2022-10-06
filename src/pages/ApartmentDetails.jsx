import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { setFloor } from '../store/stepsSlices';
import { useStepper } from '../hooks/useStepper';
import { Button, InputError, InputText } from '../components';

export const ApartmentDetails = () => {
  const { navigate, currentStep, setCompletedStep, dispatch, prevStep } = useStepper();
  const floor = useSelector((state) => state.floor);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (!prevStep.completed) {
      navigate(prevStep.path, { replace: true });
    }
  }, []);

  const onSubmit = (data) => {
    dispatch(setFloor(data.floor));
    setCompletedStep(currentStep.order);
    navigate('/apto-features', { replace: true });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='form__fields'>
        <label className='form__label'>Indícanos en qué piso está ubicado tu apartamento:</label>
        <div className='form__fieldset'>
          <InputText
            type='number'
            {...register('floor', {
              required: true,
              min: 1,
              max: 50,
              value: floor,
            })}
            placeholder='# piso'
          />
          {errors?.floor?.type === 'required' && <InputError>Campo obligatorio</InputError>}
          {errors?.floor?.type === 'min' && <InputError>El número minimo permitido es 1</InputError>}
          {errors?.floor?.type === 'max' && <InputError>El número máximo permitido es 50</InputError>}
        </div>
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
