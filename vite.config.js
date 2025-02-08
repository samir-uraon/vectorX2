import { defineConfig } from 'vite'
import dotenv from 'dotenv';
dotenv.config({path:"./.env"});
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    port:process.env.VITE_port,
    allowedHosts:true
  },
})
