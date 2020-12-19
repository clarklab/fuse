module.exports = function (config) {
    
    config.addPassthroughCopy("./img");

    return {
        dir: {
            layouts: "_layouts",
        }
    };
};