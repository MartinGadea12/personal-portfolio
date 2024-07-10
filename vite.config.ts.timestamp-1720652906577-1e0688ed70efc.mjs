// vite.config.ts
import { defineConfig } from "file:///C:/Users/marti/OneDrive/Escritorio/personall-portfolio/node_modules/vite/dist/node/index.js";
import { vitePlugin as remix } from "file:///C:/Users/marti/OneDrive/Escritorio/personall-portfolio/node_modules/@remix-run/dev/dist/index.js";
import tsconfigPaths from "file:///C:/Users/marti/OneDrive/Escritorio/personall-portfolio/node_modules/vite-tsconfig-paths/dist/index.mjs";
import tailwindcss from "file:///C:/Users/marti/OneDrive/Escritorio/personall-portfolio/node_modules/tailwindcss/lib/index.js";
import autoprefixer from "file:///C:/Users/marti/OneDrive/Escritorio/personall-portfolio/node_modules/autoprefixer/lib/autoprefixer.js";
import path from "path";
var __vite_injected_original_dirname = "C:\\Users\\marti\\OneDrive\\Escritorio\\personall-portfolio";
var vite_config_default = defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true
      }
    }),
    tsconfigPaths()
  ],
  build: {
    sourcemap: false
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer
      ]
    }
  },
  server: {
    fs: {
      strict: false
    },
    port: 3e3
    // Asegúrate de que el puerto esté configurado
  },
  resolve: {
    alias: {
      "/assets": path.resolve(__vite_injected_original_dirname, "public/assets")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxtYXJ0aVxcXFxPbmVEcml2ZVxcXFxFc2NyaXRvcmlvXFxcXHBlcnNvbmFsbC1wb3J0Zm9saW9cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXG1hcnRpXFxcXE9uZURyaXZlXFxcXEVzY3JpdG9yaW9cXFxccGVyc29uYWxsLXBvcnRmb2xpb1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvbWFydGkvT25lRHJpdmUvRXNjcml0b3Jpby9wZXJzb25hbGwtcG9ydGZvbGlvL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHsgdml0ZVBsdWdpbiBhcyByZW1peCB9IGZyb20gXCJAcmVtaXgtcnVuL2RldlwiO1xyXG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tIFwidml0ZS10c2NvbmZpZy1wYXRoc1wiO1xyXG5pbXBvcnQgdGFpbHdpbmRjc3MgZnJvbSBcInRhaWx3aW5kY3NzXCI7XHJcbmltcG9ydCBhdXRvcHJlZml4ZXIgZnJvbSBcImF1dG9wcmVmaXhlclwiO1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgcmVtaXgoe1xyXG4gICAgICBmdXR1cmU6IHtcclxuICAgICAgICB2M19mZXRjaGVyUGVyc2lzdDogdHJ1ZSxcclxuICAgICAgICB2M19yZWxhdGl2ZVNwbGF0UGF0aDogdHJ1ZSxcclxuICAgICAgICB2M190aHJvd0Fib3J0UmVhc29uOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgICB0c2NvbmZpZ1BhdGhzKCksXHJcbiAgXSxcclxuICBidWlsZDoge1xyXG4gICAgc291cmNlbWFwOiBmYWxzZSxcclxuICB9LFxyXG4gIGNzczoge1xyXG4gICAgcG9zdGNzczoge1xyXG4gICAgICBwbHVnaW5zOiBbXHJcbiAgICAgICAgdGFpbHdpbmRjc3MsXHJcbiAgICAgICAgYXV0b3ByZWZpeGVyLFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlcnZlcjoge1xyXG4gICAgZnM6IHtcclxuICAgICAgc3RyaWN0OiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBwb3J0OiAzMDAwLCAvLyBBc2VnXHUwMEZBcmF0ZSBkZSBxdWUgZWwgcHVlcnRvIGVzdFx1MDBFOSBjb25maWd1cmFkb1xyXG4gIH0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgJy9hc3NldHMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAncHVibGljL2Fzc2V0cycpLFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFnVyxTQUFTLG9CQUFvQjtBQUM3WCxTQUFTLGNBQWMsYUFBYTtBQUNwQyxPQUFPLG1CQUFtQjtBQUMxQixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLGtCQUFrQjtBQUN6QixPQUFPLFVBQVU7QUFMakIsSUFBTSxtQ0FBbUM7QUFPekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLE1BQ0osUUFBUTtBQUFBLFFBQ04sbUJBQW1CO0FBQUEsUUFDbkIsc0JBQXNCO0FBQUEsUUFDdEIscUJBQXFCO0FBQUEsTUFDdkI7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELGNBQWM7QUFBQSxFQUNoQjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsV0FBVztBQUFBLEVBQ2I7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILFNBQVM7QUFBQSxNQUNQLFNBQVM7QUFBQSxRQUNQO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sSUFBSTtBQUFBLE1BQ0YsUUFBUTtBQUFBLElBQ1Y7QUFBQSxJQUNBLE1BQU07QUFBQTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLFdBQVcsS0FBSyxRQUFRLGtDQUFXLGVBQWU7QUFBQSxJQUNwRDtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
