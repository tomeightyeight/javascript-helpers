module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		sass: {
			dist: {
				options: {
					style: 'expanded'
				},
				
				files: {
					'./templates/global/css/styles.css': './templates/global/css/styles.scss'
				}	
			},
		},
		
		concat: {
			options: {
				sourceMap: true,
				separator: ';'
			},

			dist: {
				src: ['./templates/global/js/**/*.js'],
				
				dest: './templates/global/js/built/main.js'
			}
		},
		
		uglify: {
			options: {
				banner: '/* <%= pkg.name %>, built <%=  grunt.template.today() %> */\n',
				compress: true,
				mangle: true,
				sourceMap: true
			},
			
			dist: {
				files: {
					'./templates/global/js/built/main.min.js': ['<%= concat.dist.dest %>']
				}
			}
		},
		
		watch: {
			sass: {
				files: ['./templates/global/css/styles.scss'],
				tasks: ['sass']				
			},
			
			js: {
				files: ['./templates/global/js/**/*.js'],
				tasks: ['concat', 'uglify']
			}
		}
	});

	// Load the plugins that prvide the various Grunt tasks
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task(s).
	grunt.registerTask('default', ['sass', 'concat', 'uglify']);
}
