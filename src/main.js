import { createApp } from 'vue';
import App from './App.vue';
import { createClient } from '@supabase/supabase-js';
import router from './router';

const supabaseUrl = 'https://butroiwhrzdpzulsflqn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1dHJvaXdocnpkcHp1bHNmbHFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk2NTk2NTIsImV4cCI6MjAyNTIzNTY1Mn0.oTtsXf3fxiv8H9x9K4MGd-WPakKjzTU5kBiacj8IAM0';

const supabase = createClient(supabaseUrl, supabaseKey);

const app = createApp(App);
app.config.globalProperties.$supabase = supabase;

app.use(router);  // Integra el router
app.mount('#app');
