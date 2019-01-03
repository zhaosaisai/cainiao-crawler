# Linux pstree命令

Linux pstree命令将所有行程以树状图显示，树状图将会以 pid (如果有指定) 或是以 init 这个基本行程为根 (root)，如果有指定使用者 id，则树状图会只显示该使用者所拥有的行程。

使用权限：所有使用者。

### 语法

    pstree [-a] [-c] [-h|-Hpid] [-l] [-n] [-p] [-u] [-G|-U] [pid|user]

或

    pstree -V

参数说明：

- -a 显示该行程的完整指令及参数, 如果是被记忆体置换出去的行程则会加上括号
- -c 如果有重覆的行程名, 则分开列出（预设值是会在前面加上 *）

### 实例

显示进程的关系

    pstree
    init-+-amd
    |-apmd
    |-atd
    |-httpd---10*[httpd]
    %pstree -p
    init(1)-+-amd(447)
    |-apmd(105)
    |-atd(339)
    %pstree -c
    init-+-amd
    |-apmd
    |-atd
    |-httpd-+-httpd
    | |-httpd
    | |-httpd
    | |-httpd
    ....
    

特别表明在运行的进程

    # pstree -apnh //显示进程间的关系

同时显示用户名称

    # pstree -u //显示用户名称