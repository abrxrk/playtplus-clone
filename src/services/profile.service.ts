import { supabase } from '@/lib/supabase';

export type EventWithRegistration = {
  registration_id: string;
  registered_at: string;
  event_id: string;
  title: string;
  description: string;
  location: string;
  event_date: string;
};

export type ProfileRegistrationsResponse = {
  success: boolean;
  data?: EventWithRegistration[];
  error?: string;
};

export async function getMyRegistrations(): Promise<ProfileRegistrationsResponse> {
  const { data: userData, error: userError } = await supabase.auth.getUser();

  if (userError || !userData.user) {
    return { success: false, error: 'User not authenticated' };
  }

  const { data, error } = await supabase
    .from('registrations')
    .select(`
      id,
      created_at,
      event_id,
      events (
        title,
        description,
        location,
        event_date
      )
    `)
    .eq('user_id', userData.user.id)
    .order('created_at', { ascending: false });

  if (error) {
    return { success: false, error: error.message };
  }

  const formattedData: EventWithRegistration[] = data.map((item: any) => ({
    registration_id: item.id,
    registered_at: item.created_at,
    event_id: item.event_id,
    title: item.events?.title || '',
    description: item.events?.description || '',
    location: item.events?.location || '',
    event_date: item.events?.event_date || '',
  }));

  return { success: true, data: formattedData };
}
