/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface StartupMilestone {
  title: string;
  limit: string;
  count: string;
  content: string;
  category: 'hpc' | 'team' | 'data' | 'impact' | 'market';
  icon: string;
}
