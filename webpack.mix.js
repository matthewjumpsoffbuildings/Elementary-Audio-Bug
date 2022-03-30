const mix = require('laravel-mix')

mix.ts('src/js/app.ts', 'dist/js').vue()
	.sass('src/sass/app.sass', 'dist/css')
	.copy('elementary.config.json', 'dist/elementary.config.json')
	.browserSync({
		server: true,
		open: false,
		https: {
			key: './localhost+3-key.pem',
			cert: './localhost+3.pem'
		}
	})
	.webpackConfig({
		module: {
			rules: [
				{
				test: /\.pug$/,
				loader: 'vue-pug-loader',
				}
			],
		}
	})
	.disableNotifications()