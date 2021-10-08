module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: 'react-native-dotenv',
        path: '.env',
        blocklist: null,
        allowlist: ['WEATHER_URL', 'API_KEY'],
        safe: false,
        allowUndefined: true,
      },
    ],
  ],
};
