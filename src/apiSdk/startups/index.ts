import queryString from 'query-string';
import { StartupInterface, StartupGetQueryInterface } from 'interfaces/startup';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getStartups = async (query?: StartupGetQueryInterface): Promise<PaginatedInterface<StartupInterface>> => {
  return fetcher('/api/startups', {}, query);
};

export const createStartup = async (startup: StartupInterface) => {
  return fetcher('/api/startups', { method: 'POST', body: JSON.stringify(startup) });
};

export const updateStartupById = async (id: string, startup: StartupInterface) => {
  return fetcher(`/api/startups/${id}`, { method: 'PUT', body: JSON.stringify(startup) });
};

export const getStartupById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/startups/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteStartupById = async (id: string) => {
  return fetcher(`/api/startups/${id}`, { method: 'DELETE' });
};
