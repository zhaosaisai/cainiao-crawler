# Linux getty命令

Linux getty命令用于设置终端机模式，连线速率和管制线路。

getty指令是UNIX之类操作系统启动时所必须的3个步骤之一。

### 语法

    getty [-h][-d][-r][-t][-w][终端机编号][连线速率] 或 getty [-c]
    

参数：

- -c   指定定义配置文件，预设为/etc/gettydefs。
- -d   指定组态配置文件，预设为/etc/conf.getty。
- -h   当传输速率为0时就强制断线。
- -r   设置延迟时间。
- -t   设置等待登入的时间。
- -w   设置等待回应的字符串。

### 实例

开启终端：

    # getty tty7
    