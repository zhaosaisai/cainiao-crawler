# Linux eval命令

Linux eval命令用于重新运算求出参数的内容。

eval可读取一连串的参数，然后再依参数本身的特性来执行。

### 语法

    eval [参数]

参数说明：参数不限数目，彼此之间用分号分开。

### 实例

连接多个命令

    # eval enable;ls //连接多个命令
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
    