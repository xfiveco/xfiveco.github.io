module.exports = function(grunt) {

    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      compass: {
        dist: {
          options: {
            sassDir: 'scss',
            cssDir: 'css',
            environment: 'production'
          }
        },
        dev: {
          options: {
            sassDir: 'scss',
            cssDir: 'css'
          }
        }
      },

      watch: {
        sass: {
          files: 'scss/*.scss',
          tasks: 'compass'
        }
      }
    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['compass', 'watch']);

}
