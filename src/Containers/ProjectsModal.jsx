import React from 'react';
import { Modal, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import '../Styles/Modal.css';

import { mockupsVisibility, showModal, hideModal } from '../store';


export default function ProjectsModal() {
  const isModalVisible = useSelector(mockupsVisibility);
  const dispatch = useDispatch();
  return(

    <Modal visible={isModalVisible} onOk={() => dispatch(hideModal())} bodyStyle={{
      width: '100%',
      // height: '900px',
    }}
    footer={[
      <Button key='cool' onClick={() => dispatch(hideModal())} type="link" color="#6F64F4">
        Close
      </Button>
    ]}
    >
      <div style={{maxWidth: "100%"}}>
        <h1>Proof of concept mockups</h1>
        <p>Automated diagnostic system to help patients self service medical devices.</p>
        <img className="modal-photo" src="https://s3-us-west-2.amazonaws.com/mferns.com/phone-normal.png" alt="mockup of phone alert"/>
        <img className="modal-photo"  src="https://s3-us-west-2.amazonaws.com/mferns.com/phone-alert.png" alt="mockup of phone alert"/>
      </div>
      
    </Modal>
  );
}