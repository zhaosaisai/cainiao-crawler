# Linux setleds命令

Linux setleds命令用来设定键盘上方三个 LED 的状态。在 Linux 中，每一个虚拟主控台都有独立的设定。

### 语法

    setleds [-v] [-L] [-D] [-F] [{+|-}num] [{+|-}caps] [{+|-}scroll]

参数：

- -F：预设的选项，设定虚拟主控台的状态。
- -D：除了改变虚拟主控台的状态外，还改变预设的状态。
- -L：不改变虚拟主控台的状态，但直接改变 LED 显示的状态。这会使得 LDE 显示和目前虚拟主控台的状态不符合。我们可以在稍后用 -L 且不含其它选项的 setleds 命令回复正常状态。
- -num +num：将数字键打开或关闭。
- -caps +caps：把大小写键打开或关闭。
- -scroll +scroll：把选项键打开或关闭。

### 实例

将数字键打开，其馀二个灯关闭。

    # setleds +num -caps -scroll