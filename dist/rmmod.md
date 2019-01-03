# Linux rmmod命令

Linux rmmod命令用于删除模块。

执行rmmod指令，可删除不需要的模块。Linux操作系统的核心具有模块化的特性，应此在编译核心时，务须把全部的功能都放如核心。你可以将这些功能编译成一个个单独的模块，待有需要时再分别载入它们。

### 语法

    rmmod [-as][模块名称...]

参数：

- -a 　删除所有目前不需要的模块。
- -s 　把信息输出至syslog常驻服务，而非终端机界面。

### 实例

显示已安装的模块

    # lsmod
    Module         Size Used by
    cramfs         39042 1 
    nfsd         238935 11 
    lockd         64849 1 nfsd
    nfs_acl         2245 1 nfsd
    auth_rpcgss      33735 1 nfsd
    sunrpc        193181 10 nfsd,lockd,nfs_acl,auth_rpcgss
    exportfs        3437 1 nfsd
    xt_TCPMSS        2931 0 
    xt_tcpmss        1197 0 
    xt_tcpudp        2011 0 
    iptable_mangle     2771 0 
    ip_tables        9991 1 iptable_mangle
    x_tables        14299 4 
    
    ……省略部分结果
    pppoe          8943 0 
    pppox          2074 1 pppoe
    binfmt_misc       6587 1 
    snd_ens1371      18814 0 
    gameport        9089 1 snd_ens1371
    snd_ac97_codec    100646 1 snd_ens1371
    ac97_bus        1002 1 snd_ac97_codec
    snd_pcm_oss      35308 0 
    

卸载模块

    # rmmod -v pppoe //卸载模块pppoe
    Checking ppoe for persistent data
    

安装模块

    # insmod -v pppoe >1.log //安装模块
    
    ~# tail -b 30 1.log //显示文件信息