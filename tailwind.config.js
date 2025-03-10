/** @type {import('tailwindcss').Config} */

import daisyui from 'daisyui';
import { Flowbite } from 'flowbite-react';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  Flowbite
  ],
}

