import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xhmqflylwnzwfrlkjxad.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhobXFmbHlsd256d2ZybGtqeGFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA5NDE5MjgsImV4cCI6MjA4NjUxNzkyOH0.gOEd1RQWchUJht9CDPbgrXdWgADY6FfI7k0e0tS9MNI'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
