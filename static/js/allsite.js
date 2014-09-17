// 全站公用js，包括各个子站
//email replace
var email=document.getElementById('email');email.innerHTML=email.text.replace('AT','&#64;').replace('DOT','&#46;');
email=document.getElementsByTagName('email');for(var i=0;i<email.length;i++){email[i].innerHTML=email[i].innerHTML.replace("AT","@").replace("DOT",".")};