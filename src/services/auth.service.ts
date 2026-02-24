import { supabase } from '@/lib/supabase';

export type SignUpData = {
  email: string;
  password: string;
  fullName: string;
};

export type AuthResponse = {
  success: boolean;
  error?: string;
  needsEmailVerification?: boolean;
};

export async function signUp({ email, password, fullName }: SignUpData): Promise<AuthResponse> {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
      },
    },
  });

  if (error) {
    return { success: false, error: error.message };
  }

  // Check if email confirmation is required
  if (data.user && !data.session) {
    return { success: true, needsEmailVerification: true };
  }

  return { success: true, needsEmailVerification: false };
}

export async function signIn(email: string, password: string): Promise<AuthResponse> {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true };
}

export async function signOut(): Promise<AuthResponse> {
  const { error } = await supabase.auth.signOut();

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true };
}

export async function resendVerificationEmail(email: string): Promise<AuthResponse> {
  const { error } = await supabase.auth.resend({
    type: 'signup',
    email,
  });

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true };
}
