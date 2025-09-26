import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://sekmxehohlriqinkbgyq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNla214ZWhvaGxyaXFpbmtiZ3lxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg4MjE0OTgsImV4cCI6MjA3NDM5NzQ5OH0.SBhsL62mlQVETf_8p-PKyk1fW0ro_oXLAlVYz5I6vy0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
