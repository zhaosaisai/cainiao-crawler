# Linux tftp命令

Linux tftp命令用于传输文件。

FTP让用户得以下载存放于远端主机的文件，也能将文件上传到远端主机放置。tftp是简单的文字模式ftp程序，它所使用的指令和FTP类似。

### 语法

    tftp [主机名称或IP地址]

操作说明：

- 
connect：连接到远程tftp服务器
- 
mode：文件传输模式
- 
put：上传文件
- 
get：下载文件
- 
quit：退出
- 
verbose：显示详细的处理信息
- 
trace：显示包路径
- 
status：显示当前状态信息
- 
binary：二进制传输模式
- 
ascii：ascii 传送模式
- 
rexmt：设置包传输的超时时间
- 
timeout：设置重传的超时时间
- 
help：帮助信息
- 
? ：帮助信息

### 实例

连接远程服务器"218.28.188.288"，然后使用put 命令下载其中根目录下的文件"README"，可使用命令如下：

    tftp 218.28.188.288 #连接远程服务器 
    

连接服务器之后可进行相应的操作，具体如下：

    $ tftp 218.28.188.228                      #连接远程服务器  
    tftp> ?                                    #使用？，参考帮助  
    Commands may be abbreviated. Commands are: #帮助命令列表  
    connect connect to remote tftp  
    mode set file transfer mode  
    put send file  
    get receive file  
    quit exit tftp  
    verbose toggle verbose mode  
    trace toggle packet tracing  
    status show current status  
    binary set mode to octet  
    ascii set mode to netascii  
    rexmt set per-packet retransmission timeout  
    timeout set total retransmission timeout  
    ? print help information  
    tftp>get README                             #远程下载README文件  
    getting from 218.28.188.288 to /home/cmd  
    Recived 168236 bytes in 1.5 seconds[112157 bit/s]  
    tftp>quit                                   #离开tftp 
    