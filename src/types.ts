/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface RepoFile {
  path: string;
  name: string;
  language: 'markdown' | 'yaml' | 'toml' | 'bash' | 'json' | 'ruby';
  content: string;
  description: string;
}

export interface DirectoryItem {
  name: string;
  type: 'file' | 'directory';
  path: string;
  children?: DirectoryItem[];
}

export interface StartupMilestone {
  title: string;
  limit: string;
  count: string;
  content: string;
  category: 'hpc' | 'team' | 'data' | 'impact' | 'market';
  icon: string;
}
