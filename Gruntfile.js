
module.exports = function(grunt) {

  // cargar tareas npm
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express-server');

  grunt.initConfig({

    // inspeccion de archivos en tiempo real
    watch: {
      express: {
        files: ['bin/www', 'routes/*.js', 'views/**/*.ejs', '*.js'],
        tasks: ['express:defaults'],
        options: { livereload: true, spawn: false }
      },
      lesss: {
        files: ['compile/css/**/*.less', 'compile/css/**/*.css'],
        tasks: ['shared_config', 'less:development'],
        options: { livereload: true, spawn: false }
      },
      js_frontend: {
        files: ['compile/jquery/jquery.js', 'compile/bootstrap/dist/js/bootstrap.js', 'compile/js/frontend.js'],
        tasks: ['uglify:frontend'],
        options: { livereload: true, spawn: false }
      },
      js_backend: {
        files: ['compile/jquery/jquery.js', 'compile/bootstrap/dist/js/bootstrap.js', 'compile/js/backend.js'],
        tasks: ['uglify:backend'],
        options: { livereload: true, spawn: false }
      }
    },

    // servidor
    express: {
      options: { script: 'bin/www', port: 3000 },
      defaults: {}
    }

  });

  // registrar tareas grunt
  grunt.registerTask('default', ['express:defaults', 'watch']);

};
