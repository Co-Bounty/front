import { TagProps } from '@components/common/Tag/Tag';

export type FileSystemItem = {
  name: string;
  type: 'file' | 'folder';
  path: string;
  children?: FileSystemItem[];
};

export interface FileDirectoryType {
  id?: number;
  postId?: number;
  file: FileSystemItem;
}

export interface highlightType {
  highlightStart?: number;
  highlightEnd?: number;
}

export interface UserInfoType {
  userName: string;
  githubLink: string;
  profileImage: string;
  row?: boolean;
}

export interface PostInfoType {
  id?: number;
  category?: string;
  userInfo: UserInfoType;
  githubLink?: string;
  title: string;
  tags?: TagProps[];
  contents: string;
}

export interface ReviewInfoType {
  contents: string;
  tags?: TagProps[];
  highlight?: highlightType;
}

export interface CodeViewerType {
  code: string;
  language: string;
}

export interface ReviewCodeType {
  id?: number;
  reviews?: ReviewInfoType[];
}
