# Linux lpr命令

lpr(line printer，按行打印)实用程序用来将一个或多个文件放入打印队列等待打印。

lpr 可以用来将料资送给本地或是远端的主机来处理。

### 语法

    lpr [ -P printer ]

参数：

- -p Printer: 将资料送至指定的打印机 Printer，预设值为 lp。

### 实例

下面的命令行将在名为mailroom的打印机上打印report文件：

    $ lpr -P mailroom report 

使用一条打印命令可打印多个文件，下面的命令行在名为laser1的打印机上打印3个文件：

    $ lpr -P laser1 05.txt 108.txt 12.txt 
    