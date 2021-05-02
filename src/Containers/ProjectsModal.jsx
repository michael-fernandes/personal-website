import React from 'react';
import { Modal, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import '../Styles/Modal.css';
import {
  CloseOutlined
} from '@ant-design/icons';

import { mockupsVisibility, showModal, hideModal } from '../store';


export default function ProjectsModal() {
  const isModalVisible = useSelector(mockupsVisibility);
  const dispatch = useDispatch();

  if(isModalVisible) {
    return (
      <div className="overlay-container">
        <div onClick={() => dispatch(hideModal())} className="overlay-close"><CloseOutlined /></div>
        <div className="overlay-content">
            <div className="overlay-description">
              <h1>Proof of concept mockups</h1>
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
      </div>
    )
  }

  return <></>;
}