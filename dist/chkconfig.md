# Linux chkconfig命令

Linux chkconfig命令用于检查，设置系统的各种服务。

这是Red Hat公司遵循GPL规则所开发的程序，它可查询操作系统在每一个执行等级中会执行哪些系统服务，其中包括各类常驻服务。

### 语法

    chkconfig [--add][--del][--list][系统服务] 或 chkconfig [--level ][系统服务][on/off/reset]

参数：

- --add 　增加所指定的系统服务，让chkconfig指令得以管理它，并同时在系统启动的叙述文件内增加相关数据。
- --del 　删除所指定的系统服务，不再由chkconfig指令管理，并同时在系统启动的叙述文件内删除相关数据。
- --level 　指定读系统服务要在哪一个执行等级中开启或关毕。

### 实例

列出chkconfig所知道的所有命令。

    # chkconfig -list 
    

开启服务。

    # chkconfig telnet on //开启Telnet服务
    # chkconfig -list //列出chkconfig所知道的所有的服务的情况
    

关闭服务

    # chkconfig telnet off  //关闭Telnet服务
    # chkconfig -list //列出chkconfig所知道的所有的服务的情况
    