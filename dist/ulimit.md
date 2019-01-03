# Linux ulimit命令

Linux ulimit命令用于控制shell程序的资源。

ulimit为shell内建指令，可用来控制shell执行程序的资源。

### 语法

    ulimit [-aHS][-c ][-d ][-f ][-m ][-n ][-p ][-s ][-t ][-u ][-v ]
    

参数：

- -a 　显示目前资源限制的设定。
- -c  　设定core文件的最大值，单位为区块。
- -d  　程序数据节区的最大值，单位为KB。
- -f  　shell所能建立的最大文件，单位为区块。
- -H 　设定资源的硬性限制，也就是管理员所设下的限制。
- -m  　指定可使用内存的上限，单位为KB。
- -n  　指定同一时间最多可开启的文件数。
- -p  　指定管道缓冲区的大小，单位512字节。
- -s  　指定堆叠的上限，单位为KB。
- -S 　设定资源的弹性限制。
- -t  　指定CPU使用时间的上限，单位为秒。
- -u  　用户最多可开启的程序数目。
- -v  　指定可使用的虚拟内存上限，单位为KB。

### 实例

显示系统资源的设置

    [root@w3cschool.cc ~]# ulimit -a
    core file size     (blocks, -c) 0
    data seg size      (kbytes, -d) unlimited
    file size        (blocks, -f) unlimited
    pending signals         (-i) 1024
    max locked memory    (kbytes, -l) 32
    max memory size     (kbytes, -m) unlimited
    open files           (-n) 1024
    pipe size      (512 bytes, -p) 8
    POSIX message queues   (bytes, -q) 819200
    stack size       (kbytes, -s) 10240
    cpu time        (seconds, -t) unlimited
    max user processes       (-u) 4096
    virtual memory     (kbytes, -v) unlimited
    file locks           (-x) unlimited
    [root@w3cschool.cc ~]# 
    

设置单一用户程序数目上限

    [root@w3cschool.cc ~]# ulimit -u 500 //设置单一用户程序上限
    [root@w3cschool.cc ~]# ulimit -a
    core file size     (blocks, -c) 0
    data seg size      (kbytes, -d) unlimited
    file size        (blocks, -f) unlimited
    pending signals         (-i) 1024
    max locked memory    (kbytes, -l) 32
    max memory size     (kbytes, -m) unlimited
    open files           (-n) 1024
    pipe size      (512 bytes, -p) 8
    POSIX message queues   (bytes, -q) 819200
    stack size       (kbytes, -s) 10240
    cpu time        (seconds, -t) unlimited
    max user processes       (-u) 500
    virtual memory     (kbytes, -v) unlimited
    file locks           (-x) unlimited
    [root@w3cschool.cc ~]# 
    