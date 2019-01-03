# Linux alias命令

Linux alias命令用于设置指令的别名。

用户可利用alias，自定指令的别名。若仅输入alias，则可列出目前所有的别名设置。alias的效力仅及于该次登入的操作。若要每次登入是即自动设好别名，可在.profile或.cshrc中设定指令的别名。

### 语法

    alias[别名]=[指令名称]

参数说明：若不加任何参数，则列出目前所有的别名设置。

### 实例

给命令设置别名

    # alias lx=ls
    # lx
    anaconda-ks.cfg Desktop install.log install.log.syslog qte
    