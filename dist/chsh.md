# Linux chsh命令

Linux chsh命令用于更改使用者 shell 设定。

使用权限：所有使用者。

### 语法

    shell>> chsh

### 实例

    shell>> chsh
    Changing fihanging shell for user1
    Password: [del]
    New shell [/bin/tcsh]: ### [是目前使用的 shell]
    [del]
    shell>> chsh -l ### 展示 /etc/shells 档案内容
    /bin/bash
    /bin/sh
    /bin/ash
    /bin/bsh
    /bin/tcsh
    /bin/csh
    

改变当前的shell。当前的shell 设置为//bin/bash，通过chsh命令，改变shell的设置/bin/csh。

    # chsh
    Changing shell for root.
    New shell [/bin/bash]: /bin/csh //输入新的shell地址
    Shell changed.
    

通过 -s 参数改变当前的shell设置

    # chsh -s /bin/csh //改变当前设置为 /bin/csh
    Changing shell for root.
    Shell not changed.
    