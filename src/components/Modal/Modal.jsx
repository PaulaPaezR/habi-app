import styled from 'styled-components';
import { SummaryInfo } from '../SummaryInfo/SummaryInfo';

const ModalStyled = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  display: ${(props) => (props.open ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
`;

const ModalContainerStyled = styled.div`
  width: 100%;
  max-width: 400px;
  background: #fff;
  padding: 40px 30px;
  border-radius: 15px;
  position: relative;
`;

const ModalContentStyled = styled.div`
`;

const ModalButtonCloseStyled = styled.div`
  padding: 10px;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
`;

export const Modal = ({ open, handleClose }) => {
  return (
    <ModalStyled open={open}>
      <ModalContainerStyled>
        <ModalButtonCloseStyled onClick={handleClose}>X</ModalButtonCloseStyled>
        <ModalContentStyled>
          <SummaryInfo />
        </ModalContentStyled>
      </ModalContainerStyled>
    </ModalStyled>
  );
};
