export interface Credential {
  id: string;
  user_id: string;
  title: string;
  username: string;
  password: string;
  url?: string;
  notes?: string;
  category: 'social' | 'banking' | 'email' | 'work' | 'other';
  created_at: string;
  updated_at: string;
}
