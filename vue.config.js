module.exports = {
  devServer: {
    headers: {
      'Cache-Control': 'no-store'
    },
    disableHostCheck: true,
    watchOptions: {
      // db.json is if you're using https://github.com/typicode/json-server
      // so the whole UI isn't reloaded every time you update that data/file
      ignored: ['db.json', 'node_modules/**']
    }
  },
  chainWebpack: (config) => {
    if (process.env.NODE_ENV === 'development') {
      config.plugins.delete('preload') // without this, auto-reload in Safari doesn't work
    }
  }
}
