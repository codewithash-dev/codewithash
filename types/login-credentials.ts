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
  
  export interface Database {
    public: {
      Tables: {
        credentials: {
          Row: Credential;
          Insert: Omit<Credential, 'id' | 'created_at' | 'updated_at'>;
          Update: Partial<Omit<Credential, 'id' | 'user_id' | 'created_at' | 'updated_at'>>;
        };
        profiles: {
          Row: {
            id: string;
            email: string;
            full_name: string;
            avatar_url?: string;
            created_at: string;
          };
          Insert: Omit<{
            id: string;
            email: string;
            full_name: string;
            avatar_url?: string;
            created_at: string;
          }, 'created_at'>;
          Update: Partial<Omit<{
            id: string;
            email: string;
            full_name: string;
            avatar_url?: string;
            created_at: string;
          }, 'id' | 'created_at'>>;
        };
      };
    };
  }