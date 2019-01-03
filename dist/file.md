# Linux file命令

Linux file命令用于辨识文件类型。

通过file指令，我们得以辨识该文件的类型。

### 语法

    file [-bcLvz][-f ][-m ...][文件或目录...]

参数：

- -b 　列出辨识结果时，不显示文件名称。
- -c 　详细显示指令执行过程，便于排错或分析程序执行的情形。
- -f 　指定名称文件，其内容有一个或多个文件名称时，让file依序辨识这些文件，格式为每列一个文件名称。
- -L 　直接显示符号连接所指向的文件的类别。
- -m 　指定魔法数字文件。
- -v 　显示版本信息。
- -z 　尝试去解读压缩文件的内容。
- [文件或目录...] 要确定类型的文件列表，多个文件之间使用空格分开，可以使用shell通配符匹配多个文件。

### 实例

显示文件类型：

    [root@localhost ~]# file install.log
    install.log: UTF-8 Unicode text
    
    [root@localhost ~]# file -b install.log      
     显示符号链接的文件类型
    
        [root@localhost ~]# ls -l /var/mail
        lrwxrwxrwx 1 root root 10 08-13 00:11 /var/mail -> spool/mail
        
        [root@localhost ~]# file /var/mail
        /var/mail: symbolic link to `spool/mail'
        
        [root@localhost ~]# file -L /var/mail
        /var/mail: directory
        
        [root@localhost ~]# file /var/spool/mail
        /var/spool/mail: directory
        
        [root@localhost ~]# file -L /var/spool/mail
        /var/spool/mail: directory
        
    
    