
var appScripts = [
    'app/host/*.js',
    'app/scripts/**/*.js',
    'app/scripts/*.js'
];

var styles = [
    'app/styles/*.css',
    'app/styles/**/.css'
];


module.exports = function (grunt) {
    grunt.initConfig({
        bowerInstall: {
            target: {
                src: ['app/views/index.html']
            }
        },
        fileblocks:{
            'dev': {
                'src': 'app/views/index.html',
                'options': {
                    removeFiles: true
                },
                'blocks': {
                    'appScripts': {
                        src: appScripts
                    },
                    'appStyles' : {
                        src: styles
                    },
                }
            }
        },
        watch: {
            src: {
                files: [appScripts, styles,'Gruntfile.js'],
                    tasks: ['updateIndex']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-file-blocks');
    grunt.loadNpmTasks('grunt-bower-install');
    grunt.registerTask('updateIndex', ['fileblocks']);

};