# Linux mlabel命令

Linux mlabel命令用于设定磁盘的标签 (Label)。

如果磁盘上设定过标签，mlabel 会将他显示给使用者。如果没有指定新标签并且没有指定 c 或 s 选项，mlabel 会提示使用者输入新的标签。如果直接按下 Enter ，就会将原本的标签删除。

### 语法

    mlabel [-vcs] drive:[new_label]

参数说明：

- -v 更多的讯息。
- -c 清除原有的标签，不出现提示讯息。
- -s 显示目前的标签，不出现提示讯息。

### 实例

将 A 盘的标签更改为 newlabel。

    mlabel a:newlabel