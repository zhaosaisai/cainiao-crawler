# Linux mtype命令

mtype为mtools工具指令，模拟MS-DOS的type指令，可显示MS-DOS文件的内容。

### 语法

    mtype [-st][文件]

参数说明：

- -s   去除8位字符码集的第一个位，使它兼容于7位的ASCII。
- -t   将MS-DOS文本文件中的"换行+光标移至行首"字符转换成Linux的换行字符。

### 实例

打开名为dos.txt 的MS-DOS文件可使用如下命令：

    mtype dos.txt         #打开MS-DOS 文件 
    

显示结果如下：

    $ mtype dos.txt #打开MS-DOS 文件  
    Linux networks are becoming more and more common, but security is often an overlooked  
    issue. Unfortunately, in today’s environment all networks are potential hacker targets,  
    from top-secret military research networks to small home LANs.  
    Linux Network Securty focuses on securing Linux in a networked environment, where the  
    security of the entire network needs to be considered rather than just isolated machines.  
    It uses a mix of theory and practicl techniques to teach administrators how to install and  
    use security applications, as well as how the applcations work and why they are necessary.  
    