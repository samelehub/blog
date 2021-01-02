// 设置页脚博主会动的心
$(document).ready(function (e) {
  $('.copyright').html(
    '©2020 <i style="color:#FF6A6A;animation: announ_animation 0.8s linear infinite;" class="fa fa-heartbeat"></i> Samele'
  )
})

// 移除页脚样式
var app = document.getElementById('footer')
app.removeAttribute('id')

/*添加图片top*/
var top_up =
  "<img id='fuhua' class='fuhua' style='max-width: 300%; transform: translate(-86px,-86px);' src='https://cdn.jsdelivr.net/gh/samelehub/CDN@latest/images/user/fuhua.gif' title='回到顶部' >"
/*添加到返回顶部按钮下*/
document.getElementById('go-up').innerHTML += top_up
