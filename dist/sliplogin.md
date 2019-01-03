# Linux sliplogin命令

Linux sliplogin命令用于将SLIP接口加入标准输入。

sliplogin可将SLIP接口加入标准输入，把一般终端机的连线变成SLIP连线。通常可用来建立SLIP服务器，让远端电脑以SLIP连线到服务器。sliplogin活去检查/etc/slip/slip.hosts文件中是否有相同的用户名称。通过检查后，sliplogin会调用执行shell script来设置IP地址，子网掩码等网络界面环境。此shell script通常是/etc/slip/slip.login。

### 语法

    sliplogin [用户名称]

### 实例

改变用户的连接方式

    # sliplogin kk // 改变用户的连接方式