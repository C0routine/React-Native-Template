import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();

export const userStorage = new MMKV({
  id: 'userStorage',
  encryptionKey: 'user-encrypted',
});
