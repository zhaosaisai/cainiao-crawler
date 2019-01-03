# Linux uuto命令

Linux uuto命令将文件传送到远端的UUCP主机。

uuto为script文件，它实际上会执行uucp，用来将文件传送到远端UUCP主机，并在完成工作后，以邮件通知远端主机上的用户。

### 语法

    uuto [文件][目的]

参数：

相关参数请参考 。

### 实例

将文件传送到远程UUCP主机localhost的tmp 目录，在命令提示符中直接输入如下命令：

    uuto./testfile localhost/tmp #将文件传送到远程UUCP 主机localhost的tmp目录 
    

该命令通常没有输出。