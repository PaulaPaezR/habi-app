import { useModal } from '../../hooks/useModal';
import { SummaryInfo, Modal } from '..';
import { Button } from '../styled-components';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const PanelStyled = styled.div`
  flex: 1;
  &:empty {
    display: none;
  }
  @media screen and (min-width: 768px) {
    height: fit-content;
    background: #fff;
    padding: 30px 30px 50px;
    border-radius: 15px;
  }
`;

const PanelMobileStyled = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const PanelDesktopStyled = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const PanelSummary = () => {
  const { openModal, handleOpen, handleClose } = useModal();
  const state = useSelector((state) => state);
  const showPanel =
    Boolean(state.fullName) ||
    Boolean(state.email) ||
    Boolean(state.address) ||
    Boolean(state.floor) ||
    Boolean(state.features);

  console.log(showPanel);

  return (
    <>
      <PanelStyled>
        {showPanel && (
          <>
            <PanelMobileStyled>
              <Button fullWidth onClick={handleOpen}>
                Ver resumen
              </Button>
              <Modal open={openModal} handleClose={handleClose} />
            </PanelMobileStyled>
            <PanelDesktopStyled>
              <SummaryInfo />
            </PanelDesktopStyled>
          </>
        )}
      </PanelStyled>
    </>
  );
};
