export type FileSystemItem = {
  name: string;
  type: 'file' | 'folder';
  path?: string;
  children?: FileSystemItem[];
};

export interface highlightType {
  highlightStart?: number;
  highlightEnd?: number;
}

export interface UserInfoType {
  userName: string;
  githubLink: string;
  profileImage: string;
}
