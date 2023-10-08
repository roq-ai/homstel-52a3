import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AdvisorInterface {
  id?: string;
  name: string;
  expertise: string;
  rating: number;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface AdvisorGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  expertise?: string;
  user_id?: string;
}
