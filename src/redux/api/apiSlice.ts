import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://barber-shop-backend.vercel.app/api/v1' ,
  
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as any).userAccessToken.token
    if (token) {
      headers.set('authorization', `${token}`)
    }
    return headers
  },
  
}),
  tagTypes: ['admins','barbers', 'services', 'users', 'timeslot', 'appointments'],
  endpoints: () => ({}),
});


