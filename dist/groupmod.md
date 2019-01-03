# Linux groupmod命令

Linux groupmod命令用于更改群组识别码或名称。

需要更改群组的识别码或名称时，可用groupmod指令来完成这项工作。

### 语法

    groupmod [-g ][-n ][群组名称]

参数：

- -g  　设置欲使用的群组识别码。
- -o 　重复使用群组识别码。
- -n  　设置欲使用的群组名称。

### 实例

修改组名

    [root@w3cschool.cc ~]# groupadd linuxso 
    [root@w3cschool.cc ~]# tail -1 /etc/group 
    linuxso:x:500: 
    [root@w3cschool.cc ~]# tail -1 /etc/group 
    linuxso:x:500: 
    [root@w3cschool.cc ~]# groupmod -n linux linuxso 
    [root@w3cschool.cc ~]# tail -1 /etc/group 
    linux:x:500:
    