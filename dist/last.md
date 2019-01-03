# Linux last命令

Linux last命令用于显示系统开机以来获是从每月初登入者的讯息。

使用权限：所有使用者。

### 语法

    shell>> last [options]

参数说明：

- -R 省略 hostname 的栏位
- -num 展示前 num 个
- username 展示 username 的登入讯息
- tty 限制登入讯息包含终端机代号

### 实例

    shell>> last -R -2
    johnney pts/1 Mon Aug 14 20:42 still logged in
    johnney pts/0 Mon Aug 14 19:59 still logged in
    wtmp begins Tue Aug 1 09:01:10 2000 ### /var/log/wtmp
    shell>> last -2 minery
    minery pts/0 140.119.217.115 Mon Aug 14 18:37 - 18:40 (00:03)
    minery pts/0 140.119.217.115 Mon Aug 14 17:22 - 17:24 (00:02)
    wtmp begins Tue Aug 1 09:01:10 2000
    

一般显示方法

    # last

简略显示，并指定显示的个数

    # last -n 5 -R
    root   pts/4    Thu May 13 17:25  still logged in  
    root   pts/2    Thu May 13 17:23 - 17:25 (00:02)  
    root   pts/1    Thu May 13 16:46  still logged in  
    root   pts/7    Thu May 13 15:36  still logged in  
    root   pts/9    Thu May 13 15:35  still logged in  
    
    wtmp begins Thu May 13 18:55:40 2014
    

显示最后一列显示主机IP地址

    # last -n 5 -a -i
    root   pts/4    Thu May 13 17:25  still logged in  192.168.1.10
    root   pts/2    Thu May 13 17:23 - 17:25 (00:02)   192.168.1.10
    root   pts/1    Thu May 13 16:46  still logged in  192.168.1.10
    root   pts/7    Thu May 13 15:36  still logged in  192.168.1.10
    root   pts/9    Thu May 13 15:35  still logged in  192.168.1.10
    
    wtmp begins Thu May 13 18:55:40 2014
    