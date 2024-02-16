module.exports = {
    mode: 'development', // или 'production' в зависимости от вашего намерения
    entry: 'index.js', // путь к точке входа вашего приложения
    output: {
      filename: 'main.js', // имя выходного файла
      path: __dirname + '/dist', // директория для выходных файлов
    },
  };
  