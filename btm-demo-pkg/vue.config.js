// vue.config.js
module.exports = {
	// options...
	css: {
		extract: false
	},
	configureWebpack: {
		output: {
			// only used in build library
			libraryExport: 'default'
		}
	}
}