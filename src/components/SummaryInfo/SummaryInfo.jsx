import { useSelector } from 'react-redux';
import styled from 'styled-components';

const SummaryInfoTitleStyled = styled.div`
  color: #7c01ff;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
`;

const SummaryInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const SummaryInfoItemCpntentStyled = styled.div`
  padding-bottom: 15px;
  border-bottom: 1px solid #cbcbcb;
  &:last-child {
    border-bottom: 0;
  }
`;

const SummaryInfoItemStyled = styled.div`
  color: ${(props) => (props.label ? '#808080' : '#1e1e1e')};
  font-size: ${(props) => (props.label ? '11px' : '17px')};
  font-weight: ${(props) => (props.label ? 'normal' : '500')};
  text-transform: ${(props) => (props.label ? 'uppercase' : 'none')};
  letter-spacing: ${(props) => (props.label ? '0.1rem;' : '1')};
  margin-bottom: ${(props) => (props.label ? '5px' : '0')};
  margin-top: ${(props) => (props.multiplesValues ? '20px' : '0')};
`;

export const SummaryInfo = () => {
  const state = useSelector((state) => state);
  return (
    <>
      <SummaryInfoTitleStyled>Datos de registro</SummaryInfoTitleStyled>
      <SummaryInfoStyled>
        {state.fullName && <SummaryItem label='Nombre Completo' value={state.fullName} />}
        {state.email && <SummaryItem label='Email' value={state.email} />}
        {state.address && <SummaryItem label='Dirección del inmueble' value={state.address} />}
        {state.floor && <SummaryItem label='Número de piso' value={state.floor} />}
        {state.features && <SummaryItem label='Caracteristicas' multiplesValues={state.features} />}
      </SummaryInfoStyled>
    </>
  );
};

const SummaryItem = ({ label, value, multiplesValues }) => {
  return (
    <SummaryInfoItemCpntentStyled>
      <SummaryInfoItemStyled label={label}>{label}</SummaryInfoItemStyled>
      {value && <SummaryInfoItemStyled>{value}</SummaryInfoItemStyled>}
      {multiplesValues && <SummaryInfoItemStyled multiplesValues={true}>{multiplesValues.map((value, index) => (
          <label key={index} className='checkbox'>
              <input type='checkbox' checked />
              <span className='checkbox__checkmark' />
              <span className='checkbox__label'>{value}</span>
          </label>
      ))}</SummaryInfoItemStyled>}
    </SummaryInfoItemCpntentStyled>
  );
};
