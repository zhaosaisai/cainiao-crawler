# Linux tmpwatch命令

Linux tmpwatch命令用于删除暂存文件。

执行tmpwatch指令可删除不必要的暂存文件，您可以设置文件超期时间，单位以小时计算。

### 语法

    tmpwatch [-afqv][--test][超期时间][目录...]

参数：

- -a或--all 　删除任何类型的文件。
- -f或--force 　强制删除文件或目录，其效果类似rm指令的"-f"参数。
- -q或--quiet 　不显示指令执行过程。
- -v或--verbose 　详细显示指令执行过程。
- -test 　仅作测试，并不真的删除文件或目录。

### 实例

使用指令"tmpwatch"删除目录"/tmp"中超过一天未使用的文件，输入如下命令：

    $ tmpwatch 24 /tmp/ #删除/tmp目录中超过一天未使用的文件

以上命令执行后，其执行结果如下所示：

    removing directctmp/orbit-tom if not empty 
    

注意：该指令需要root权限，因此在使用tmpwatch命令前应该使用su命令切换用户。切换管理权限操作如下所示：

    $ su                                #切换到root用户  
    口令：**********                   #输入用户密码  
    