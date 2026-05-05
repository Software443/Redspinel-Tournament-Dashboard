import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://txmrfainobqaigbwvwmb.supabase.co";
const supabaseAnonKey = "sb_publishable_QKirHlx-suLe0hVDYqjFEg_5vZJkUgf";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);