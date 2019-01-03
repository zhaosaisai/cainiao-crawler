# Linux apmd命令

Linux apmd命令用于进阶电源管理服务程序。

apmd负责BIOS进阶电源管理(APM)相关的记录，警告与管理工作。

### 语法

    apmd [-u v V W][-p ][-w ]

参数：

- -p或--percentage  当电力变化的幅度超出设置的百分比变化量，即记录事件百分比变化量的预设值为5，若设置值超过100，则关闭此功能。
- -u或--utc 将BIOS时钟设为UTC，以便从悬待模式恢复时，将-u参数传送至clock或hwclock程序。
- -v或--verbose 记录所有的APM事件。
- -V或--version 显示版本信息。
- -w或--warn 当电池不在充电状态时，且电池电量低于设置的百分比值，则在syslog(2)的ALERT层记录警告信息。百分比值的预设置为10，若设置为0，则关闭此功能。
- -W或--wall 发出警告信息给所有人。

### 实例

记录所有的电源管理事件

    # apmd -v
    

设置BIOS时钟

    # apmd -utc //设置BIOS时钟为UTC 
    