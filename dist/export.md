# Linux export命令

Linux export命令用于设置或显示环境变量。

在shell中执行程序时，shell会提供一组环境变量。export可新增，修改或删除环境变量，供后续执行的程序使用。export的效力仅及于该次登陆操作。

### 语法

    export [-fnp][变量名称]=[变量设置值]

参数说明：

- -f 　代表[变量名称]中为函数名称。
- -n 　删除指定的变量。变量实际上并未删除，只是不会输出到后续指令的执行环境中。
- -p 　列出所有的shell赋予程序的环境变量。

### 实例

列出当前所有的环境变量

    # export -p //列出当前的环境变量值
    declare -x HOME=“/root“
    declare -x LANG=“zh_CN.UTF-8“
    declare -x LANGUAGE=“zh_CN:zh“
    declare -x LESSCLOSE=“/usr/bin/lesspipe %s %s“
    declare -x LESSOPEN=“| /usr/bin/lesspipe %s“
    declare -x LOGNAME=“root“
    declare -x LS_COLORS=““
    declare -x MAIL=“/var/mail/root“
    declare -x OLDPWD
    declare -x PATH=“/opt/toolchains/arm920t-eabi/bin:/opt/toolchains/arm920t-eabi/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games“
    declare -x PWD=“/root“
    declare -x SHELL=“/bin/bash“
    declare -x SHLVL=“1“
    declare -x SPEECHD_PORT=“6560“
    declare -x SSH_CLIENT=“192.168.1.65 1674 22“
    declare -x SSH_CONNECTION=“192.168.1.65 1674 192.168.1.3 22“
    declare -x SSH_TTY=“/dev/pts/2“
    declare -x TERM=“XTERM“
    declare -x USER=“root“
    declare -x XDG_SESSION_COOKIE=“93b5d3d03e032c0cf892a4474bebda9f-1273864738.954257-340206484“
    

定义环境变量

    # export MYENV //定义环境变量
    # export -p //列出当前的环境变量
    declare -x HOME=“/root“
    declare -x LANG=“zh_CN.UTF-8“
    declare -x LANGUAGE=“zh_CN:zh“
    declare -x LESSCLOSE=“/usr/bin/lesspipe %s %s“
    declare -x LESSOPEN=“| /usr/bin/lesspipe %s“
    declare -x LOGNAME=“root“
    declare -x LS_COLORS=““
    declare -x MAIL=“/var/mail/root“
    declare -x MYENV
    declare -x OLDPWD
    declare -x PATH=“/opt/toolchains/arm920t-eabi/bin:/opt/toolchains/arm920t-eabi/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games“
    declare -x PWD=“/root“
    declare -x SHELL=“/bin/bash“
    declare -x SHLVL=“1“
    declare -x SPEECHD_PORT=“6560“
    declare -x SSH_CLIENT=“192.168.1.65 1674 22“
    declare -x SSH_CONNECTION=“192.168.1.65 1674 192.168.1.3 22“
    declare -x SSH_TTY=“/dev/pts/2“
    declare -x TERM=“XTERM“
    declare -x USER=“root“
    declare -x XDG_SESSION_COOKIE=“93b5d3d03e032c0cf892a4474bebda9f-1273864738.954257-340206484“
    

定义环境变量赋值

    # export MYENV=7 //定义环境变量并赋值
    # export -p
    declare -x HOME=“/root“
    declare -x LANG=“zh_CN.UTF-8“
    declare -x LANGUAGE=“zh_CN:zh“
    declare -x LESSCLOSE=“/usr/bin/lesspipe %s %s“
    declare -x LESSOPEN=“| /usr/bin/lesspipe %s“
    declare -x LOGNAME=“root“
    declare -x LS_COLORS=““
    declare -x MAIL=“/var/mail/root“
    declare -x MYENV=“7“
    declare -x OLDPWD
    declare -x PATH=“/opt/toolchains/arm920t-eabi/bin:/opt/toolchains/arm920t-eabi/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games“
    declare -x PWD=“/root“
    declare -x SHELL=“/bin/bash“
    declare -x SHLVL=“1“
    declare -x SPEECHD_PORT=“6560“
    declare -x SSH_CLIENT=“192.168.1.65 1674 22“
    declare -x SSH_CONNECTION=“192.168.1.65 1674 192.168.1.3 22“
    declare -x SSH_TTY=“/dev/pts/2“
    declare -x TERM=“XTERM“
    declare -x USER=“root“
    declare -x XDG_SESSION_COOKIE=“93b5d3d03e032c0cf892a4474bebda9f-1273864738.954257-340206484“
    