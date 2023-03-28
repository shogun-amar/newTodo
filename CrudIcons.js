import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';

const CrudIcons = ({ handleCheck, handleEdit, handleDelete, index, isCompleted }) => {
  return (
    <>
      <input type="checkbox" checked={isCompleted} onChange={(event) => handleCheck(index, event)} />
      <FaEdit onClick={() => handleEdit(index)} />
      <FaTrash onClick={() => handleDelete(index)} />
    </>
  );
};

export default CrudIcons;
