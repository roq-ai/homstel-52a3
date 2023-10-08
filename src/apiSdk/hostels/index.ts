import queryString from 'query-string';
import { HostelInterface, HostelGetQueryInterface } from 'interfaces/hostel';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getHostels = async (query?: HostelGetQueryInterface): Promise<PaginatedInterface<HostelInterface>> => {
  return fetcher('/api/hostels', {}, query);
};

export const createHostel = async (hostel: HostelInterface) => {
  return fetcher('/api/hostels', { method: 'POST', body: JSON.stringify(hostel) });
};

export const updateHostelById = async (id: string, hostel: HostelInterface) => {
  return fetcher(`/api/hostels/${id}`, { method: 'PUT', body: JSON.stringify(hostel) });
};

export const getHostelById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/hostels/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteHostelById = async (id: string) => {
  return fetcher(`/api/hostels/${id}`, { method: 'DELETE' });
};
