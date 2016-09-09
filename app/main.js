import React from 'react';
import Router from 'react-router';
import routes from './routes';

/*
* main.js是我们的React应用的入口点，
* 当Browserify将整个依赖树串起来并生成最终的bundle.js时会用到，
* 这里我们填入初始化的内容后我们基本不用再动它了。
*/

Router.run(routes, Router.HistoryLocation, function(Handler){
    React.render(<Handler />, document.getElementById('app'));
});