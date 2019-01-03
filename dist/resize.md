# Linux resize命令

Linux resize命令设置终端机视窗的大小。

执行resize指令可设置虚拟终端机的视窗大小。

### 语法

    resize [-cu][-s ]

参数：

- -c 　就算用户环境并非C Shell，也用C Shell指令改变视窗大小。
- -s  　设置终端机视窗的垂直高度和水平宽度。
- -u 　就算用户环境并非Bourne Shell，也用Bourne Shell指令改变视窗大小。

### 
实例

使用 C shell

    [root@linux runoob]# resize -c
    set noglob;
    setenv COLUMNS '99';
    setenv LINES '34';
    unset noglob;
    

使用 Bourne shell

    [root@hnlinux runoob]# resize -u
    COLUMNS=99;
    LINES=34;
    export COLUMNS LINES;
    

设置指定大小

    [root@hnlinux runoob]# resize -s 80 160