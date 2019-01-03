# Linux updatedb 命令

updatedb 命令用来创建或更新 slocate/locate 命令所必需的数据库文件。

updatedb 命令的执行过程较长，因为在执行时它会遍历整个系统的目录树，并将所有的文件信息写入 slocate/locate 数据库文件中。

**注意：**slocate 本身具有一个数据库，里面存放了系统中文件与目录的相关信息。

### 语法

    updatedb(选项)

### 参数

- **-o**：忽略默认的数据库文件，使用指定的slocate数据库文件；
- **-U**：更新指定目录的slocate数据库； 
- **-v**：显示执行的详细过程。

以下实例检测一个未存在的文件 runoob.txt：

    # locate runoob.txt   # 检索 runoob.txt，没有任何输出，表示没有该文件
    # touch ./runoob.txt  # 添加文件 runoob.txt
    # locate runoob.txt   # 再次检索 runoob.txt，依然没有该文件
    # updatedb            # 更新 locate.db 数据库
    # locate runoob.txt   # 再次数据库检索 runoob.txt，找到该文件
    /root/runoob/runoob.txt

使用 **-U** 选项可以指定要更新 slocate 数据库的目录。

    updatedb -U /root/runoob/