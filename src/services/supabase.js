import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://qgtxhwtngrudnokpmlls.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFndHhod3RuZ3J1ZG5va3BtbGxzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA3MzM0NTcsImV4cCI6MjA0NjMwOTQ1N30.emWRiwOAP8qALpswH-FUGiIQBu10pD5oeAvb-Y-jDJs";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
