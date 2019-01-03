# Linux mtoolstest命令

Linux mtoolstest命令用于测试并显示mtools的相关设置。

mtoolstest为mtools工具指令，可读取与分析mtools的配置文件，并在屏幕上显示结果。

### 语法

    mtoolstest

### 实例

在命令行中直接输入mtoolstest，即可显示mtools软件包当前的配置信息，结果如下：

    $ mtoolstest #显示mtools 软件包当前的配置信息  
    drive J: #mtools软件包当前的配置信息列表  
    #fn=0 mode=0 builtin  
    file="/dev/sdb4" fat_bits=16 
    tracks=0 heads=0 sectors=0 hidden=0 
    offset=0x0 
    partition=0 
    mformat_only  
    drive Z:  
    #fn=0 mode=0 builtin  
    file="/dev/sdb4" fat_bits=16 
    tracks=0 heads=0 sectors=0 hidden=0 
    offset=0x0 
    partition=0 
    mformat_only  
    drive X:  
    #fn=0 mode=0 builtin  
    file="$DISPLAY" fat_bits=0 
    tracks=0 heads=0 sectors=0 hidden=0 
    offset=0x0 
    partition=0 
    drive A:  
    #fn=2 mode=128 defined in /etc/mtools.conf  
    file="/dev/fd0" fat_bits=0 
    tracks=0 heads=0 sectors=0 hidden=0 
    offset=0x0 
    partition=0 
    exclusive  
    drive B:  
    #fn=2 mode=128 defined in /etc/mtools.conf  
    file="/dev/fd1" fat_bits=0 
    tracks=0 heads=0 sectors=0 hidden=0 
    offset=0x0 
    partition=0 
    exclusive  
    drive M:  
    #fn=2 mode=0 defined in /etc/mtools.conf  
    file="/var/lib/dosemu/hdimage.first" fat_bits=0 
    tracks=0 heads=0 sectors=0 hidden=0 
    offset=0x80 
    partition=1 
    drive N:  
    #fn=2 mode=0 defined in /etc/mtools.conf  
    file="/var/lib/dosemu/fdimage" fat_bits=0 
    tracks=0 heads=0 sectors=0 hidden=0 
    offset=0x0 
    partition=0 
    mtools_fat_compatibility=0 
    mtools_skip_check=0 
    mtools_lower_case=0 
    