import { supabase } from '@/lib/supabase';

export type Registration = {
  id: string;
  created_at: string;
  user_id: string;
  event_id: string;
};

export type RegistrationResponse = {
  success: boolean;
  data?: Registration | Registration[];
  error?: string;
};

export async function registerForEvent(eventId: string): Promise<RegistrationResponse> {
  const { data: userData, error: userError } = await supabase.auth.getUser();

  if (userError || !userData.user) {
    return { success: false, error: 'User not authenticated' };
  }

  const { data, error } = await supabase
    .from('registrations')
    .insert({
      event_id: eventId,
      user_id: userData.user.id,
    })
    .select()
    .single();

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true, data };
}

export async function unregisterFromEvent(eventId: string): Promise<RegistrationResponse> {
  const { data: userData, error: userError } = await supabase.auth.getUser();

  if (userError || !userData.user) {
    return { success: false, error: 'User not authenticated' };
  }

  const { error } = await supabase
    .from('registrations')
    .delete()
    .eq('event_id', eventId)
    .eq('user_id', userData.user.id);

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true };
}