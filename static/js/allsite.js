// 全站公用js，包括各个子站
//email replace
var email=document.getElementById('email');email.innerHTML=email.text.replace('AT','&#64;').replace('DOT','&#46;');
email=document.getElementsByTagName('email');for(var i=0;i<email.length;i++){email[i].innerHTML=email[i].innerHTML.replace("AT","@").replace("DOT",".")};
bd_share=document.getElementById('bd_share');
bd_share.innerHTML='<a href="#" class="bds_more" data-cmd="more"></a><a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a><a href="#" class="bds_renren" data-cmd="renren" title="分享到人人网"></a><a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a><a href="#" class="bds_copy" data-cmd="copy" title="分享到复制网址"></a>';
bd_share.setAttribute('class','bdsharebuttonbox'); 
window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"2","bdSize":"32"},"share":{},"image":{"viewList":["weixin","renren","tsina","copy"],"viewText":"分享到：","viewSize":"16"},"selectShare":{"bdContainerClass":null,"bdSelectMiniList":["weixin","renren","tsina","copy"]}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];