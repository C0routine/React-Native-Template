module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          api: ['./api'],
          assets: ['./assets'],
          components: ['./components'],
          global: ['./global'],
          navigation: ['./navigation'],
          screen: ['./screen'],
          stacks: ['./stacks'],
          store: ['./store'],
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
