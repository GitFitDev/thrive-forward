import { createClient, type SupabaseClient } from '@supabase/supabase-js';

let browserClient: SupabaseClient | undefined;

export class SupabaseConfigurationError extends Error {
  constructor() {
    super('Supabase environment variables are not configured.');
    this.name = 'SupabaseConfigurationError';
  }
}

export function getSupabaseBrowserClient() {
  const url = process.env['NEXT_PUBLIC_SUPABASE_URL'];
  const publishableKey = process.env['NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY'];

  if (!url || !publishableKey) {
    throw new SupabaseConfigurationError();
  }

  browserClient ??= createClient(url, publishableKey, {
    auth: {
      autoRefreshToken: false,
      detectSessionInUrl: false,
      persistSession: false,
    },
  });

  return browserClient;
}
