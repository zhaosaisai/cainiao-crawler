# Linux shutdown命令

Linux shutdown命令可以用来进行关机程序，并且在关机以前传送讯息给所有使用者正在执行的程序，shutdown 也可以用来重开机。

使用权限：系统管理者。

### 语法

    shutdown [-t seconds] [-rkhncfF] time [message]

参数说明：

- -t seconds : 设定在几秒钟之后进行关机程序
- -k : 并不会真的关机，只是将警告讯息传送给所有只用者
- -r : 关机后重新开机
- -h : 关机后停机
- -n : 不采用正常程序来关机，用强迫的方式杀掉所有执行中的程序后自行关机
- -c : 取消目前已经进行中的关机动作
- -f : 关机时，不做 fcsk 动作(检查 Linux 档系统)
- -F : 关机时，强迫进行 fsck 动作
- time : 设定关机的时间
- message : 传送给所有使用者的警告讯息

### 实例

立即关机

    # shutdown -h now

指定5分钟后关机

    # shutdown +5 “System will shutdown after 5 minutes” //5分钟够关机并显示警告信息