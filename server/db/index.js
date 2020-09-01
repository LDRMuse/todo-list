import client from './client';

export const addUser = async (newUser) => {
  try {
    return await client
      .db('todos')
      .collection('users')
      .insertOne(newUser);
  } catch (error) {
    throw new Error(error);
  }
};

export const loginUser = async (credentials) => {
  try {
    return await client
      .db('todos')
      .collection('users')
      .find(credentials)
      .toArray();
  } catch (error) {
    throw new Error(error);
  }
};
