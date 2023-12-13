import api from '@api/index';
import { FileDirectoryType, ReviewCodeType } from '@utils/types/common.type';

export const codeApi = {
  getCode: async (postId: number): Promise<FileDirectoryType> => {
    const { data } = await api.get(`/code/${postId}/`);

    return data;
  },

  getCodeReview: async (postId: number): Promise<ReviewCodeType> => {
    const { data } = await api.get(`/review/${postId}/`);

    return data;
  },

  getGitHubCode: async (url: string): Promise<string> => {
    const { data } = await api.get(`/filePath`);

    return data.code;
  },
};
