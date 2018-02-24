(function (obj) {
  function Lee() {
    this.author = 'Lee';
    this.date = '2018年02月24日10:34:26'
  }
  
  var agent = window.navigator.userAgent
  var connection = window.navigator.connection

  /** 
  * 判断是否为webview环境
  */
  Lee.prototype.checkWebview = function () {
    var isWebview = /Safari\/\S+\s((?!Edge).)+/.test(agent) || /Mobile\/\S+\s((?!Safari).)+/.test(agent)
    return isWebview
  }

  /** 
  * 判断是否为ios环境
  */
  Lee.prototype.checkIOS = function () {
    return !!agent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  }
  /** 
  * 判断是否为安卓环境
  */
  Lee.prototype.checkAndroid = function () {
    return agent.indexOf('Android') > -1 || u.indexOf('Adr') > -1
  }

  /** 
  * 判断是否在线
  */
  Lee.prototype.checkOnline = function () {
    return agent.onLine
  }

  /** 
  * 判断所处网络环境
  */
  Lee.prototype.checkConnection = function () {
    return connection.type
  }

  /** 
  * 判断所处移动网络环境
  */
  Lee.prototype.checkCellular = function () {
    return connection.effectiveType
  }

  /** 
  * 调用单点登录
  * url: String 调用的url链接
  */
  Lee.prototype.appLogin = function (url) {
    if (!url) {
      alert('请输入要调用的scheme url')
      return false
    }
    var frame = document.createElement('iframe');
    frame.id = 'urlFrame'
    frame.src = url
    frame.onload = function () {
      document.getElementsByTagName('body')[0].removeChild(document.getElementById('urlFrame'))
    }
    frame.onerror = function () {
      console.log('失败啦')
      document.getElementsByTagName('body')[0].removeChild(document.getElementById('urlFrame'))
    }
    document.getElementsByTagName('body')[0].appendChild(frame)
  }
  var target = new Lee()
  window.$LeeBridge = target
})(window)