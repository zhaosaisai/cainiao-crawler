# Linux MAKEDEV命令

Linux MAKEDEV命令用于新增 /dev/ 下的装置档案，多数分区已经将所有的档案都产生，故一般而言不太会需要用到这个命令。

### 语法

    MAKEDEV -V
    MAKEDEV [ -n ] [ -v ] update
    MAKEDEV [ -n ] [ -v ] [ -d ] device ...
    