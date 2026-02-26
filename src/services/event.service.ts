import { supabase } from '@/lib/supabase';

export type Event = {
  id: string;
  created_at: string;
  title: string;
  description: string;
  location: string;
  event_date: string;
  created_by: string;
};

export type CreateEventData = {
  title: string;
  description: string;
  location: string;
  event_date: string;
};

export type EventResponse = {
  success: boolean;
  data?: Event | Event[];
  error?: string;
};

export async function createEvent(eventData: CreateEventData): Promise<EventResponse> {
  const { data: userData, error: userError } = await supabase.auth.getUser();

  if (userError || !userData.user) {
    return { success: false, error: 'User not authenticated' };
  }

  const { data, error } = await supabase
    .from('events')
    .insert({
      ...eventData,
      created_by: userData.user.id,
    })
    .select()
    .single();

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true, data };
}

export async function getAllEvents(): Promise<EventResponse> {
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .order('event_date', { ascending: true });

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true, data };
}
