export const mockRepoTree = [
  {
    path: '.github',
    name: '.github',
    type: 'dir' as const,
    children: [
      {
        path: '.github/workflows',
        name: 'workflows',
        type: 'dir' as const,
        children: [
          {
            path: '.github/workflows/ci.yml',
            name: 'ci.yml',
            type: 'file' as const,
            size: 1245,
          },
          {
            path: '.github/workflows/deploy.yml',
            name: 'deploy.yml',
            type: 'file' as const,
            size: 892,
          },
        ],
      },
    ],
  },
  {
    path: 'src',
    name: 'src',
    type: 'dir' as const,
    children: [
      {
        path: 'src/components',
        name: 'components',
        type: 'dir' as const,
        children: [
          {
            path: 'src/components/Button.tsx',
            name: 'Button.tsx',
            type: 'file' as const,
            size: 2048,
          },
          {
            path: 'src/components/Input.tsx',
            name: 'Input.tsx',
            type: 'file' as const,
            size: 1567,
          },
        ],
      },
      {
        path: 'src/utils',
        name: 'utils',
        type: 'dir' as const,
        children: [
          {
            path: 'src/utils/helpers.ts',
            name: 'helpers.ts',
            type: 'file' as const,
            size: 3421,
          },
        ],
      },
      {
        path: 'src/App.tsx',
        name: 'App.tsx',
        type: 'file' as const,
        size: 5632,
      },
      {
        path: 'src/main.tsx',
        name: 'main.tsx',
        type: 'file' as const,
        size: 432,
      },
    ],
  },
  {
    path: 'package.json',
    name: 'package.json',
    type: 'file' as const,
    size: 1890,
  },
  {
    path: 'README.md',
    name: 'README.md',
    type: 'file' as const,
    size: 4521,
  },
  {
    path: 'tsconfig.json',
    name: 'tsconfig.json',
    type: 'file' as const,
    size: 678,
  },
  {
    path: 'vite.config.ts',
    name: 'vite.config.ts',
    type: 'file' as const,
    size: 234,
  },
];
