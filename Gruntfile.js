module.exports = function (grunt) {
  // Grunt Configuration
  grunt.initConfig({
    freeport: {
      acceptance: {
        options: {
          start: 3000,
        },
      },
    },
    express: {
      acceptance: {
        options: {
          script: "app/src/index.js",
          background: true,
          output: "Server Listening On http://localhost:3000/",
          port: "<%= freeport.acceptance %>",
        },
      },
    },
    shell: {
      acceptance: {
        command:
          "cucumber-js -f json:public/cucumber.json test/src/features/ -r test/src/steps/ --parallel 3 && npm run report",
        env: {
          PORT: "<%= freeport.acceptance %>",
        },
      },
    },
  });

  grunt.loadNpmTasks("grunt-freeport");
  grunt.loadNpmTasks("grunt-express-server");
  grunt.loadNpmTasks("grunt-shell");

  grunt.registerTask("acceptance", [
    "freeport:acceptance",
    "express:acceptance",
    "shell:acceptance",
  ]);
};
