# Linux netstat命令

Linux netstat命令用于显示网络状态。

利用netstat指令可让你得知整个Linux系统的网络情况。

### 语法

    netstat [-acCeFghilMnNoprstuvVwx][-A][--ip]

参数说明：

- -a或--all   显示所有连线中的Socket。
- -A或--   列出该网络类型连线中的相关地址。
- -c或--continuous   持续列出网络状态。
- -C或--cache   显示路由器配置的快取信息。
- -e或--extend   显示网络其他相关信息。
- -F或--fib   显示FIB。
- -g或--groups   显示多重广播功能群组组员名单。
- -h或--help   在线帮助。
- -i或--interfaces   显示网络界面信息表单。
- -l或--listening   显示监控中的服务器的Socket。
- -M或--masquerade   显示伪装的网络连线。
- -n或--numeric   直接使用IP地址，而不通过域名服务器。
- -N或--netlink或--symbolic   显示网络硬件外围设备的符号连接名称。
- -o或--timers   显示计时器。
- -p或--programs   显示正在使用Socket的程序识别码和程序名称。
- -r或--route   显示Routing Table。
- -s或--statistice   显示网络工作信息统计表。
- -t或--tcp   显示TCP传输协议的连线状况。
- -u或--udp   显示UDP传输协议的连线状况。
- -v或--verbose   显示指令执行过程。
- -V或--version   显示版本信息。
- -w或--raw   显示RAW传输协议的连线状况。
- -x或--unix   此参数的效果和指定"-A unix"参数相同。
- --ip或--inet   此参数的效果和指定"-A inet"参数相同。

### 实例

显示详细的网络状况

    # netstat -a

显示当前户籍UDP连接状况

    # netstat -nu

显示UDP端口号的使用情况

    # netstat -apu
    Active Internet connections (servers and established)
    Proto Recv-Q Send-Q Local Address        Foreign Address       State    PID/Program name  
    udp    0   0 *:32768           *:*                   -          
    udp    0   0 *:nfs            *:*                   -          
    udp    0   0 *:641            *:*                   3006/rpc.statd   
    udp    0   0 192.168.0.3:netbios-ns   *:*                   3537/nmbd      
    udp    0   0 *:netbios-ns        *:*                   3537/nmbd      
    udp    0   0 192.168.0.3:netbios-dgm   *:*                   3537/nmbd      
    udp    0   0 *:netbios-dgm        *:*                   3537/nmbd      
    udp    0   0 *:tftp           *:*                   3346/xinetd     
    udp    0   0 *:999            *:*                   3366/rpc.rquotad  
    udp    0   0 *:sunrpc          *:*                   2986/portmap    
    udp    0   0 *:ipp            *:*                   6938/cupsd     
    udp    0   0 *:1022           *:*                   3392/rpc.mountd   
    udp    0   0 *:638            *:*                   3006/rpc.statd
    

显示网卡列表

    # netstat -i
    Kernel Interface table
    Iface    MTU Met  RX-OK RX-ERR RX-DRP RX-OVR  TX-OK TX-ERR TX-DRP TX-OVR Flg
    eth0    1500  0  181864   0   0   0  141278   0   0   0 BMRU
    lo    16436  0   3362   0   0   0   3362   0   0   0 LRU
    

显示组播组的关系

    # netstat -g
    IPv6/IPv4 Group Memberships
    Interface    RefCnt Group
    --------------- ------ ---------------------
    lo       1   ALL-SYSTEMS.MCAST.NET
    eth0      1   ALL-SYSTEMS.MCAST.NET
    lo       1   ff02::1
    eth0      1   ff02::1:ff0a:b0c
    eth0      1   ff02::1
    

显示网络统计信息

    # netstat -s
    Ip:
      184695 total packets received
      0 forwarded
      0 incoming packets discarded
      184687 incoming packets delivered
      143917 requests sent out
      32 outgoing packets dropped
      30 dropped because of missing route
    Icmp:
      676 ICMP messages received
      5 input ICMP message failed.
      ICMP input histogram:
        destination unreachable: 44
        echo requests: 287
        echo replies: 345
      304 ICMP messages sent
      0 ICMP messages failed
      ICMP output histogram:
        destination unreachable: 17
        echo replies: 287
    Tcp:
      473 active connections openings
      28 passive connection openings
      4 failed connection attempts
      11 connection resets received
      1 connections established
      178253 segments received
      137936 segments send out
      29 segments retransmited
      0 bad segments received.
      336 resets sent
    Udp:
      5714 packets received
      8 packets to unknown port received.
      0 packet receive errors
      5419 packets sent
    TcpExt:
      1 resets received for embryonic SYN_RECV sockets
      ArpFilter: 0
      12 TCP sockets finished time wait in fast timer
      572 delayed acks sent
      3 delayed acks further delayed because of locked socket
      13766 packets directly queued to recvmsg prequeue.
      1101482 packets directly received from backlog
      19599861 packets directly received from prequeue
      46860 packets header predicted
      14541 packets header predicted and directly queued to user
      TCPPureAcks: 12259
      TCPHPAcks: 9119
      TCPRenoRecovery: 0
      TCPSackRecovery: 0
      TCPSACKReneging: 0
      TCPFACKReorder: 0
      TCPSACKReorder: 0
      TCPRenoReorder: 0
      TCPTSReorder: 0
      TCPFullUndo: 0
      TCPPartialUndo: 0
      TCPDSACKUndo: 0
      TCPLossUndo: 0
      TCPLoss: 0
      TCPLostRetransmit: 0
      TCPRenoFailures: 0
      TCPSackFailures: 0
      TCPLossFailures: 0
      TCPFastRetrans: 0
      TCPForwardRetrans: 0
      TCPSlowStartRetrans: 0
      TCPTimeouts: 29
      TCPRenoRecoveryFail: 0
      TCPSackRecoveryFail: 0
      TCPSchedulerFailed: 0
      TCPRcvCollapsed: 0
      TCPDSACKOldSent: 0
      TCPDSACKOfoSent: 0
      TCPDSACKRecv: 0
      TCPDSACKOfoRecv: 0
      TCPAbortOnSyn: 0
      TCPAbortOnData: 1
      TCPAbortOnClose: 0
      TCPAbortOnMemory: 0
      TCPAbortOnTimeout: 3
      TCPAbortOnLinger: 0
      TCPAbortFailed: 3
      TCPMemoryPressures: 0
    

