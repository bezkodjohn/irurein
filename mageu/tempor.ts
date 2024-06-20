type FilterKeysOfType<Type, Key> = {
  [key in keyof Type as Type[key] extends Key ? never : key]: Type[key];
};
