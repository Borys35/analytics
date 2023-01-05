export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      analytics: {
        Row: {
          created_at: string | null
          user_id: string | null
          api_key: string | null
          events: Json[] | null
          name: string | null
          id: string
        }
        Insert: {
          created_at?: string | null
          user_id?: string | null
          api_key?: string | null
          events?: Json[] | null
          name?: string | null
          id?: string
        }
        Update: {
          created_at?: string | null
          user_id?: string | null
          api_key?: string | null
          events?: Json[] | null
          name?: string | null
          id?: string
        }
      }
      events: {
        Row: {
          id: number
          created_at: string | null
          event_type: string | null
          analytics_id: string
        }
        Insert: {
          id?: number
          created_at?: string | null
          event_type?: string | null
          analytics_id: string
        }
        Update: {
          id?: number
          created_at?: string | null
          event_type?: string | null
          analytics_id?: string
        }
      }
      profiles: {
        Row: {
          id: string
          updated_at: string | null
          username: string | null
          full_name: string | null
          avatar_url: string | null
          website: string | null
        }
        Insert: {
          id: string
          updated_at?: string | null
          username?: string | null
          full_name?: string | null
          avatar_url?: string | null
          website?: string | null
        }
        Update: {
          id?: string
          updated_at?: string | null
          username?: string | null
          full_name?: string | null
          avatar_url?: string | null
          website?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
