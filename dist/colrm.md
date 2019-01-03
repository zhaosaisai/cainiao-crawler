# Linux colrm命令

Linux colrm命令用于滤掉指定的行。

colrm指令从标准输入设备读取书记，转而输出到标准输出设备。如果不加任何参数，则该指令不会过滤任何一行。

### 语法

    colrm [开始行数编号]
    参数说明：
    
    - 开始行数编号： 指定要删除的列的起始编号。
    - 结束行数编号： 指定要删除的列的结束编号，有时候这个参数可以省略。
    
    
    ### 实例
    
    不带任何参数时该命令不会删除任何列：
    
        
        colrm
        
    
    
    
    按回车键后，光标将在第一行闪烁，等待标准输入，此时输入字符，如"Hello Linux！"，再按回车键后第二行将出现与第一行相同内容，此时按Ctrl+C组合键可以退出。终端中显示的内容如下所示：
    
    
        cmd@hdd-desktop:~$ colrm  
        Hello Linux! #输入Hello Linux！字符串  
        Hello Linux! #输出刚才输入的字符串Hello Linux！ 
        
    
    
    如想要删除第4 列之后的所有内容，可以使用如下命令：
    
        colrm 4
        
    
    
    类似于上例，此时标准输入等待输入，用户输入字符串按回车键后，将输出如下结果：
    
    
        cmd@hdd-desktop:~$ colrm 4  
        Hello Linux! #输入Hello Linux！字符串  
        Hel #输出删除了第4列以后所有内容的字符串 
    
    
    删除指定列的内容。如删除第4列到第6列的内容，可使用如下命令：
    
        colrm 4 6 
        
    
    
    输出的结果如下：
    
        cmd@hdd-desktop:~$ colrm 4 6  
        Hello Linux! #输入Hello Linux！字符串  
        HelLinux! #输出删除了从第4列到第6列字符的字符串 
        
    
    