# Linux ps命令

Linux ps命令用于显示当前进程 (process) 的状态。

### 语法

    ps [options] [--help]

参数：

- ps 的参数非常多, 在此仅列出几个常用的参数并大略介绍含义
- -A 列出所有的行程
- -w 显示加宽可以显示较多的资讯
- -au 显示较详细的资讯
- -aux 显示所有包含其他使用者的行程
- au(x) 输出格式 :
- USER PID %CPU %MEM VSZ RSS TTY STAT START TIME COMMAND
- USER: 行程拥有者
- PID: pid
- %CPU: 占用的 CPU 使用率
- %MEM: 占用的记忆体使用率
- VSZ: 占用的虚拟记忆体大小
- RSS: 占用的记忆体大小
- TTY: 终端的次要装置号码 (minor device number of tty)
- STAT: 该行程的状态:
- D: 不可中断的静止 (通悸□□缜b进行 I/O 动作)
- R: 正在执行中
- S: 静止状态
- T: 暂停执行
- Z: 不存在但暂时无法消除
- W: 没有足够的记忆体分页可分配
- - N: 低优先序的行程
- L: 有记忆体分页分配并锁在记忆体内 (实时系统或捱A I/O)
- START: 行程开始时间
- TIME: 执行的时间
- COMMAND:所执行的指令

### 实例

    # ps -A 显示进程信息
    PID TTY     TIME CMD
      1 ?    00:00:02 init
      2 ?    00:00:00 kthreadd
      3 ?    00:00:00 migration/0
      4 ?    00:00:00 ksoftirqd/0
      5 ?    00:00:00 watchdog/0
      6 ?    00:00:00 events/0
      7 ?    00:00:00 cpuset
      8 ?    00:00:00 khelper
      9 ?    00:00:00 netns
      10 ?    00:00:00 async/mgr
      11 ?    00:00:00 pm
      12 ?    00:00:00 sync_supers
      13 ?    00:00:00 bdi-default
      14 ?    00:00:00 kintegrityd/0
      15 ?    00:00:02 kblockd/0
      16 ?    00:00:00 kacpid
      17 ?    00:00:00 kacpi_notify
      18 ?    00:00:00 kacpi_hotplug
      19 ?    00:00:27 ata/0
    ……省略部分结果
    30749 pts/0  00:00:15 gedit
    30886 ?    00:01:10 qtcreator.bin
    30894 ?    00:00:00 qtcreator.bin 
    31160 ?    00:00:00 dhclient
    31211 ?    00:00:00 aptd
    31302 ?    00:00:00 sshd
    31374 pts/2  00:00:00 bash
    31396 pts/2  00:00:00 ps
    

 显示指定用户信息

    # ps -u root //显示root进程用户信息
     PID TTY     TIME CMD
      1 ?    00:00:02 init
      2 ?    00:00:00 kthreadd
      3 ?    00:00:00 migration/0
      4 ?    00:00:00 ksoftirqd/0
      5 ?    00:00:00 watchdog/0
      6 ?    00:00:00 events/0
      7 ?    00:00:00 cpuset
      8 ?    00:00:00 khelper
      9 ?    00:00:00 netns
      10 ?    00:00:00 async/mgr
      11 ?    00:00:00 pm
      12 ?    00:00:00 sync_supers
      13 ?    00:00:00 bdi-default
      14 ?    00:00:00 kintegrityd/0
      15 ?    00:00:02 kblockd/0
      16 ?    00:00:00 kacpid
    ……省略部分结果
    30487 ?    00:00:06 gnome-terminal
    30488 ?    00:00:00 gnome-pty-helpe
    30489 pts/0  00:00:00 bash
    30670 ?    00:00:00 debconf-communi 
    30749 pts/0  00:00:15 gedit
    30886 ?    00:01:10 qtcreator.bin
    30894 ?    00:00:00 qtcreator.bin 
    31160 ?    00:00:00 dhclient
    31211 ?    00:00:00 aptd
    31302 ?    00:00:00 sshd
    31374 pts/2  00:00:00 bash
    31397 pts/2  00:00:00 ps
    

显示所有进程信息，连同命令行

    # ps -ef //显示所有命令，连带命令行
    UID    PID PPID C STIME TTY     TIME CMD
    root     1   0 0 10:22 ?    00:00:02 /sbin/init
    root     2   0 0 10:22 ?    00:00:00 [kthreadd]
    root     3   2 0 10:22 ?    00:00:00 [migration/0]
    root     4   2 0 10:22 ?    00:00:00 [ksoftirqd/0]
    root     5   2 0 10:22 ?    00:00:00 [watchdog/0]
    root     6   2 0 10:22 ?    /usr/lib/NetworkManager
    ……省略部分结果
    root   31302 2095 0 17:42 ?    00:00:00 sshd: root@pts/2 
    root   31374 31302 0 17:42 pts/2  00:00:00 -bash
    root   31400   1 0 17:46 ?    00:00:00 /usr/bin/python /usr/sbin/aptd
    root   31407 31374 0 17:48 pts/2  00:00:00 ps -ef
    