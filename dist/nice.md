# Linux nice命令

Linux nice命令以更改过的优先序来执行程序，如果未指定程序，则会印出目前的排程优先序，内定的 adjustment 为 10，范围为 -20（最高优先序）到 19（最低优先序）。

使用权限：所有使用者。

### 语法

    nice [-n adjustment] [-adjustment] [--adjustment=adjustment] [--help] [--version] [command [arg...]]

参数说明：

- -n adjustment, -adjustment, --adjustment=adjustment 皆为将该原有优先序的增加 adjustment
- --help 显示求助讯息
- --version 显示版本资讯

### 实例

设置程序运行时的优先级

    # vi & //后台运行
    [1] 15297
    # nice vi & //设置默认优先级
    [2] 15298
    
    [1]+ Stopped         vi
    # nice -n 19 vi & //设置优先级为19
    [3] 15299
    
    [2]+ Stopped         nice vi
    # nice -n -20 vi & //设置优先级为 -20
    [4] 15300
    
    [3]+ Stopped         nice -n 19 vi
    # ps -l //显示进程
    F S  UID  PID PPID C PRI NI ADDR SZ WCHAN TTY     TIME CMD
    4 S   0 15278 15212 0 80  0 - 1208 wait  pts/2  00:00:00 bash
    0 T   0 15297 15278 0 80  0 - 2687 signal pts/2  00:00:00 vi
    0 T   0 15298 15278 0 90 10 - 2687 signal pts/2  00:00:00 vi
    0 T   0 15299 15278 1 99 19 - 2687 signal pts/2  00:00:00 vi
    4 T   0 15300 15278 3 60 -20 - 2687 signal pts/2  00:00:00 vi
    4 R   0 15301 15278 0 80  0 -  625 -   pts/2  00:00:00 ps
    
    [4]+ Stopped         nice -n -20 vi
    

将 ls 的优先序加 1 并执行

    nice -n 1 ls

将 ls 的优先序加 10 并执行

    nice ls

注意：优先序 (priority) 为操作系统用来决定 CPU 分配的参数，Linux 使用『回合制(round-robin)』的演算法来做 CPU 排程，优先序越高，所可能获得的 CPU时间就越多。