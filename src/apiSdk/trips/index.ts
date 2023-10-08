import queryString from 'query-string';
import { TripInterface, TripGetQueryInterface } from 'interfaces/trip';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getTrips = async (query?: TripGetQueryInterface): Promise<PaginatedInterface<TripInterface>> => {
  return fetcher('/api/trips', {}, query);
};

export const createTrip = async (trip: TripInterface) => {
  return fetcher('/api/trips', { method: 'POST', body: JSON.stringify(trip) });
};

export const updateTripById = async (id: string, trip: TripInterface) => {
  return fetcher(`/api/trips/${id}`, { method: 'PUT', body: JSON.stringify(trip) });
};

export const getTripById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/trips/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteTripById = async (id: string) => {
  return fetcher(`/api/trips/${id}`, { method: 'DELETE' });
};
