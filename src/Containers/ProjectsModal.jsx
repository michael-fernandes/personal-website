import React from 'react';
import { Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import '../Styles/Modal.css';
import {
  CloseOutlined
} from '@ant-design/icons';
import styled, { keyframes} from 'styled-components';

import { mockupsVisibility, hideModal } from '../store';

const fadeIn = keyframes`
 0% {
   opacity: 0;
 }
 
 50% {
   opacity: 0.9;
 }

 90% {
   opacity: 0.95;
 }
 
 100% {
   opacity: 1;
 }
`;

const Overlay = styled.div`
  animation: ${fadeIn} 0.650s;
`;

export default function ProjectsModal() {
  const isModalVisible = useSelector(mockupsVisibility);
  const dispatch = useDispatch();

  if(isModalVisible) {
    return (
      <Overlay className="overlay-container">
        <div onClick={() => dispatch(hideModal())} className="overlay-close"><CloseOutlined /></div>
        <div className="overlay-content">
            <div className="overlay-description">
              <h1 className="section-title">Proof of concept mockups</h1>
              <p>Automated diagnostic system to help patients self service medical devices.</p>
            </div>
            <div className='overlay-photo-content'>
              <img className="modal-photo" src="https://s3-us-west-2.amazonaws.com/mferns.com/phone-normal.png" alt="mockup of phone alert"/>
              <img className="modal-photo"  src="https://s3-us-west-2.amazonaws.com/mferns.com/phone-alert.png" alt="mockup of phone alert"/>
            </div>
        </div>
        <div className="overlay-close-button">
          <Button onClick={() => dispatch(hideModal())} type="link">Close</Button>
        </div>
      </Overlay>
    )
  }

  return <></>;
}