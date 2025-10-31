import React, { useState } from 'react';
import { TreeNode as TreeNodeType } from '../types';
import TreeNode from './TreeNode';
import { Search, X } from 'lucide-react';

interface FileTreeExplorerProps {
  tree: TreeNodeType[];
  repoName: string;
}

const FileTreeExplorer: React.FC<FileTreeExplorerProps> = ({ tree, repoName }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const clearSearch = () => {
    setSearchTerm('');
  };

  const getStats = (nodes: TreeNodeType[]): { files: number; folders: number } => {
    let files = 0;
    let folders = 0;

    const count = (items: TreeNodeType[]) => {
      items.forEach((item) => {
        if (item.type === 'dir') {
          folders++;
          if (item.children) count(item.children);
        } else {
          files++;
        }
      });
    };

    count(nodes);
    return { files, folders };
  };

  const stats = getStats(tree);

  return (
    <div className="file-tree-explorer">
      <div className="file-tree-header">
        <h2 className="file-tree-title">{repoName}</h2>
        <div className="file-tree-stats">
          <span>{stats.folders} folders</span>
          <span className="stat-separator">•</span>
          <span>{stats.files} files</span>
        </div>
      </div>

      <div className="search-container">
        <Search size={18} className="search-icon" />
        <input
          type="text"
          className="search-input"
          placeholder="Search files and folders..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search files and folders"
        />
        {searchTerm && (
          <button
            className="search-clear"
            onClick={clearSearch}
            aria-label="Clear search"
          >
            <X size={18} />
          </button>
        )}
      </div>

      <div className="tree-container" role="tree">
        {tree.length === 0 ? (
          <div className="empty-state">No files found</div>
        ) : (
          tree.map((node) => (
            <TreeNode
              key={node.path}
              node={node}
              level={0}
              searchTerm={searchTerm}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default FileTreeExplorer;
