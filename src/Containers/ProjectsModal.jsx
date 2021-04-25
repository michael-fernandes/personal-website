import React from 'react';
import { Modal } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { mockupsVisibility, showModal, hideModal } from '../store';


export default function ProjectsModal() {
  const isModalVisible = useSelector(mockupsVisibility);
  const dispatch = useDispatch();
  return(
    <Modal visible={isModalVisible} onOk={() => dispatch(hideModal())} bodyStyle={{
      width: '100%',
      height: '900px',
    }}>
      <h2>Proof of concept mockups</h2>
      <p>Automated diagnostic system to help patients self service medical devices.</p>
    </Modal>
  );
}