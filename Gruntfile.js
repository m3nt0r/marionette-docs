/*global module:false*/
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		// Metadata.
		pkg: grunt.file.readJSON('package.json'),
		banner: '/*!\n' +
			' * <%= pkg.name %> v<%= pkg.version %> (<%= grunt.template.today("yyyy-mm-dd") %>)\n' +
			' * <%= pkg.homepage %>\n' +
			' * Copyright (c) <%= grunt.template.today("yyyy") %>, <%= pkg.author.name %>\n' +
			' */\n',
		concat: {
			options: {
				banner: '<%= banner %>',
				stripBanners: true
			},
			dist: {
				src: [
					'_sources/js/init.js',
					'_sources/js/app/**/*.js',
					'_sources/js/run.js'
				],
				dest: 'js/<%= pkg.name %>.dbg.js'
			},
			libs: {
				src: [
					'_sources/libs/jquery/jquery.min.js',
					'_sources/libs/underscore/underscore-min.js',
					'_sources/libs/underscore.string/dist/underscore.string.min.js',
					'_sources/libs/backbone/backbone-min.js',
					'_sources/libs/marionette/lib/backbone.marionette.min.js',
				],
				dest: 'js/<%= pkg.name %>.libs.js'
			}
		},
		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				eqnull: true,
				browser: true,
				laxcomma: true,
				multistr: true,
				globals: {
					jQuery: true,
					Backbone: true
				}
			},
			all: [
				'_sources/js/**/*.js'
			]
		},
		uglify: {
			options: {
				banner: '<%= banner %>'
			},
			dist: {
				src: '<%= concat.dist.dest %>',
				dest: 'js/<%= pkg.name %>.min.js'
			}
		},
		less: {
			dev: {
				files: {
					"css/<%= pkg.name %>.css": "_sources/less/main.less",
				}
			},
			dist: {
				options: {
					yuicompress: true
				},
				files: {
					"css/<%= pkg.name %>.min.css": "_sources/less/main.less",
				}
			}
		},
		watch: {
			js: {
				files: '_sources/js/**/*.js',
				tasks: ['jshint', 'concat:dist', 'uglify']
			},
			css: {
				files: '_sources/less/**/*.less',
				tasks: ['less']
			}
		},
		
		exec: {
			// docs update
			clone: {
				cmd: 'ROOT=`pwd` && git clone https://github.com/marionettejs/backbone.marionette $ROOT/_repo'
			},
			makedoc: {
				cmd: 'ROOT=`pwd` && TODAY=`date +%Y-%m-%d` && cd _repo/docs && echo "Transform docs to posts" && for f in *.md; do echo "---\nlayout: default\n---\n" | cat - $f > /tmp/docs && mv /tmp/docs $ROOT/_posts/$TODAY-$f; done'
			},
			cleanup: {
				cmd: 'ROOT=`pwd` && rm -rf $ROOT/_repo'
			},
			
			// jekyll shortcuts
			build: {
				cmd: "jekyll build --baseurl '' "
			},
			server: {
				cmd: "jekyll serve --baseurl '' --watch"
			}
		}
	});

	// Plugins
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-exec');

	// Tasks.
	grunt.registerTask('update', ['exec:cleanup', 'exec:clone', 'exec:makedoc', 'exec:cleanup']);
	grunt.registerTask('build', ['js', 'css', 'exec:build']);
	grunt.registerTask('server', ['js', 'css', 'exec:server']);
	grunt.registerTask('js', ['jshint', 'concat', 'uglify']);
	grunt.registerTask('css', ['less']);
	grunt.registerTask('default', ['js', 'css']);
};