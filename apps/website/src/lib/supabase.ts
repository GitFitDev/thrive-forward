import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const defaultSupabaseUrl = 'https://yyjgphcofcptlfknzfgu.supabase.co';
const defaultSupabasePublishableKey =
  'sb_publishable_x55sLwlsnwCt5SEgwEbgSw_aih0DA9C';

let browserClient: SupabaseClient | undefined;

export function getSupabaseBrowserClient() {
  const url =
    process.env['NEXT_PUBLIC_SUPABASE_URL']?.trim() || defaultSupabaseUrl;
  const publishableKey =
    process.env['NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY']?.trim() ||
    defaultSupabasePublishableKey;

  browserClient ??= createClient(url, publishableKey, {
    auth: {
      autoRefreshToken: false,
      detectSessionInUrl: false,
      persistSession: false,
    },
  });

  return browserClient;
}
