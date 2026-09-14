const supabaseUrl = "https://saquhzbdminisuvxpgnb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhcXVoemJkbWluaXN1dnhwZ25iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkzNTY3OTUsImV4cCI6MjEwNDkzMjc5NX0.2pb_JCC-4TP-XK1hdqp4kOurJo0S_BXo_rY9VXFlXCQ";

const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

export default supabase;
// import { createClient } from "@supabase/supabase-js";

// // Find these in your Supabase Dashboard -> Settings (gear icon) -> API
// const supabaseUrl = "https://saquhzbdminisuvxpgnb.supabase.co/rest/v1/";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhcXVoemJkbWluaXN1dnhwZ25iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkzNTY3OTUsImV4cCI6MjEwNDkzMjc5NX0.2pb_JCC-4TP-XK1hdqp4kOurJo0S_BXo_rY9VXFlXCQ";

// const supabase = createClient(supabaseUrl, supabaseKey);

// export default supabase;
