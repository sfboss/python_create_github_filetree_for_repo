import React, { useState } from 'react';
import { TreeNode as TreeNodeType } from '../types';
import { getFileIcon, getFolderIcon } from '../utils/icons';
import { ChevronRight, ChevronDown } from 'lucide-react';

interface TreeNodeProps {
  node: TreeNodeType;
  level: number;
  searchTerm: string;
}

const TreeNode: React.FC<TreeNodeProps> = ({ node, level, searchTerm }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isDirectory = node.type === 'dir';
  const Icon = isDirectory ? getFolderIcon(isExpanded) : getFileIcon(node.name);

  const toggleExpand = () => {
    if (isDirectory) {
      setIsExpanded(!isExpanded);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleExpand();
    }
  };

  // Filter children based on search term
  const filteredChildren = node.children?.filter(child => 
    child.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (child.children && child.children.some(c => 
      c.name.toLowerCase().includes(searchTerm.toLowerCase())
    ))
  );

  // If searching and no matches in this node or children, don't render
  if (searchTerm && !node.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
      (!filteredChildren || filteredChildren.length === 0)) {
    return null;
  }

  const formatSize = (bytes?: number) => {
    if (!bytes) return '';
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <div className="tree-node" role="treeitem" aria-expanded={isDirectory ? isExpanded : undefined}>
      <div
        className="tree-node-content"
        style={{ paddingLeft: `${level * 20}px` }}
        onClick={toggleExpand}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-label={`${node.type === 'dir' ? 'Folder' : 'File'}: ${node.name}`}
      >
        {isDirectory && (
          <span className="tree-node-chevron">
            {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </span>
        )}
        {!isDirectory && <span className="tree-node-spacer" />}
        <Icon size={16} className="tree-node-icon" />
        <span className="tree-node-name">{node.name}</span>
        {!isDirectory && node.size !== undefined && (
          <span className="tree-node-size">{formatSize(node.size)}</span>
        )}
      </div>
      {isDirectory && isExpanded && filteredChildren && filteredChildren.length > 0 && (
        <div className="tree-node-children" role="group">
          {filteredChildren.map((child) => (
            <TreeNode
              key={child.path}
              node={child}
              level={level + 1}
              searchTerm={searchTerm}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNode;
