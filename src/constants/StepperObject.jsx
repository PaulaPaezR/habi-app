import {ApartmentDetails, ApartmentFeatures, UserAddress, UserEmail, UserFullName} from '../pages';

export const StepperObject = () => {
  return {
    initialSteps: [
      {
        order: 1,
        path: '/',
        component: <UserFullName />,
        description: 'Datos personales',
        completed: false,
      },
      {
        order: 2,
        path: '/user-email',
        component: <UserEmail />,
        description: 'Contacto',
        completed: false,
      },
      {
        order: 3,
        path: '/user-address',
        component: <UserAddress />,
        description: 'Dirección',
        completed: false,
      },
      {
        order: 4,
        path: '/apto-details',
        component: <ApartmentDetails />,
        description: 'Detalles del inmueble',
        completed: false,
      },
      {
        order: 5,
        path: '/apto-features',
        component: <ApartmentFeatures />,
        description: 'Características',
        completed: false,
      },
    ],
  };
};
