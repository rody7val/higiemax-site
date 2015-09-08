
module.exports = function(grunt) {
  // cargar tareas npm
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-shared-config');

  grunt.initConfig({
    // mi npm json
    pkg: grunt.file.readJSON('package.json'),
    // compilar arcgivo config.json (bootstrap) en compile/css/varibles.less
    shared_config: {
      default: {
        src: 'compile/config.json',
        dest: ['compile/css/variables.less']
      }
    },
    // less
    less: {
      development: {
        options: { compress: true },
        files: {
          'public/stylesheets/frontend.css':'compile/css/frontend.less',
          'public/stylesheets/backend.css':'compile/css/backend.less'
        }
      }
    },
    // compilador
    uglify: {
      options: { mangle: false },
      frontend: {
        files: {
          'public/javascripts/frontend.js': [  // frontend js
            'compile/jquery/dist/jquery.min.js',
            'compile/bootstrap/dist/js/bootstrap.min.js',
            'compile/js/frontend.js',
            'compile/js/mapbox.js'
          ]
        }
      },
      backend: {
        files: {
          'public/javascripts/backend.js': [   // backend js
            'compile/jquery/dist/jquery.min.js',
            'compile/bootstrap/dist/js/bootstrap.min.js',
            // 'compile/js/backend.js'
          ]
        }
      }
    },
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
  })
  ;

  // registrar tareas grunt
  grunt.registerTask('default', ['express:defaults', 'watch']);
  grunt.registerTask('build', ['uglify', 'shared_config', 'less'])

};
