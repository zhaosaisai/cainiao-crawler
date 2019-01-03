# Linux unset命令

Linux unset命令用于删除变量或函数。

unset为shell内建指令，可删除变量或函数。

### 语法

    unset [-fv][变量或函数名称]

参数：

- -f 　仅删除函数。
- -v 　仅删除变量。

### 实例

删除环境变量

    [root@w3cschool.cc ~]# lx="ls -lh" //设定环境变量
    [root@w3cschool.cc ~]# $lx //使用环境变量
    总用量 116K
    -rw-r--r-- 1 root root 2.1K 2008-03-30 anaconda-ks.cfg
    drwx------ 3 root root 4.0K 3月 30 21:22 Desktop
    -rw-r--r-- 1 root root 50K 2008-03-30 install.log
    -rw-r--r-- 1 root root 32K 2008-03-30 install.log.syslog
    lrwxrwxrwx 1 root root  9 2008-03-30 qte -> /opt/qte/
    [root@w3cschool.cc ~]# set //查看当前的环境变量
    BASH=/bin/bash
    BASH_ARGC=()
    BASH_ARGV=()
    ……省略部分内容
    PROMPT_COMMAND='echo -ne "33]0;${USER}@${HOSTNAME%%.*}:${PWD/#$HOME/~}07"'
    PS1='[u@h W]$ '
    PS2='> '
    PS4='+ '
    PWD=/root
    QTDIR=/usr/lib/qt-3.3
    SHELL=/bin/bash
    SSH_TTY=/dev/pts/4
    SUPPORTED=zh_CN.UTF-8:zh_CN:zh:en_US.UTF-8:en_US:en
    SYSFONT=latarcyrheb-sun16
    TERM=xterm
    UID=0
    USER=root
    _=-lh
    lx='ls -lh'
    [root@w3cschool.cc ~]# unset lx //删除环境变量
    [root@w3cschool.cc ~]# set //显示当前环境变量
    BASH=/bin/bash
    BASH_ARGC=()
    BASH_ARGV=()
    ……省略部分内容
    PROMPT_COMMAND='echo -ne "33]0;${USER}@${HOSTNAME%%.*}:${PWD/#$HOME/~}07"'
    PS1='[u@h W]$ '
    PS2='> '
    PS4='+ '
    PWD=/root
    QTDIR=/usr/lib/qt-3.3
    SHELL=/bin/bash
    SSH_TTY=/dev/pts/4
    SUPPORTED=zh_CN.UTF-8:zh_CN:zh:en_US.UTF-8:en_US:en
    SYSFONT=latarcyrheb-sun16
    TERM=xterm
    UID=0
    USER=root
    _=-lh
    