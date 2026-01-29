// types/index.ts

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

export type Database = {
  public: {
    Tables: {
      credentials: {
        Row: {
          id: string;
          title: string;
          username: string;
          password: string;
          category: string;
          url?: string | null;
          notes?: string | null;
          created_at: string;
        };
        Insert: {
          title: string;
          username: string;
          password: string;
          category: string;
          url?: string | null;
          notes?: string | null;
        };
        Update: Partial<{
          title: string;
          username: string;
          password: string;
          category: string;
          url: string | null;
          notes: string | null;
        }>;
      };
    };
  };
};
