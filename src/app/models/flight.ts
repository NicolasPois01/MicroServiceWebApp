
import { seat } from './seat';
import { date } from './date';
import { company } from './company';
export interface flight {
  identifier: string;
  seat: seat;
  date: date;
  company: company;
}
