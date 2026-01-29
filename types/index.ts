export interface Credential {
  id: string;
  title: string;
  username: string;
  password: string;
  category: string;
  url?: string | null;
  notes?: string | null;
  created_at: string;
}
