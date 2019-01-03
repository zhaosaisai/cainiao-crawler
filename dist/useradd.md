# Linux useradd命令

Linux useradd命令用于建立用户帐号。

useradd可用来建立用户帐号。帐号建好之后，再用passwd设定帐号的密码．而可用userdel删除帐号。使用useradd指令所建立的帐号，实际上是保存在/etc/passwd文本文件中。

### 语法

    useradd [-mMnr][-c ][-d ][-e ][-f ][-g ][-G ][-s ][-u ][用户帐号]

或

    useradd -D [-b][-e ][-f ][-g ][-G ][-s ]

参数说明：

- -c 　加上备注文字。备注文字会保存在passwd的备注栏位中。
- -d 　指定用户登入时的启始目录。
- -D 　变更预设值．
- -e 　指定帐号的有效期限。
- -f 　指定在密码过期后多少天即关闭该帐号。
- -g 　指定用户所属的群组。
- -G 　指定用户所属的附加群组。
- -m 　自动建立用户的登入目录。
- -M 　不要自动建立用户的登入目录。
- -n 　取消建立以用户名称为名的群组．
- -r 　建立系统帐号。
- -s　 　指定用户登入后所使用的shell。
- -u 　指定用户ID。

### 实例

添加一般用户

    # useradd tt

为添加的用户指定相应的用户组

    # useradd -g root tt

创建一个系统用户

    # useradd -r tt

为新添加的用户指定home目录

    # useradd -d /home/myd tt

建立用户且制定ID

    # useradd caojh -u 544