const globalVal = {
  'headIsShow': false,		// 头部是否显示
  cube(x) {
    return x*x*x;
  },
};

// 获取url
function getQueryVariable(variable){
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

globalVal.headIsShow = getQueryVariable("isShow") == "true";

export {globalVal};
