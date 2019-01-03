# Linux swapon命令

Linux swapon命令用于激活Linux系统中交换空间，Linux系统的内存管理必须使用交换区来建立虚拟内存。

### 语法

    /sbin/swapon -a [-v]
    /sbin/swapon [-v] [-p priority] specialfile ...
    /sbin/swapon [-s]
    

参数说明：

- -h 请帮帮我
- -V 显示版本讯息
- -s 显示简短的装置讯息
- -a 自动启动所有SWAP装置
- -p 设定优先权，你可以在0到32767中间选一个数字给他。或是在 /etc/fstab 里面加上 pri=[value] ([value]就是0~32767中间一个数字)，然后你就可以很方便的直接使用 swapon -a 来启动他们，而且有优先权设定。

swapon 是开启swap.

相对的,便有一个关闭swap的指令,swapoff.