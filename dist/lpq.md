# Linux lpq命令

Linux lpq命令用于查看一个打印队列的状态，该程序可以查看打印机队列状态及其所包含的打印任务。

### 语法

lpq [l] [P] [user]

参数说明：

- 
-P 指定一个打印机，否则使用默认打印机或环境变量PRINTER指定的打印机
- 
-l 打印组成作业的所有文件的信息。。

### 实例

为系统默认的打印机printer的一个空队列。

    $ lpq  
    printer is ready  
    no entries 
    

如果事先并未指定打印机（使用-P选项），系统便会显示默认的打印机。如果向打印机发送打印任务，然后查看打印队列，便会看到如下列表。

    $ ls *.txt | pr -3 | lp  
    request id is printer-603 (1 file(s))  
    [me@linuxbox ~]$ lpq  
    printer is ready and printing  
    Rank    Owner   Job     File(s)                         Total Size  
    active  me      603     (stdin)        
    