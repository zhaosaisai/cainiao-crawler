# Linux finger命令

Linux finger命令可以让使用者查询一些其他使用者的资料。会列出来的资料有：

- Login Name
- User Name
- Home directory
- Shell
- Login status
- mail status
- .plan
- .project
- .forward

其中 .plan、.project 和 .forward 就是使用者在他的 Home Directory 里的 .plan ， .project 和 .forward 等档案里的资料。如果没有就没有。finger 指令并不限定于在同一服务器上查询，也可以寻找某一个远端服务器上的使用者。只要给一个像是 E-mail address 一般的地址即可。

使用权限：所有使用者。

### 语法

    finger [options] user[@address]

参数说明：

- -l 　多行显示。
- -s 　单行显示。这个选项只显示登入名称、真实姓名、终端机名称、闲置时间、登入时间、办公室号码及电话号码。如果所查询的使用者是远端服务器的使用者，这个选项无效。

### 实例

列出当前登录用户的相关信息

    # finger -l //显示用户信息
    Login: root Name: root
    Directory: /root Shell: /bin/bash
    On since Fri Apr 9 20:17 (CST) on :0 (messages off)
    On since Fri Apr 9 20:17 (CST) on pts/1 32 days 22 hours idle
    On since Fri Apr 9 20:17 (CST) on pts/3 4 hours 5 minutes idle
    (messages off)
    On since Wed May 12 18:08 (CST) on pts/4 from 192.168.1.10
    On since Wed May 12 18:35 (CST) on pts/5 from 192.168.1.10
    7 minutes 54 seconds idle
    On since Wed May 12 14:37 (CST) on pts/2 from 192.168.1.10
    3 hours 14 minutes idle
    On since Wed May 12 14:53 (CST) on pts/7 34 minutes 25 seconds idle
    (messages off)
    On since Wed May 12 16:53 (CST) on pts/8 from 192.168.1.10
    30 minutes 18 seconds idle
    Mail last read Mon Mar 31 04:02 2008 (CST)
    No Plan.
    

显示指定用户信息

    # finger -m hnlinux

显示远程用户信息

    # finger -m root@192.168.1.13

下列指令可以查询本机管理员的资料：

    finger root

其结果如下：

    Login: root Name: root
    Directory: /root Shell: /bin/bash
    Never logged in.
    No mail.
    No Plan.
    