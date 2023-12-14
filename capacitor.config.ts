import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'vscode.capacitor.test',
  appName: 'vscode-capacitor-test',
  webDir: 'www/browser',
  server: {
    androidScheme: 'https'
  }
};

export default config;
