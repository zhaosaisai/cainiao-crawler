# Linux rwho命令

Linux rwho命令用于查看系统用户。

rwho指令的效果类似who指令，但它会显示局域网里所有主机的用户。主机必须提供rwhod常驻服务的功能，方可使用rwho指令。

### 语法

    rwho [-a]

参数说明：

- -a 　列出所有的用户，包括闲置时间超过1个小时以上的用户。

### 实例

显示本地局域网内的所有用户

    # rwho
    root   snail-hnlinux:pts/2 May 14 17:42
    