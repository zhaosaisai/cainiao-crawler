# Linux mren命令

Linux mren命令用于更改MS-DOS文件或目录的名称，或是移动文件或目录。

mren为MS-DOS工具指令，与DOS下的ren指令相似，可以实现更改MS-DOS文件或目录名称。

源文件必须是磁盘上已经存在的文件，若忽略盘符及路径，则表示当前盘及当前目录的文件。

新文件名是所要更换的文件名称。新文件名称前不可以加与源文件不同的盘符及路径，因为该命令只能更改同一盘上的文件名称。

### 语法

    mren [源文件或目录...][目标文件或目录]

参数说明：

- 
[源文件或目录…]：
执行操作的源文件名或者源文件路径

[目标文件或目录]：
执行操作的目标文件名或者目标文件路径

### 实例

使用指令mren将a盘下的文件"autorun.bat"的文件名修改为"auto.bat"，输入如下命令：

    $ mren a:\autorun.bat auto.bat  
    #将文件autorun.bat重命名为auto.bat  
    

使用该命令前后使用mdir命令查看并对比，得到结果如下：

    $ mdir -/ a:\*                  #查看a盘中的文件  
    Volume in drive A has no label  #加载信息  
    Volume Serial Number is 13D2~055C  
    Directory for A:\                   #以下为目录信息  
    ./TEST  2011-08-23 16:59       #文件名，目录大小，修改时间  
    AUTORUN.BAT 43 2011-08-23 16:56  
    3 files 308 bytes                   #统计总大小  
    724 325 bytes free              #剩余空间  
    #将文件autorun.bat重命名为auto.bat  
    $ mren a:\autorun.bat auto.bat        
    $ mdir -/ a:\*                  #再次查看a盘中文件  
    Volume in drive A has no label      #加载信息  
    Volume Serial Number is 13D2~055C  
    Directory for A:\                   #以下为目录信息  
    ./TEST  2011-08-23 16:59       #文件名目录大小 修改时间  
    #文件名被改为auto.bat，修改时间改为当前系统时间  
    AUTO.BAT 43 2011-08-23 16:56          
    3 files 308 bytes                   #统计总大小  
    724 325 bytes free              #剩余空间  
    