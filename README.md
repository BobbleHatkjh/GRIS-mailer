# GRIS Mailer
GRIS的自动邮件发送站，通常情况下用来接收GRIS给 使用者需要发送的邮件，不过也打算开源出独立的方式支持标准发送邮件服务。GRIS Mail内置有三种发送方式一种是使用message直穿，快速有效；第二种是标准邮件发送，使用已经写好的standard版本，通常意味着系统出错了；第三种是正常报收格式的邮件，一般用来发送日报周报月报年报之类的。
_—by Node.js_

&emsp;
>邮件接口
```
url: 'http://localhost:8010/mail'
method: 'POST'
token: [秘]
```  

&emsp;
>Param的写法
  
直传message
```
{
    url: '/mail',
    method: 'POST',
    token: [秘],
    message: '这是要传的速报'
}
```  

标准格式
```
{
    url: '/mail',
    method: 'POST',
    token: [秘],
    mail: {
        title: '标题'
    }
}
```
