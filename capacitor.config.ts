import { CapacitorConfig } from '@capacitor/cli';
import { KeyboardResize } from '@capacitor/keyboard'

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'lens',
  webDir: 'dist',
  server: {
    url: 'http://172.20.10.9:8100',
    androidScheme: 'https'
  },
  plugins: {
    Keyboard: {
      resize: KeyboardResize.None,
    },
  },
};

export default config;
