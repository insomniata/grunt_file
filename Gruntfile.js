module.exports = function (grunt) {
    grunt.initConfig({
        // Watch task config
        watch: {
            sass: {
            files: 'src/scss/*.scss',
            tasks: ['sass']
            }
        },
         // SASS task config
        sass: {
            dev: {
                files: {
                    // destination         // source file
                    'src/css/main.css': 'src/scss/main.scss'
                }
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'src/css/*.css',
                        'src/*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './src'
                }
            }
        },
    
    });

    // load npm tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    // define default task
    grunt.registerTask('default', ['browserSync', 'watch']);
};