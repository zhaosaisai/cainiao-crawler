# Linux sudo命令

Linux sudo命令以系统管理者的身份执行指令，也就是说，经由 sudo 所执行的指令就好像是 root 亲自执行。

使用权限：在 /etc/sudoers 中有出现的使用者。

### 语法

    sudo -V

    sudo -h

    sudo -l

    sudo -v

    sudo -k

    sudo -s

    sudo -H

    sudo [ -b ] [ -p prompt ] [ -u username/#uid] -s

    sudo command

参数说明：

- -V 显示版本编号
- -h 会显示版本编号及指令的使用方式说明
- -l 显示出自己（执行 sudo 的使用者）的权限
- -v 因为 sudo 在第一次执行时或是在 N 分钟内没有执行（N 预设为五）会问密码，这个参数是重新做一次确认，如果超过 N 分钟，也会问密码
- -k 将会强迫使用者在下一次执行 sudo 时问密码（不论有没有超过 N 分钟）
- -b 将要执行的指令放在背景执行
- -p prompt 可以更改问密码的提示语，其中 %u 会代换为使用者的帐号名称， %h 会显示主机名称
- -u username/#uid 不加此参数，代表要以 root 的身份执行指令，而加了此参数，可以以 username 的身份执行指令（#uid 为该 username 的使用者号码）
- -s 执行环境变数中的 SHELL 所指定的 shell ，或是 /etc/passwd 里所指定的 shell
- -H 将环境变数中的 HOME （家目录）指定为要变更身份的使用者家目录（如不加 -u 参数就是系统管理者 root ）
- command 要以系统管理者身份（或以 -u 更改为其他人）执行的指令

### 实例

sudo命令使用

    $ sudo ls
    [sudo] password for hnlinux: 
    hnlinux is not in the sudoers file. This incident will be reported.
    

指定用户执行命令

    # sudo -u userb ls -l

显示sudo设置

    $ sudo -L //显示sudo设置
    Available options in a sudoers ``Defaults'' line:
    
    syslog: Syslog facility if syslog is being used for logging
    syslog_goodpri: Syslog priority to use when user authenticates successfully
    syslog_badpri: Syslog priority to use when user authenticates unsuccessfully
    long_otp_prompt: Put OTP prompt on its own line
    ignore_dot: Ignore '.' in $PATH
    mail_always: Always send mail when sudo is run
    mail_badpass: Send mail if user authentication fails
    mail_no_user: Send mail if the user is not in sudoers
    mail_no_host: Send mail if the user is not in sudoers for this host
    mail_no_perms: Send mail if the user is not allowed to run a command
    tty_tickets: Use a separate timestamp for each user/tty combo
    lecture: Lecture user the first time they run sudo
    lecture_file: File containing the sudo lecture
    authenticate: Require users to authenticate by default
    root_sudo: Root may run sudo
    log_host: Log the hostname in the (non-syslog) log file
    log_year: Log the year in the (non-syslog) log file
    shell_noargs: If sudo is invoked with no arguments, start a shell
    set_home: Set $HOME to the target user when starting a shell with -s
    always_set_home: Always set $HOME to the target user's home directory
    path_info: Allow some information gathering to give useful error messages
    fqdn: Require fully-qualified hostnames in the sudoers file
    insults: Insult the user when they enter an incorrect password
    requiretty: Only allow the user to run sudo if they have a tty
    env_editor: Visudo will honor the EDITOR environment variable
    rootpw: Prompt for root's password, not the users's
    runaspw: Prompt for the runas_default user's password, not the users's
    targetpw: Prompt for the target user's password, not the users's
    use_loginclass: Apply defaults in the target user's login class if there is one
    set_logname: Set the LOGNAME and USER environment variables
    stay_setuid: Only set the effective uid to the target user, not the real uid
    preserve_groups: Don't initialize the group vector to that of the target user
    loglinelen: Length at which to wrap log file lines (0 for no wrap)
    timestamp_timeout: Authentication timestamp timeout
    passwd_timeout: Password prompt timeout
    passwd_tries: Number of tries to enter a password
    umask: Umask to use or 0777 to use user's
    logfile: Path to log file
    mailerpath: Path to mail program
    mailerflags: Flags for mail program
    mailto: Address to send mail to
    mailfrom: Address to send mail from
    mailsub: Subject line for mail messages
    badpass_message: Incorrect password message
    timestampdir: Path to authentication timestamp dir
    timestampowner: Owner of the authentication timestamp dir
    exempt_group: Users in this group are exempt from password and PATH requirements
    passprompt: Default password prompt
    passprompt_override: If set, passprompt will override system prompt in all cases.
    runas_default: Default user to run commands as
    secure_path: Value to override user's $PATH with
    editor: Path to the editor for use by visudo
    listpw: When to require a password for 'list' pseudocommand
    verifypw: When to require a password for 'verify' pseudocommand
    noexec: Preload the dummy exec functions contained in 'noexec_file'
    noexec_file: File containing dummy exec functions
    ignore_local_sudoers: If LDAP directory is up, do we ignore local sudoers file
    closefrom: File descriptors >= %d will be closed before executing a command
    closefrom_override: If set, users may override the value of `closefrom' with the -C option
    setenv: Allow users to set arbitrary environment variables
    env_reset: Reset the environment to a default set of variables
    env_check: Environment variables to check for sanity
    env_delete: Environment variables to remove
    env_keep: Environment variables to preserve
    role: SELinux role to use in the new security context
    type: SELinux type to use in the new security context
    askpass: Path to the askpass helper program
    env_file: Path to the sudo-specific environment file
    sudoers_locale: Locale to use while parsing sudoers
    visiblepw: Allow sudo to prompt for a password even if it would be visisble
    pwfeedback: Provide visual feedback at the password prompt when there is user input
    fast_glob: Use faster globbing that is less accurate but does not access the filesystem
    umask_override: The umask specified in sudoers will override the user's, even if it is more permissive
    

以root权限执行上一条命令

    $ sudo !!

以特定用户身份进行编辑文本

    $ sudo -u uggc vi ~www/index.html
    //以 uggc 用户身份编辑  home 目录下www目录中的 index.html 文件
    

列出目前的权限

    sudo -l

列出 sudo 的版本资讯

    sudo -V