# Linux arpwatch命令

Linux arpwatch命令用于监听网络上ARP的记录。

ARP(Address Resolution Protocol)是用来解析IP与网络装置硬件地址的协议。

arpwatch可监听区域网络中的ARP数据包并记录，同时将监听到的变化通过E-mail来报告。

### 语法

    arpwatch [-d][-f][-i][-r]

参数：

- -d   启动排错模式。
- -f   设置存储ARP记录的文件，预设为/var/arpwatch/arp.dat。
- -i   指定监听ARP的接口，预设的接口为eth0。
- -r   从指定的文件中读取ARP记录，而不是从网络上监听。
- 
-n 指定附加的本地网络

- 
-u 指定用户和用户组
- 
-e 发送邮件给指定用户，非默认的root用户
- 
-s 指定用户名作为返回地址，而不是默认的用户root

### 实例

监听网卡eth0的ARP信息

    arpwatch -i eth0
    

监听ARP的信息，将相关信息记录到相应的文件 

    # arpwatch -i eth0 -f a.log //将信息记录到a.log中
    