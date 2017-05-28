const loaderUtils = require('loader-utils');;
const _ = require('lodash');
const template = _.template;

const workerMatchRegexp = /new Worker\(["'][^"']+["']\)/;
const isJsOrTsRegexp = /\.(js|ts)$/;

function injectTemplateVariables(loaderContext, source) {
  // Inject template variables via lodash.template
  // Note: We only support the '<?= varname ?>' syntax (default matches and breaks on es6 string literals).
  const query = loaderUtils.getOptions(loaderContext);

  const tpl = template(source, {
    interpolate: /<%=([\s\S]+?)%>/g,
  });

  return tpl(query.data);
}

module.exports = function tnsLoader(source) {
  const resourcePath = this.resourcePath;
  if (resourcePath.match(isJsOrTsRegexp) && source.match(workerMatchRegexp)) {
    source = source.replace(/\bWorker\(["']([^)]*)["']\)/, function replaceWorker(match, path) {
      return '(require(\'worker-loader!' + path +  '\'))';
    });
  }

  if (!resourcePath.match(/node_modules/)) {
    return injectTemplateVariables(this, source);
  }

  return source;
};
