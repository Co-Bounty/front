import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

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

export type ExtensionIconMappings = {
  [key: string]: IconDefinition;
  folder: IconDefinition;
  default: IconDefinition;
  txt: IconDefinition;
  jpg: IconDefinition;
  png: IconDefinition;
  jpeg: IconDefinition;
  js: IconDefinition;
  py: IconDefinition;
  ts: IconDefinition;
  tsx: IconDefinition;
  jsx: IconDefinition;
  css: IconDefinition;
  scss: IconDefinition;
  html: IconDefinition;
  json: IconDefinition;
  md: IconDefinition;
  svg: IconDefinition;
};
