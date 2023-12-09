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
