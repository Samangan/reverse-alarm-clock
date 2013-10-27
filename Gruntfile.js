module.exports = function(grunt) {
	//Configuration goes here
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		jshint: {
	      options: {
	        curly: true,
	        eqeqeq: true,
	        eqnull: true,
	        browser: true,
	        globals: {
	          jQuery: true
	        },
	      },
	      uses_defaults: ['js/**/*.js'],      
	    },
	    // Test with Busterjs
	    buster: {
	      test: {
	        config: 'buster.js'
	      },
	      server: {
	        port: 1111
	      }
	    },
	    uglify: {
	      options: {
	        mangle: false
	      },
	      my_target: {
	        files: {
	          'build/minified/minified-<%= pkg.name %>.v<%= pkg.version %>.js': ['js/src/**.js']
	        }
	      }
	    },
	    // Configure the copy task to move files from the development to production folders
	    copy: {
	      target: {
	        files: {
	          'build/': ['js/src/**']
	        }
	      }
	    },

	  
	  });

	  // Load plugins here
	  grunt.loadNpmTasks('grunt-contrib-copy');
	  grunt.loadNpmTasks('grunt-contrib-jshint');
	  grunt.loadNpmTasks('grunt-contrib-uglify');
	  grunt.loadNpmTasks('grunt-buster');

	  // Define your tasks here
	  grunt.registerTask('default', ['jshint', 'uglify', 'copy']);

};