
var config = module.exports;

config["browser tests"] = {
    environment: "browser",
    rootPath: "js/",
    sources: [
        "src/**/*.js"     
    ],
    tests: [
        "test/**/*_test.js"
    ]
};