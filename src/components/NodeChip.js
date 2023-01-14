import React from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';

export default function NodeChip({ text }) {
  return (
    <div className="button darker_gray_button">
      <PlusCircleOutlined className="tree_node_icon" /> {text}
    </div>
  )
}