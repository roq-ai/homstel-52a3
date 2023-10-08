import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface HostelInterface {
  id?: string;
  name: string;
  address: string;
  city: string;
  country: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface HostelGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  address?: string;
  city?: string;
  country?: string;
  user_id?: string;
}
