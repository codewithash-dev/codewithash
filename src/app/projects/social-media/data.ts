export interface User {
  id: string;
  username: string;
  displayName: string;
  avatar: string;
  bio?: string;
}

export interface Post {
  id: string;
  author: User;
  image: string;
  caption: string;
  likes: number;
  comments: number;
  timestamp: string;
}

const avatars = [
  "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=jamie",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=sam",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=riley",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=casey",
];

const placeholderImages = [
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=600&fit=crop",
];

export const MOCK_USERS: User[] = [
  { id: "1", username: "alex_dev", displayName: "Alex", avatar: avatars[0], bio: "Building things that matter." },
  { id: "2", username: "jamie_codes", displayName: "Jamie", avatar: avatars[1], bio: "Frontend enthusiast." },
  { id: "3", username: "sam_ui", displayName: "Sam", avatar: avatars[2], bio: "Design & code." },
  { id: "4", username: "riley_js", displayName: "Riley", avatar: avatars[3], bio: "Full stack explorer." },
  { id: "5", username: "casey_react", displayName: "Casey", avatar: avatars[4], bio: "React fan." },
];

export const MOCK_POSTS: Post[] = [
  {
    id: "p1",
    author: MOCK_USERS[0],
    image: placeholderImages[0],
    caption: "Sunset from the roof. Best part of remote work.",
    likes: 42,
    comments: 5,
    timestamp: "2h",
  },
  {
    id: "p2",
    author: MOCK_USERS[1],
    image: placeholderImages[1],
    caption: "New setup. Productivity level: 100.",
    likes: 128,
    comments: 12,
    timestamp: "5h",
  },
  {
    id: "p3",
    author: MOCK_USERS[2],
    image: placeholderImages[2],
    caption: "Coffee and code. What else?",
    likes: 67,
    comments: 3,
    timestamp: "1d",
  },
  {
    id: "p4",
    author: MOCK_USERS[3],
    image: placeholderImages[3],
    caption: "Weekend project shipped. Link in bio.",
    likes: 89,
    comments: 8,
    timestamp: "1d",
  },
  {
    id: "p5",
    author: MOCK_USERS[4],
    image: placeholderImages[4],
    caption: "Learning something new every day.",
    likes: 34,
    comments: 2,
    timestamp: "2d",
  },
  {
    id: "p6",
    author: MOCK_USERS[0],
    image: placeholderImages[5],
    caption: "Throwback to the last hackathon. Great team.",
    likes: 156,
    comments: 24,
    timestamp: "3d",
  },
];

export interface Comment {
  id: string;
  author: User;
  text: string;
  timestamp: string;
}

export const MOCK_COMMENTS: Record<string, Comment[]> = {
  p1: [
    { id: "c1", author: MOCK_USERS[1], text: "Love this view!", timestamp: "1h" },
    { id: "c2", author: MOCK_USERS[2], text: "Remote life goals.", timestamp: "30m" },
  ],
  p2: [
    { id: "c3", author: MOCK_USERS[0], text: "Clean setup.", timestamp: "4h" },
  ],
  p3: [],
  p4: [
    { id: "c4", author: MOCK_USERS[4], text: "Congrats on shipping!", timestamp: "20h" },
  ],
  p5: [],
  p6: [
    { id: "c5", author: MOCK_USERS[1], text: "Looks fun!", timestamp: "2d" },
    { id: "c6", author: MOCK_USERS[3], text: "Same team next time?", timestamp: "2d" },
  ],
};

export const CURRENT_USER = MOCK_USERS[0];
