# Linux ping命令

Linux ping命令用于检测主机。

执行ping指令会使用ICMP传输协议，发出要求回应的信息，若远端主机的网络功能没有问题，就会回应该信息，因而得知该主机运作正常。

### 语法

    ping [-dfnqrRv][-c][-i][-I][-l][-p][-s][-t][主机名称或IP地址]

参数说明：

- -d   使用Socket的SO_DEBUG功能。
- -c   设置完成要求回应的次数。
- -f   极限检测。
- -i   指定收发信息的间隔时间。
- -I   使用指定的网络界面送出数据包。
- -l   设置在送出要求信息之前，先行发出的数据包。
- -n   只输出数值。
- -p   设置填满数据包的范本样式。
- -q   不显示指令执行过程，开头和结尾的相关信息除外。
- -r   忽略普通的Routing Table，直接将数据包送到远端主机上。
- -R   记录路由过程。
- -s   设置数据包的大小。
- -t   设置存活数值TTL的大小。
- -v   详细显示指令的执行过程。

### 实例

检测是否与主机连通

    # ping www.w3cschool.cc //ping主机
    PING aries.m.alikunlun.com (114.80.174.110) 56(84) bytes of data.
    64 bytes from 114.80.174.110: icmp_seq=1 ttl=64 time=0.025 ms
    64 bytes from 114.80.174.110: icmp_seq=2 ttl=64 time=0.036 ms
    64 bytes from 114.80.174.110: icmp_seq=3 ttl=64 time=0.034 ms
    64 bytes from 114.80.174.110: icmp_seq=4 ttl=64 time=0.034 ms
    64 bytes from 114.80.174.110: icmp_seq=5 ttl=64 time=0.028 ms
    64 bytes from 114.80.174.110: icmp_seq=6 ttl=64 time=0.028 ms
    64 bytes from 114.80.174.110: icmp_seq=7 ttl=64 time=0.034 ms
    64 bytes from 114.80.174.110: icmp_seq=8 ttl=64 time=0.034 ms
    64 bytes from 114.80.174.110: icmp_seq=9 ttl=64 time=0.036 ms
    64 bytes from 114.80.174.110: icmp_seq=10 ttl=64 time=0.041 ms
    
    --- aries.m.alikunlun.com ping statistics ---
    10 packets transmitted, 30 received, 0% packet loss, time 29246ms
    rtt min/avg/max/mdev = 0.021/0.035/0.078/0.011 ms
    
    //需要手动终止Ctrl+C
    

指定接收包的次数

    # ping -c 2 www.w3cschool.cc
    PING aries.m.alikunlun.com (114.80.174.120) 56(84) bytes of data.
    64 bytes from 114.80.174.120: icmp_seq=1 ttl=54 time=6.18 ms
    64 bytes from 114.80.174.120: icmp_seq=2 ttl=54 time=15.4 ms
    
    --- aries.m.alikunlun.com ping statistics ---
    2 packets transmitted, 2 received, 0% packet loss, time 1016ms
    rtt min/avg/max/mdev = 6.185/10.824/15.464/4.640 ms
    
    //收到两次包后，自动退出
    

多参数使用

    # ping -i 3 -s 1024 -t 255 g.cn //ping主机
    PING g.cn (203.208.37.104) 1024(1052) bytes of data.
    1032 bytes from bg-in-f104.1e100.net (203.208.37.104): icmp_seq=0 ttl=243 time=62.5 ms
    1032 bytes from bg-in-f104.1e100.net (203.208.37.104): icmp_seq=1 ttl=243 time=63.9 ms
    1032 bytes from bg-in-f104.1e100.net (203.208.37.104): icmp_seq=2 ttl=243 time=61.9 ms
    
    --- g.cn ping statistics ---
    3 packets transmitted, 3 received, 0% packet loss, time 6001ms
    rtt min/avg/max/mdev = 61.959/62.843/63.984/0.894 ms, pipe 2
    [root@linux ~]# 
    
    //-i 3 发送周期为 3秒 -s 设置发送包的大小 -t 设置TTL值为 255
    