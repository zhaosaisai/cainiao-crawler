# Linux bc 命令

bc 命令是任意精度计算器语言，通常在linux下当计算器用。

它类似基本的计算器, 使用这个计算器可以做基本的数学运算。

**常用的运算：**

- 
+ 加法
- 
- 减法
- 
* 乘法
- 
/ 除法
- 
^ 指数
- 
% 余数

### 语法

    bc(选项)(参数)
    

选项值

- 
-i：强制进入交互式模式；
-  -l：定义使用的标准数学库
- ； -w：对POSIX bc的扩展给出警告信息；
-  -q：不打印正常的GNU bc环境信息；
-  -v：显示指令版本信息；
-  -h：显示指令的帮助信息。

参数

文件：指定包含计算任务的文件。

### 实例

    $ bc
    bc 1.06.95
    Copyright 1991-1994, 1997, 1998, 2000, 2004, 2006 Free Software Foundation, Inc.
    This is free software with ABSOLUTELY NO WARRANTY.
    For details type `warranty'.
    2+3
    5
    5-2
    3
    2+3*1
    5
    

输入 quit 退出。

**通过管道符**

    $ echo "15+5" | bc
    20
    

scale=2  设小数位，2 代表保留两位:

    $ echo 'scale=2; (2.777 - 1.4744)/1' | bc
    1.30
    

bc 除了 scale 来设定小数位之外，还有 ibase 和 obase 来其它进制的运算:

    $ echo "ibase=2;111" |bc
    7
    

进制转换

    #!/bin/bash
    
    abc=192 
    echo "obase=2;$abc" | bc
    
        
        
        执行结果为：11000000，这是用bc将十进制转换成二进制。
        
            
            #!/bin/bash 
            
            abc=11000000 
            echo "obase=10;ibase=2;$abc" | bc
            
        
        
        执行结果为：192，这是用bc将二进制转换为十进制。
        
         计算平方和平方根： 
        
            $ echo "10^10" | bc 
            10000000000
            $ echo "sqrt(100)" | bc
            10
            
        
        
    
    