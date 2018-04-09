/**
 * Created by Михаил on 07.04.2018.
 */
const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
module.exports = function override(config, env) {
    config = injectBabelPlugin(['import', {libraryName: 'antd', style: true}], config);  // change importing css to less
    config = rewireLess.withLoaderOptions({
        modifyVars: {"@primary-color": "#033F38"},
    })(config, env);
    return config;
};
