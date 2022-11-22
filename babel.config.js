module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          api: ['./src/api'],
          assets: ['./src/assets'],
          components: ['./src/components'],
          global: ['./src/global'],
          screen: ['./src/screen'],
          stacks: ['./src/stacks'],
          store: ['./src/store'],
        },
      },
    ],
  ],
};
