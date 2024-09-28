import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return <h1>User Details for User ID: {id}</h1>;
}

export default UserDetail;