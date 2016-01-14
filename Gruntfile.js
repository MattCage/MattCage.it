// Gruntfile

module.exports = function(grunt) {
  // Do grunt-related things in here
  
  grunt.initConfig({
    
    pkg: grunt.file.readJSON( 'package.json' ),
    
    less: {
      development: {
        options: {
        },
        files: {"css/bootstrap.css": "less/bootstrap.less"}
      },
      production: {
        options: {
          compress: true,
          cleancss: true
        },
        files: {"_build/css/bootstrap.css": "less/bootstrap.less"}
      }
    }
    
  });
  
  grunt.loadNpmTasks( 'grunt-contrib-less' );
  
  grunt.registerTask( 'default', [ 'less' ] );
  
};