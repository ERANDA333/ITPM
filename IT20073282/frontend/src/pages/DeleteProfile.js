import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function DeleteProfile() {
  const location = useLocation();
  const navigate = useNavigate();
  const [setIsDeleted] = useState(false);
  const userId = location.state.id;


  const handleDelete = () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this item?');

    if (confirmDelete) {
      fetch(`http://localhost:5000/mentor/delete/${userId}`, {
        method: 'DELETE',
      })
        .then(response => {
          if (response.ok) {
            console.log('success');
            setIsDeleted(true);
            navigate('/');
          } else {
            throw new Error('Delete request failed');
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <br />
      <br />
      <h1 className="warn">Caution..!</h1>
      <br />
      <br />
      <h3> your profile will be remove</h3>
      <br />
      <Button variant="contained" size="large" color="error" onClick={handleDelete}>
        Confirm
      </Button>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
