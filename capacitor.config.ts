import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'hoopi_io',
  webDir: 'www',
  plugins: {
    Keyboard: {
      resize: 'ionic' // ou 'body'
    }
  }

};

export default config;
