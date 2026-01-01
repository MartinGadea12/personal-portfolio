/// <reference types="vite/client" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare module "*.css?url" {
  const content: string;
  export default content;
}

