# Linux telnet命令

Linux telnet命令用于远端登入。

执行telnet指令开启终端机阶段作业，并登入远端主机。

### 语法

    telnet [-8acdEfFKLrx][-b][-e][-k][-l][-n][-S][-X][主机名称或IP地址]

参数说明：

- -8   允许使用8位字符资料，包括输入与输出。
- -a   尝试自动登入远端系统。
- -b   使用别名指定远端主机名称。
- -c   不读取用户专属目录里的.telnetrc文件。
- -d   启动排错模式。
- -e   设置脱离字符。
- -E   滤除脱离字符。
- -f   此参数的效果和指定"-F"参数相同。
- -F   使用Kerberos V5认证时，加上此参数可把本地主机的认证数据上传到远端主机。
- -k   使用Kerberos认证时，加上此参数让远端主机采用指定的领域名，而非该主机的域名。
- -K   不自动登入远端主机。
- -l   指定要登入远端主机的用户名称。
- -L   允许输出8位字符资料。
- -n   指定文件记录相关信息。
- -r   使用类似rlogin指令的用户界面。
- -S   设置telnet连线所需的IP TOS信息。
- -x   假设主机有支持数据加密的功能，就使用它。
- -X   关闭指定的认证形态。

### 实例

登录远程主机

    # telnet 192.168.0.5 
    
    //登录IP为 192.168.0.5 的远程主机