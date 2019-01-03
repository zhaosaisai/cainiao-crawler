# Linux rsh命令

Linux rsh命令用于远端登入的Shell。

rsh(remote shell)提供用户环境，也就是Shell，以便指令能够在指定的远端主机上执行。

### 语法

    rsh [-dn][-l ][主机名称或IP地址][执行指令]

参数说明：

- -d 　使用Socket层级的排错功能。
- -l 　指定要登入远端主机的用户名称。
- -n 　把输入的指令号向代号为/dev/null的特殊外围设备。

### 实例

开启rsh服务

    # chkconfig --list //检测rlogin服务是否开启
    
    # chkconfig rsh on //开启rsh服务
    
    # chkconfig -list //检测开启的服务
    

远程命令执行

    # rsh -l hnlinux 192.168.1.88 /bin/ls //远程执行ls命令