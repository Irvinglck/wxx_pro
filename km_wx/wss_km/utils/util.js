const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const shareEvent = (option, obj) => {
  console.log("shareEvent=========")
  let shareObj = {
    title: obj.title,
    path: obj.path,
    imgUrl: obj.imgUrl,
    success(res){
      // 转发成功之后的回调
　　　 if (res.errMsg == 'shareAppMessage:ok') {}
    }, 
    fail(res){
       // 转发失败之后的回调
　　　 if (res.errMsg == 'shareAppMessage:fail cancel') {
　　　 // 用户取消转发
　　　  } else if (res.errMsg == 'shareAppMessage:fail') {
　　　  // 转发失败，其中 detail message 为详细失败信息
　　　　}
    },
    complete(){
        // 转发结束之后的回调（转发成不成功都会执行）
    }
  };
  if (option.from === 'button') {
    // 来自页面内转发按钮
    console.log(option.target)
  }
  return shareObj;
}


const reqUrl=()=>{
  return 'https://applet.konicaminolta-bcn.cn';
  // return 'http://localhost:8080';
}

module.exports = {
  formatTime: formatTime,
  shareEvent: shareEvent,
  reqUrl:reqUrl
}
