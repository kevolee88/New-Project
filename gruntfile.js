module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {                              // Task 
		    dist: {                            // Target 
		      	options: {                       // Target options 
		        	style: 'expanded'
		      	},
		      	files: {                         // Dictionary of files 
		        	'lib/css/styles.css': 'lib/sass/styles.scss',       // 'destination': 'source' 
		      	}
		    }
		},

		cssmin: {
		  	my_target: {
		    	files: [{
		      		expand: true,
		      		cwd: 'lib/css/',
		      		src: ['*.css', '!*.min.css'],
		      		dest: 'lib/css/',
		      		ext: '.min.css'
		    	}]
		  	}
		},

		watch: {
	      	sass: {
	        	files: 'sass/**/*.scss',
	        	tasks: ['sass']
	      	},
	      	cssmin: {
	        	files: 'lib/css/*.min.css',
	        	tasks: ['cssmin']
	      	}
	    }
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('default', ['sass', 'cssmin']);
};