# Linux lilo命令

Linux lilo命令用于安装核心载入，开机管理程序。

lilo(linux loader)是个Linux系统核心载入程序，同时具备管理开机的功能。单独执行lilo指令，它会读取/etc/目录下的lilo.conf配置文件，然后根据其内容安装lilo。

### 语法

    lilo [-clqtV][-b][-C][-d][－D][-f][-i][-I][-m][-P][-r][-R...][-s][-S][-uU][-v...]

参数说明：

- -b 　指定安装lilo之处的外围设备代号。
- -c 　使用紧致映射模式。
- -C 　指定lilo的配置文件。
- -d 　设置开机延迟时间。
- -D 　指定开机后预设启动的操作系统，或系统核心识别标签。
- -f 　指定磁盘的几何参数配置文件。
- -i 　指定欲使用的开机磁区文件，预设是/boot目录里的boot.b文件。
- -I 　显示系统核心存放之处。
- -l 　产生线形磁区地址。
- -m 　指定映射文件。
- -P 　决定要修复或忽略分区表的错误。
- -q 　列出映射的系统核心文件。
- -r 　设置系统启动时欲挂入成为根目录的目录。
- -R 　设置下次启动系统时，首先执行的指令。
- -s 　指定备份文件。
- -S 　强制指定备份文件。
- -t 　不执行指令，仅列出实际执行会进行的动作。
- -u 　删除lilo。
- -U 　此参数的效果和指定"-u"参数类似，当不检查时间戳记。
- -v 　显示指令执行过程。
- -V 　显示版本信息。

### 实例

安装lilo到第一台SCSI硬盘的第三个主要分区，采用3级模式。

    # lilo -b /dev/sda3 -v -v -v

指定安装lilo的配置文件和备份文件。

    # lilo -C /etc/lilo.conf2 -s /boot/boot. Backup