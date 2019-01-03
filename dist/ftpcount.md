# Linux ftpcount命令

Linux ftpcount命令用于显示目前以FTP登入的用户人数。

执行这项指令可得知目前用FTP登入系统的人数以及FTP登入人数的上限。

### 语法

    ftpcount

参数说明：

- -f : 指定设定文件的路径。
- -h，--help ：显示帮助信息。

### 实例

ftpcount 可以直接查询FTP服务器上用户的人数，可直接使用如下命令：

    ftpcount              #查询当前FTP用户的人数 
    

该命令有如下输出结果：

    $ ftpcount             #查询当前FTP用户的人数  
    Master proftpd process 2085:  
    Service class - 6 user #当前共6个用户登录到服务器 
    