require("dotenv").config();

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./" + process.env.INPUT_DIR + "/css/");
  eleventyConfig.addWatchTarget("./" + process.env.INPUT_DIR + "/js/");
  eleventyConfig.addPassthroughCopy(
    "./" + process.env.INPUT_DIR + "/img/*.webp"
  );
  eleventyConfig.addPassthroughCopy(
    "./" + process.env.INPUT_DIR + "/fonts/*.woff2"
  );
  return {
    dir: {
      input: process.env.INPUT_DIR,
      output: process.env.OUTPUT_DIR,
    },
  };
};
