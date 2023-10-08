import queryString from 'query-string';
import { AdvisorInterface, AdvisorGetQueryInterface } from 'interfaces/advisor';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getAdvisors = async (query?: AdvisorGetQueryInterface): Promise<PaginatedInterface<AdvisorInterface>> => {
  return fetcher('/api/advisors', {}, query);
};

export const createAdvisor = async (advisor: AdvisorInterface) => {
  return fetcher('/api/advisors', { method: 'POST', body: JSON.stringify(advisor) });
};

export const updateAdvisorById = async (id: string, advisor: AdvisorInterface) => {
  return fetcher(`/api/advisors/${id}`, { method: 'PUT', body: JSON.stringify(advisor) });
};

export const getAdvisorById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/advisors/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteAdvisorById = async (id: string) => {
  return fetcher(`/api/advisors/${id}`, { method: 'DELETE' });
};
