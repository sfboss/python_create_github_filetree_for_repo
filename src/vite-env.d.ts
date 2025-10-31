/// <reference types="vite/client" />

interface ImportMetaEnv {
  // WARNING: GitHub tokens in VITE_ variables are exposed in the client bundle.
  // For production use, implement server-side API calls to protect tokens.
  // This is safe for personal use with public repositories.
  readonly VITE_GITHUB_TOKEN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
