import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { setAddress } from '../store/stepsSlices';
import { useStepper } from '../hooks/useStepper';
import { Button, InputError, InputText } from '../components';
import {useEffect} from "react";

export const UserAddress = () => {
  const { navigate, currentStep, setCompletedStep, dispatch, prevStep } = useStepper();
  const address = useSelector((state) => state.address);

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
    dispatch(setAddress(data.address));
    setCompletedStep(currentStep.order);
    navigate('/apto-details', { replace: true });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='form__fields'>
        <label className='form__label'>Ingresa la dirección de tu inmueble: </label>

        <div className='form__fieldset'>
          <InputText
            type='text'
            {...register('address', { required: true, value: address })}
            placeholder='Cra 22 # 22 - 02'
          />
          {errors?.address?.type === 'required' && <InputError>Campo obligatorio</InputError>}
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
