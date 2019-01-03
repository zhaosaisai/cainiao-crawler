# Linux enable命令

Linux enable命令用于启动或关闭 shell 内建指令。

若要执行的文件名称与shell内建指令相同，可用enable -n来关闭shell内建指令。若不加-n参数，enable可重新启动关闭的指令。

### 语法

    enable [-n][-all][内建指令]

参数说明：

- -n 　关闭指定的shell内建指令。
- -all 　显示shell所有关闭与启动的指令。

### 实例

显示shell内置命令

    # enable //显示shell命令
    enable .
    enable :
    enable [
    enable alias
    enable bg
    enable bind
    enable break
    enable builtin
    enable caller
    enable cd
    enable command
    enable compgen
    enable complete
    enable compopt
    enable continue
    enable declare
    enable dirs
    enable disown
    enable echo
    enable enable
    enable eval
    enable exec
    enable exit
    enable export
    enable false
    enable fc
    enable fg
    enable getopts
    enable hash
    enable help
    enable history
    enable jobs
    enable kill
    enable let
    enable local
    enable logout
    enable mapfile
    enable popd
    enable printf
    enable pushd
    enable pwd
    enable read
    enable readarray
    enable readonly
    enable return
    enable set
    enable shift
    enable shopt
    enable source
    enable suspend
    enable test
    enable times
    enable trap
    enable true
    enable type
    enable typeset
    enable ulimit
    enable umask
    enable unalias
    enable unset
    enable wait
    