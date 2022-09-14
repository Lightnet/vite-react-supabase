/*
  Project Name: vite-react-supabase
  License: MIT
  Created by: Lightnet
*/

// vite.config.ts
import { defineConfig } from 'vite';
import reactPlugin from '@vitejs/plugin-react';

export default defineConfig({
  //server: {
    //port:3000,
    //proxy: {  
    //}
  //},
  plugins: [
    reactPlugin()
  ],
});