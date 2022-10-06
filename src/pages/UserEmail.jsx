import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { setEmail } from '../store/stepsSlices';
import { useStepper } from '../hooks/useStepper';
import {Button, InputError, InputText} from '../components';
import {useEffect} from "react";

export const UserEmail = () => {
  const { navigate, currentStep, setCompletedStep, dispatch, prevStep } = useStepper();
  const email = useSelector((state) => state.email);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { email } });

  useEffect(() => {
    if (!prevStep.completed) {
      navigate(prevStep.path, { replace: true });
    }
  }, []);

  const onSubmit = (data) => {
    dispatch(setEmail(data.email));
    setCompletedStep(currentStep.order);
    navigate('/user-address', { replace: true });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='form__fields'>
        <label className='form__label'>Ingresa tu email</label>
        <div className='form__fieldset'>
          <InputText
            id='email'
            type='text'
            {...register('email', {
              required: true,
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              value: email,
            })}
            placeholder='Ex. john.doe@mailito.co'
          />
          {errors?.email?.type === 'required' && <InputError>Campo obligatorio</InputError>}
          {errors?.email?.type === 'pattern' && <InputError>Correo no válido</InputError>}
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
