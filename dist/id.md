# Linux id命令

Linux id命令用于显示用户的ID，以及所属群组的ID。

id会显示用户以及所属群组的实际与有效ID。若两个ID相同，则仅显示实际ID。若仅指定用户名称，则显示目前用户的ID。

### 语法

    id [-gGnru][--help][--version][用户名称]

参数说明：

- -g或--group 　显示用户所属群组的ID。
- -G或--groups 　显示用户所属附加群组的ID。
- -n或--name 　显示用户，所属群组或附加群组的名称。
- -r或--real 　显示实际ID。
- -u或--user 　显示用户ID。
- -help 　显示帮助。
- -version 　显示版本信息。

### 实例

显示当前用户信息

    # id //显示当前用户ID
    uid=0(root) gid=0(root) groups=0(root),1(bin),2(daemon),3(sys),4(adm),6(disk),10(wheel) context=root:system_r:unconfined_t
    

显示用户群组的ID

    # id -g
    0
    

显示所有群组的ID

    # id -g
    0 1 2 3 4 5 6 10
    

显示指定用户信息

    # id hnlinux