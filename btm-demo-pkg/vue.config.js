// vue.config.js
module.exports = {
  baseUrl: './',
	css: {
		extract: false
	},
	configureWebpack: {
		output: {
			// only used in build library
			libraryExport: 'default',
		}
	}
}