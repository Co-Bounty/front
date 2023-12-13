import { TagProps } from '@components/common/Tag/Tag';

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

export interface PostInfoType {
  postId: number;
  userInfo: UserInfoType;
  title: string;
  tags?: TagProps[];
  contents: string;
}
