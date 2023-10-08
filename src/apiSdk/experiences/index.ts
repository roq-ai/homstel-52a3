import queryString from 'query-string';
import { ExperienceInterface, ExperienceGetQueryInterface } from 'interfaces/experience';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getExperiences = async (
  query?: ExperienceGetQueryInterface,
): Promise<PaginatedInterface<ExperienceInterface>> => {
  return fetcher('/api/experiences', {}, query);
};

export const createExperience = async (experience: ExperienceInterface) => {
  return fetcher('/api/experiences', { method: 'POST', body: JSON.stringify(experience) });
};

export const updateExperienceById = async (id: string, experience: ExperienceInterface) => {
  return fetcher(`/api/experiences/${id}`, { method: 'PUT', body: JSON.stringify(experience) });
};

export const getExperienceById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/experiences/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteExperienceById = async (id: string) => {
  return fetcher(`/api/experiences/${id}`, { method: 'DELETE' });
};
