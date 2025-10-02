import type { Idea } from '@/types';
import api from '@/lib/axios';


export const fetchIdea = async (ideas: string): Promise<Idea> => {
  const res = await api.get(`/ideas`);
  return res.data;
};