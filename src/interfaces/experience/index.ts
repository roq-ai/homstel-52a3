import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ExperienceInterface {
  id?: string;
  title: string;
  description?: string;
  location: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface ExperienceGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  location?: string;
  user_id?: string;
}
