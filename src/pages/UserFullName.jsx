import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { setFullName } from '../store/stepsSlices';
import { useStepper } from '../hooks/useStepper';
import {Button, InputError, InputText} from "../components";

export const UserFullName = () => {
  const { navigate, currentStep, setCompletedStep, dispatch } = useStepper();
  const fullName = useSelector((state) => state.fullName);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(setFullName(data.fullName));
    setCompletedStep(currentStep.order);
    navigate('/user-email', { replace: true });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='form__fields'>
        <label className='form__label'>Ingresa tu nombre completo</label>
        <div className='form__fieldset'>
          <InputText type='text' {...register('fullName', { required: true, value: fullName })} placeholder='Ex. John Doe' />
          {errors?.fullName?.type === 'required' && <InputError>Campo obligatorio</InputError>}
        </div>
      </div>
      <div className='buttons'>
        <Button>Siguiente</Button>
      </div>
    </form>
  );
};
