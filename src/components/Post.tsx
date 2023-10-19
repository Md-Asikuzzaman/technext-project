import React, { useEffect, useState } from 'react';

const Post = () => {
  interface UserType {
    id: number;
    name: string;
    email: string;
  }

  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');

      const users = await res.json();
      setUsers(users);
      return () => getUsers();
    };

    getUsers();
  }, []);

  return <div>Post</div>;
};

export default Post;
