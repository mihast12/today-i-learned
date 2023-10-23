import { createClient } from "@supabase/supabase-js";
// not very secure but not doing this in production
const supabaseUrl = "https://trnjxdtlixioksdkasql.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRybmp4ZHRsaXhpb2tzZGthc3FsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk3ODIxMDAsImV4cCI6MjAwNTM1ODEwMH0.OULuMrZYjDsxb11H3JXJT4WQu9IE_K564u4F0tI9QTU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
