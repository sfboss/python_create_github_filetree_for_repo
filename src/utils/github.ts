import { Octokit } from '@octokit/rest';
import { TreeNode, Repository } from '../types';

const octokit = new Octokit({
  auth: import.meta.env.VITE_GITHUB_TOKEN,
});

export const parseGitHubUrl = (url: string): Repository | null => {
  const regex = /github\.com\/([^\/]+)\/([^\/]+)/;
  const match = url.match(regex);
  
  if (!match) return null;
  
  return {
    owner: match[1],
    repo: match[2].replace(/\.git$/, ''),
    branch: 'main'
  };
};

export const fetchRepoTree = async (
  owner: string,
  repo: string,
  branch: string = 'main'
): Promise<TreeNode[]> => {
  try {
    // Try to get the tree with the specified branch, fallback to master if needed
    let sha: string;
    
    try {
      const { data: branchData } = await octokit.repos.getBranch({
        owner,
        repo,
        branch,
      });
      sha = branchData.commit.sha;
    } catch (error) {
      // If the specified branch doesn't exist, try 'master' as a common alternative
      if (branch === 'main') {
        const { data: branchData } = await octokit.repos.getBranch({
          owner,
          repo,
          branch: 'master',
        });
        sha = branchData.commit.sha;
      } else {
        throw error;
      }
    }

    const { data: treeData } = await octokit.git.getTree({
      owner,
      repo,
      tree_sha: sha,
      recursive: '1',
    });

    // Build hierarchical tree structure
    const root: TreeNode[] = [];
    const pathMap = new Map<string, TreeNode>();

    treeData.tree.forEach((item) => {
      if (!item.path) return;

      const node: TreeNode = {
        path: item.path,
        name: item.path.split('/').pop() || item.path,
        type: item.type === 'tree' ? 'dir' : 'file',
        size: item.size,
        sha: item.sha,
        children: item.type === 'tree' ? [] : undefined,
      };

      pathMap.set(item.path, node);

      const pathParts = item.path.split('/');
      if (pathParts.length === 1) {
        root.push(node);
      } else {
        const parentPath = pathParts.slice(0, -1).join('/');
        const parent = pathMap.get(parentPath);
        if (parent && parent.children) {
          parent.children.push(node);
        }
      }
    });

    return root.sort((a, b) => {
      if (a.type === b.type) return a.name.localeCompare(b.name);
      return a.type === 'dir' ? -1 : 1;
    });
  } catch (error) {
    console.error('Error fetching repo tree:', error);
    throw error;
  }
};
