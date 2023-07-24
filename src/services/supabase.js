import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://hootiwusegdfyvplculm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhvb3Rpd3VzZWdkZnl2cGxjdWxtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAxMjEwMDIsImV4cCI6MjAwNTY5NzAwMn0.QsS9OR3keIriid2G2SmbFqOqmJwgzzt1CfvS3eE7KZU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
