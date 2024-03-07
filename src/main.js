// main.js

import { createApp } from 'vue';
import App from './App.vue';
import { createClient } from '@supabase/supabase-js';
import router from './router';

const supabaseUrl = 'https://hipzmzoovakqagmhvpfd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhpcHptem9vdmFrcWFnbWh2cGZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY2NTQyMzAsImV4cCI6MjAyMjIzMDIzMH0.mibcykL-fnhQJ0H46lEbMjPvul2fYw0hfquaswuaalQ';

const supabase = createClient(supabaseUrl, supabaseKey, {
  autoRefreshToken: true,
  persistSession: true,
});

const app = createApp(App);
app.config.globalProperties.$supabase = supabase;

app.use(router);
app.mount('#app');

export { supabase };
