# Linux adduser命令

Linux adduser命令用于新增使用者帐号或更新预设的使用者资料。

adduser 与 useradd 指令为同一指令（经由符号连结 symbolic link）。

使用权限：系统管理员。

adduser是增加使用者。相对的，也有删除使用者的指令，userdel。语法:userdel [login ID]

### 语法

    adduser [-c comment] [-d home_dir] [-e expire_date] [-f inactive_time] [-g initial_group] [-G group[,...]] [-m [-k skeleton_dir] | -M] [-p passwd] [-s shell] [-u uid [ -o]] [-n] [-r] loginid

或

    adduser -D [-g default_group] [-b default_home] [-f default_inactive] [-e default_expire_date] [-s default_shell]

参数说明：

- -c comment 新使用者位于密码档（通常是 /etc/passwd）的注解资料
- -d home_dir 设定使用者的家目录为 home_dir ，预设值为预设的 home 后面加上使用者帐号 loginid
- -e expire_date 设定此帐号的使用期限（格式为 YYYY-MM-DD），预设值为永久有效
- -f inactive_time 范例：

### 实例

添加一个一般用户

    # useradd kk //添加用户kk

为添加的用户指定相应的用户组

    # useradd ?g root kk //添加用户kk，并指定用户所在的组为root用户组

创建一个系统用户

    # useradd ?r kk //创建一个系统用户kk

为新添加的用户指定/home目录

    # useradd-d /home/myf kk //新添加用户kk，其home目录为/home/myf
    //当用户名kk登录主机时，系统进入的默认目录为/home/myf
    