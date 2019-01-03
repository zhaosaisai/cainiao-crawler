# Linux dirs命令

Linux dirs命令用于显示目录记录。

显示目录堆叠中的记录。

### 语法

    dirs [+/-n -l]

参数：

- +n   显示从左边算起第n笔的目录。
- -n   显示从右边算起第n笔的目录。
- -l   显示目录完整的记录。

### 实例

列出"/home/cc/Ruijie"里所有内容的详细信息。可用如下命令。

    dir -l /home/cc/Ruijie
    

下面是显示的内容：

    $ dir -l /home/cc/Ruijie
    
    总计2168
    
    -rwxr-xr-x 1 cc cc  112876 2008-06-26 libpcap.so.0.6.2 -rwxr-xr-x 1 cc cc  737192 2008-06-26 libstdc++.so.5 -rwxr-xr-x 1 cc cc1938 2004-04-23 readme.txt
    
    -rwxr-xr-x 1 cc cc 1350772 2005-08-31 xrgsu
    