import {
  File,
  FileCode,
  FileJson,
  FileText,
  Image,
  Settings,
  Package,
  Folder,
  FolderOpen,
} from 'lucide-react';

export const getFileIcon = (fileName: string) => {
  const ext = fileName.split('.').pop()?.toLowerCase();
  
  const iconMap: Record<string, typeof File> = {
    // Code files
    js: FileCode,
    jsx: FileCode,
    ts: FileCode,
    tsx: FileCode,
    py: FileCode,
    java: FileCode,
    cpp: FileCode,
    c: FileCode,
    cs: FileCode,
    go: FileCode,
    rs: FileCode,
    php: FileCode,
    rb: FileCode,
    swift: FileCode,
    kt: FileCode,
    
    // Config files
    json: FileJson,
    yml: Settings,
    yaml: Settings,
    toml: Settings,
    xml: Settings,
    ini: Settings,
    env: Settings,
    
    // Text/Documentation
    md: FileText,
    txt: FileText,
    rst: FileText,
    
    // Images
    png: Image,
    jpg: Image,
    jpeg: Image,
    gif: Image,
    svg: Image,
    ico: Image,
    webp: Image,
    
    // Package files
    'package.json': Package,
    'package-lock.json': Package,
    'yarn.lock': Package,
    'Cargo.toml': Package,
    'go.mod': Package,
  };

  // Check full filename first
  if (iconMap[fileName]) {
    return iconMap[fileName];
  }
  
  // Then check extension
  if (ext && iconMap[ext]) {
    return iconMap[ext];
  }
  
  return File;
};

export const getFolderIcon = (isOpen: boolean) => {
  return isOpen ? FolderOpen : Folder;
};
