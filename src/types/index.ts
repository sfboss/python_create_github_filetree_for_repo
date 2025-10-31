export interface TreeNode {
  path: string;
  name: string;
  type: 'file' | 'dir';
  children?: TreeNode[];
  size?: number;
  sha?: string;
}

export interface Repository {
  owner: string;
  repo: string;
  branch?: string;
}

export interface Theme {
  name: string;
  colors: {
    background: string;
    text: string;
    hover: string;
    border: string;
    primary: string;
    secondary: string;
  };
}
