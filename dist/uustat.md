# Linux uustat命令

Linux uustat命令用于显示UUCP目前的状况。

执行uucp与uux指令后，会先将工作送到队列，再由uucico来执行工作。uustat可显示，删除或启动队列中等待执行的工作。

### 语法

    uustat [-aeiKmMNpqQRv][-B][-c][-C][-I][-k][-o][-r][-s][-S][-u][-U][-W][-y][-x][--help]

参数说明：

- -a或-all   显示全部的UUCP工作。
- -B或--mail-lines   与-M或-N参数一并使用，用来指定邮件中要包含多少行的信息。
- -c或--command   显示与有关的工作。
- -C或--not-command   显示与无关的工作。
- -e或--executions   仅显示待执行的工作。
- -i或--prompt   针对队列中的每项工作，询问使用是否要删除工作。
- -I或--config   指定配置文件。
- -k或--kill   删除指定的工作。
- -m或--status   删除全部的工作。
- -M或-mail   将状态信息邮寄给UUCP管理员。
- -N或--notify   将状态信息分别邮寄给提出该项工作的用户。
- -o或--older-than   显示超过指定时数的工作。
- -p或--ps   显示负责UUCP锁定的程序。
- -q或--list   显示每台远端主机上所要执行工作的状态。
- -Q或--no-list   不显示工作。
- -r或--rejuvenate   重新启动指定的工作。
- -R或--rejuvenate-all   重新启动全部的工作。
- -s或--system   显示与有关的工作。
- -S或--not-system   显示与无关的工作。
- -v或--version   显示版本信息。
- -u或--user   显示与有关的工作。
- -U或--not-user   显示与无关的工作。
- -W或--comment   要放在邮件信息中的附注。
- -y或--younger-than   显示低于指定时数的工作。
- -x或--debug   指定排错层级。
- --help   显示帮助。

### 实例

显示所有任务

    # uustat -a

显示等待的任务

    # uustat -e