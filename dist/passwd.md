# Linux passwd命令

Linux passwd命令用来更改使用者的密码

### 语法

    passwd [-k] [-l] [-u [-f]] [-d] [-S] [username]

必要参数：

- 
-d 删除密码
- 
-f 强制执行
- 
-k 更新只能发送在过期之后
- 
-l 停止账号使用
- 
-S 显示密码信息
- 
-u 启用已被停止的账户
- 
-x 设置密码的有效期
- 
-g 修改群组密码
- 
-i 过期后停止用户账号

选择参数：

- 
--help 显示帮助信息
- 
--version 显示版本信息

### 实例

修改用户密码 

    # passwd runoob  //设置runoob用户的密码
    Enter new UNIX password:  //输入新密码，输入的密码无回显
    Retype new UNIX password:  //确认密码
    passwd: password updated successfully
    # 
    

显示账号密码信息

    # passwd -S runoob
    runoob P 05/13/2010 0 99999 7 -1
    

删除用户密码

    # passwd -d lx138 
    passwd: password expiry information changed.
    