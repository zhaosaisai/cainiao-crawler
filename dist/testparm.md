# Linux testparm命令

Linux testparm命令用于测试Samba的设置是否正确无误。

执行testparm(test parameter)指令可以简单测试Samba的配置文件，假如测试结果无误，Samba常驻服务就能正确载入该设置值，但并不保证其后的操作如预期般一切正常。

### 语法

    testparm [-s][配置文件][]

参数说明：

- -s   不显示提示符号等待用户按下Enter键，就直接列出Samba服务定义信息。

### 实例

查看Ssmba配置

    # testparm     
    Load smb config files from /etc/samba/smb.conf
    Processing section '[homes]'
    Processing section '[printers]'
    Processing section '[uptech]'
    Processing section '[home]'
    Loaded services file OK.
    Server role: ROLE_STANDALONE
    Press enter to see a dump of your service definitions
          ///按下回车继续
    # Global parameters
    [global]
    workgroup = MYGROUP
    server string = Samba Server
    security = SHARE
    encrypt passwords = No
    password server = None
    log file = /var/log/samba/%m.log
    max log size = 50
    socket options = TCP_NODELAY SO_RCVBUF=8192 SO_SNDBUF=8192
    printcap name = /etc/printcap
    dns proxy = No
    idmap uid = 16777216-33554431
    idmap gid = 16777216-33554431
    cups options = raw
    
    [homes]
    comment = Home Directories
    read only = No
    browseable = No
    
    [printers]
    comment = All Printers
    path = /var/spool/samba
    printable = Yes
    browseable = No
    
    [uptech]
    comment = *
    path = /home/uptech
    read only = No
    guest ok = Yes
    
    [home]
    comment = *
    path = /home
    read only = No
    guest ok = Yes
    