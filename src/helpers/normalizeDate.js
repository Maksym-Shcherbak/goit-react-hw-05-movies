import { format } from 'date-fns';

export const normalizeDate = date => {
  return format(new Date(date), 'PPP');
};
