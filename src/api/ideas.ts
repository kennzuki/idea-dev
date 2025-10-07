import type { Idea } from '@/types';
import api from '@/lib/axios';


export const fetchIdea = async (ideas: string): Promise<Idea> => {
  const res = await api.get(`/ideas`);
  return res.data;
};

export const createIdea = async (newIdea: {
  title: string;
  summary: string;
  description: string;
  tags: string[];
}): Promise<Idea> => {
  const res = await api.post('/ideas',{... newIdea,createdAt: new Date().toISOString()});
  return res.data
} 

export const deleteIdea = async (ideaId: string): Promise<void> => {
  const res = await api.delete(`/ideas/${ideaId}`);
  return res.data;
};

export const updateIdea = async (
  ideaId: string,
  updatedData: {
    title: string;
    summary: string;
    description: string;
    tags: string[];
  }
): Promise<Idea> => {
  const res = await api.put(`/ideas/${ideaId}`, updatedData);
  return res.data;
};