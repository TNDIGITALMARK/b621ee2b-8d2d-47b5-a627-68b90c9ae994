import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://hfndfmtxhqvubnfiwzlz.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmbmRmbXR4aHF2dWJuZml3emx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA2Mjk4MDgsImV4cCI6MjA3NjIwNTgwOH0.n0NK_Ov03-UbDQYr5mio3ggYa5XTN-XI1kB6X81N4nA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  global: {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsImF1ZCI6ImF1dGhlbnRpY2F0ZWQiLCJyb2xlIjoiYW5vbiIsInRlbmFudF9pZCI6IkY3b2lBbmJna0ZPNEtheGZ0ZDZFSTZhRDNXWDIiLCJwcm9qZWN0X2lkIjoiYjYyMWVlMmItOGQyZC00N2I1LWE2MjctNjhiOTBjOWFlOTk0IiwianRpIjoiNDdjNTliZmQtZGU0NC00YzQ1LWJlNTUtNmYyY2IzY2U0NDU4IiwiaWF0IjoxNzYyNTUyNTIzLCJleHAiOjE3NjI1NTUyMjN9.4WOGh_jq_2cMd4ZmI8roI0A25YeTy1OaZZmRSVpwSeA`
    }
  }
});

// Database types for TypeScript
export interface UserProfile {
  id: string;
  tenantid: string;
  projectid: string;
  user_id: string;
  display_name: string | null;
  bio: string | null;
  avatar_url: string | null;
  date_of_birth: string | null;
  height_cm: number | null;
  weight_kg: number | null;
  fitness_goal: 'lose_weight' | 'maintain' | 'gain_muscle' | 'general_wellness' | null;
  created_at: string;
  updated_at: string;
}

export interface CycleData {
  id: string;
  tenantid: string;
  projectid: string;
  user_id: string;
  cycle_start_date: string;
  cycle_length_days: number;
  period_length_days: number;
  current_phase: 'menstrual' | 'follicular' | 'ovulatory' | 'luteal' | null;
  average_cycle_length: number | null;
  cycle_regularity_score: number | null;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface MoodLog {
  id: string;
  tenantid: string;
  projectid: string;
  user_id: string;
  log_date: string;
  mood: 'great' | 'good' | 'okay' | 'low' | 'rough' | null;
  energy_level: number | null;
  stress_level: number | null;
  sleep_quality: number | null;
  symptoms: string[] | null;
  notes: string | null;
  created_at: string;
}

export interface NutritionGoal {
  id: string;
  tenantid: string;
  projectid: string;
  user_id: string;
  week_start_date: string;
  weekly_calorie_target: number;
  weekly_calories_consumed: number;
  protein_target_g: number | null;
  carbs_target_g: number | null;
  fat_target_g: number | null;
  dietary_preference: 'omnivore' | 'vegetarian' | 'vegan' | 'pescatarian' | 'keto' | 'paleo' | null;
  created_at: string;
  updated_at: string;
}

export interface FoodLog {
  id: string;
  tenantid: string;
  projectid: string;
  user_id: string;
  log_date: string;
  meal_type: 'breakfast' | 'lunch' | 'dinner' | 'snack' | null;
  food_name: string;
  calories: number | null;
  protein_g: number | null;
  carbs_g: number | null;
  fat_g: number | null;
  fiber_g: number | null;
  rooted_score: number | null;
  scanned_image_url: string | null;
  notes: string | null;
  created_at: string;
}

export interface WorkoutPlan {
  id: string;
  tenantid: string;
  projectid: string;
  user_id: string;
  plan_name: string;
  recommended_phase: 'menstrual' | 'follicular' | 'ovulatory' | 'luteal' | 'any' | null;
  intensity: 'low' | 'moderate' | 'high' | null;
  duration_minutes: number | null;
  workout_type: 'strength' | 'cardio' | 'yoga' | 'hiit' | 'pilates' | 'walking' | 'stretching' | null;
  exercises: any;
  created_at: string;
  updated_at: string;
}

export interface WorkoutLog {
  id: string;
  tenantid: string;
  projectid: string;
  user_id: string;
  workout_plan_id: string | null;
  completed_date: string;
  duration_minutes: number | null;
  exercises_completed: any;
  energy_before: number | null;
  energy_after: number | null;
  notes: string | null;
  created_at: string;
}

export interface CommunityPost {
  id: string;
  tenantid: string;
  projectid: string;
  user_id: string;
  content: string;
  post_type: 'reflection' | 'meal' | 'progress' | 'question' | 'affirmation' | null;
  image_url: string | null;
  heart_count: number;
  created_at: string;
  updated_at: string;
}

export interface CalendarEvent {
  id: string;
  tenantid: string;
  projectid: string;
  creator_id: string;
  title: string;
  description: string | null;
  event_date: string;
  event_time: string | null;
  shared_with_users: string[] | null;
  event_type: 'workout' | 'meal_prep' | 'wellness' | 'social' | 'other' | null;
  created_at: string;
  updated_at: string;
}

export interface AIChatMessage {
  id: string;
  tenantid: string;
  projectid: string;
  user_id: string;
  message: string;
  role: 'user' | 'assistant';
  context: any;
  created_at: string;
}
