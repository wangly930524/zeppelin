const globalVal = {
  'headIsShow': true,		// 头部是否显示
  cube(x) {
    return x*x*x;
  },
};

// 获取url
function getQueryVariable(variable) {
  let query = window.location.search.substring(1);
  let vars = query.split('&');
  for (let i=0; i<vars.length; i++) {
    let pair = vars[i].split('=');
    if (pair[0] === variable) {
      return pair[1];
    }
  }
  return (false);
}

globalVal.headIsShow = getQueryVariable('isShow') === 'true';

export {globalVal};
