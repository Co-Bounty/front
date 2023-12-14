import api from '@api/index';
import { FileDirectoryType, ReviewCodeType } from '@utils/types/common.type';

export const codeApi = {
  getCode: async (postId: string): Promise<FileDirectoryType> => {
    const { data } = await api.get(`/posts/${postId}/code`);

    return data.data;
  },

  getCodeReview: async (postId: string): Promise<ReviewCodeType> => {
    const { data } = await api.get(`/review/${postId}/`);

    return data;
  },

  getGitHubCode: async (url: string): Promise<string> => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.text();

      return data;
    } catch (error) {
      console.error('Error fetching the data:', error);
      return 'null';
    }
  },
};
