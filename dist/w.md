# Linux w命令

Linux w命令用于显示目前登入系统的用户信息。

执行这项指令可得知目前登入系统的用户有哪些人，以及他们正在执行的程序。

单独执行 w 指令会显示所有的用户，您也可指定用户名称，仅显示某位用户的相关信息。

### 语法

    w [-fhlsuV][用户名称]

参数说明：

- -f 　开启或关闭显示用户从何处登入系统。
- -h 　不显示各栏位的标题信息列。
- -l 　使用详细格式列表，此为预设值。
- -s 　使用简洁格式列表，不显示用户登入时间，终端机阶段作业和程序所耗费的CPU时间。
- -u 　忽略执行程序的名称，以及该程序耗费CPU时间的信息。
- -V 　显示版本信息。

### 实例

显示当前用户

    w  //显示当前用户，不显示登录位置
    19:50:14 up 9:27, 4 users, load average: 0.31, 0.26, 0.18
    USER   TTY   FROM       LOGIN@  IDLE  JCPU  PCPU WHAT
    root   tty7   :0        Thu12  31:39m 10:10  0.60s gnome-session
    root   pts/0  :0.0       17:09  2:18m 15.26s 0.15s bash
    root   pts/1  192.168.1.17   18:51  1.00s 1.24s 0.14s -bash
    root   pts/2  192.168.1.17   19:48  60.00s 0.05s 0.05s -bash
    

不显示登录位置

    w -f
    19:53:59 up 9:31, 4 users, load average: 0.05, 0.16, 0.15
    USER   TTY    LOGIN@  IDLE  JCPU  PCPU WHAT
    root   tty7   Thu12  31:43m 10:10  0.60s gnome-session
    root   pts/0   17:09  2:21m 15.26s 0.15s bash
    root   pts/1   18:51  0.00s 1.04s 0.14s -bash
    root   pts/2   19:48  4:45  0.05s 0.05s -bash
    

以精简模式显示

    w -s
    19:54:37 up 9:31, 4 users, load average: 0.24, 0.19, 0.16
    USER   TTY   FROM        IDLE WHAT
    root   tty7   :0        31:43m gnome-session
    root   pts/0  :0.0       2:22m bash
    root   pts/1  192.168.1.17   0.00s -bash
    root   pts/2  192.168.1.17   5:23 -bash
    

不显示标题

    w -h
    root   tty7   :0        Thu12  31:44m 10:10  0.60s gnome-session
    root   pts/0  :0.0       17:09  2:23m 15.26s 0.15s bash
    root   pts/1  192.168.1.17   18:51  0.00s 1.05s 0.14s -bash
    root   pts/2  192.168.1.17   19:48  5:54  0.05s 0.05s -bash
    