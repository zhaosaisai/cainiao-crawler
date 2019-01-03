# Linux ftpwho命令

Linux ftpwho命令用于显示目前所有以FTP登入的用户信息。

执行这项指令可得知目前用FTP登入系统的用户有那些人，以及他们正在进行的操作。

### 语法

    ftpwho

参数说明：

- -v  显示版本信息

### 实例

查询当前有哪些用户正在登录FTP服务器，可直接使用如下命令：

    ftpwho

该命令有如下输出结果：

    $ ftpwho              #查询当前正在登录FTP 服务器的用户  
    standalone FTP daemon[2085]：  
    3547 wyw [1m20s] 1m25s(idle)  
    Service class - 1 user #当前有一个用户登录FTP服务器 
    