显示监听的套接口

    # netstat -l
    Active Internet connections (only servers)
    Proto Recv-Q Send-Q Local Address        Foreign Address       State   
    tcp    0   0 *:32769           *:*             LISTEN   
    tcp    0   0 *:nfs            *:*             LISTEN   
    tcp    0   0 *:644            *:*             LISTEN   
    tcp    0   0 *:1002           *:*             LISTEN   
    tcp    0   0 *:netbios-ssn        *:*             LISTEN   
    tcp    0   0 *:sunrpc          *:*             LISTEN   
    tcp    0   0 vm-dev:ipp         *:*             LISTEN   
    tcp    0   0 *:telnet          *:*             LISTEN   
    tcp    0   0 *:601            *:*             LISTEN   
    tcp    0   0 *:microsoft-ds       *:*             LISTEN   
    tcp    0   0 *:http           *:*             LISTEN   
    tcp    0   0 *:ssh            *:*             LISTEN   
    tcp    0   0 *:https           *:*             LISTEN   
    udp    0   0 *:32768           *:*                   
    udp    0   0 *:nfs            *:*                   
    udp    0   0 *:641            *:*                   
    udp    0   0 192.168.0.3:netbios-ns   *:*                   
    udp    0   0 *:netbios-ns        *:*                   
    udp    0   0 192.168.0.3:netbios-dgm   *:*                   
    udp    0   0 *:netbios-dgm        *:*                   
    udp    0   0 *:tftp           *:*                   
    udp    0   0 *:999            *:*                   
    udp    0   0 *:sunrpc          *:*                   
    udp    0   0 *:ipp            *:*                   
    udp    0   0 *:1022           *:*                   
    udp    0   0 *:638            *:*                   
    Active UNIX domain sockets (only servers)
    Proto RefCnt Flags    Type    State     I-Node Path
    unix 2   [ ACC ]   STREAM   LISTENING   10621 @/tmp/fam-root-
    unix 2   [ ACC ]   STREAM   LISTENING   7096  /var/run/acpid.socket
    unix 2   [ ACC ]   STREAM   LISTENING   9792  /tmp/.gdm_socket
    unix 2   [ ACC ]   STREAM   LISTENING   9927  /tmp/.X11-unix/X0
    unix 2   [ ACC ]   STREAM   LISTENING   10489 /tmp/ssh-lbUnUf4552/agent.4552
    unix 2   [ ACC ]   STREAM   LISTENING   10558 /tmp/ksocket-root/kdeinit__0
    unix 2   [ ACC ]   STREAM   LISTENING   10560 /tmp/ksocket-root/kdeinit-:0
    unix 2   [ ACC ]   STREAM   LISTENING   10570 /tmp/.ICE-unix/dcop4664-1270815442
    unix 2   [ ACC ]   STREAM   LISTENING   10843 /tmp/.ICE-unix/4735
    unix 2   [ ACC ]   STREAM   LISTENING   10591 /tmp/ksocket-root/klauncherah3arc.slave-socket
    unix 2   [ ACC ]   STREAM   LISTENING   7763  /var/run/iiim/.iiimp-unix/9010
    unix 2   [ ACC ]   STREAM   LISTENING   11047 /tmp/orbit-root/linc-1291-0-1e92c8082411
    unix 2   [ ACC ]   STREAM   LISTENING   11053 /tmp/orbit-root/linc-128e-0-dc070659cbb3
    unix 2   [ ACC ]   STREAM   LISTENING   8020  /var/run/dbus/system_bus_socket
    unix 2   [ ACC ]   STREAM   LISTENING   58927 /tmp/mcop-root/vm-dev-2c28-4beba75f
    unix 2   [ ACC ]   STREAM   LISTENING   7860  /tmp/.font-unix/fs7100
    unix 2   [ ACC ]   STREAM   LISTENING   7658  /dev/gpmctl
    unix 2   [ ACC ]   STREAM   LISTENING   10498 @/tmp/dbus-s2MLJGO5Ci
    