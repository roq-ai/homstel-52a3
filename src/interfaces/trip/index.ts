import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface TripInterface {
  id?: string;
  destination: string;
  start_date: any;
  end_date: any;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface TripGetQueryInterface extends GetQueryInterface {
  id?: string;
  destination?: string;
  user_id?: string;
}
