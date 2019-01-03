# Linux uucp命令

Linux uucp命令用于在Unix系统之间传送文件。

UUCP为Unix系统之间，通过序列线来连线的协议。uucp使用UUCP协议，主要的功能为传送文件。

### 语法

    uucp [-cCdfjmrRtvW][-g][-I][-n][-x][--help][...来源][目的]

参数说明：

- -c或--nocopy   不用将文件复制到缓冲区。
- -C或--copy   将文件复制到缓冲区。
- -d或--directiories   在传送文件时，自动在[目的]建立必要的目录。
- -f或--nodirectiories   在传送文件时，若需要在[目的]建立目录，则放弃执行该作业。
- -g或--grade   指定文件传送作业的优先顺序。
- -I或--config   指定uucp配置文件。
- -j或--jobid   显示作业编号。
- -m或--mail   作业结束后，以电子邮件报告作业是否顺利完成。
- -n或--notify   作业结束后，以电子邮件向指定的用户报告作业是否顺利完成。
- -r或--nouucico   不要立即启动uucico服务程序，仅将作业送到队列中，待稍后再执行。
- -R或--recursive   若[来源]为目录，则将整个目录包含子目录复制到[目的]。
- -t或--uuto   将最后一个参数视为"主机名!用户"。
- -v或--version   显示版本信息。
- -W或--noexpand   不要将目前所在的目录加入路径。
- -x或--debug启动指定的排错模式。
- --help   显示帮助。
- [源...]   指定源文件或路径。
- [目的]   指定目标文件或路径。

### 实例

将temp/目录下所有文件传送到远程主机localhost的uucp公共目录下的Public/目录下。在命令行中输入如下命令：

    uucp-d-R temp localhost ~/Public/ 
    

该命令通常没有输出