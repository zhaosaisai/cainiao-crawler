# Linux diffstat命令

Linux diffstat命令根据diff的比较结果，显示统计数字。

diffstat读取diff的输出结果，然后统计各文件的插入，删除，修改等差异计量。

### 语法

    diff [-wV][-n ][-p ]

参数：

- -n 　指定文件名长度，指定的长度必须大于或等于所有文件中最长的文件名。
- -p 　与-n参数相同，但此处的包括了文件的路径。
- -w 　指定输出时栏位的宽度。
- -V 　显示版本信息。

### 实例

用户也可以直接使用"|"将diff指令所输出的结果直接送给diffstat指令进行统计结果的显示。

使用该指令时，若所比较的文件或者子目录不在当前目录下，则应该使用其完整路径。

将目录"test1"和"test2"下的同名文件"testf.txt"使用diff指令进行比较。然后使用diffstat指令对结果进行统计显示，输入如下命令：

    $ diff test1 test2 | diffstat   #进行比较结果的统计显示
    

注意：使用这条命令可以非常方便地实现统计显示的功能。

对于查看文件中的内容，用户可以通过指令"cat"进行查看即可，具体操作如下：

    $ cat test1/testf.txt           #查看test1/testf的内容  
    abc  
    def  
    ghi  
    jkl  
    mno  
    pqr  
    stu  
    vws  
    $ cat test2/testf.txt           #查看test2/testf的内容  
    abc  
    def  
    ghi  
    jkl  
    mno
    

从上面的文件内容显示，可以看到两个文件内容的差别。现在来运行刚才的命令，对文件比较的结果进行统计显示，结果如下：

    testfile | 2 +-             #统计信息输出显示  
    1 file changed, 1 insertion(+), 1 deletion(-)
    