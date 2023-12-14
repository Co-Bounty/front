export type FileSystemItem = {
  fileName: string;
  type: 'file' | 'folder';
  url: string | null;
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
  repositoryUrl?: string;
  title: string;
  tags?: string[];
  contents: string;
}

export interface ReviewInfoType {
  filePath?: string;
  contents: string;
  tags?: string[];
  highlight?: highlightType;
}

export interface CodeViewerType {
  code: string;
  language: string;
}

export interface ReviewCodeType {
  reviews: ReviewInfoType[];
}

export interface ModalType {
  open?: boolean;
  children?: React.ReactNode;
}

export interface PostReviewType {
  id?: string;
  userId: number;
  postId: string;
  filePath: string;
  contents: string;
  highlight: highlightType;
  tags: string[];
}
