# Linux bind命令

Linux bind命令用于显示或设置键盘按键与其相关的功能。

您可以利用bind命令了解有哪些按键组合与其功能，也可以自行指定要用哪些按键组合。

### 语法

    bind [-dlv][-f ][-m ][-q ]

参数说明：

- -d 　显示按键配置的内容。
- -f 　载入指定的按键配置文件。
- -l 　列出所有的功能。
- -m 　指定按键配置。
- -q 　显示指定功能的按键。
- -v 　列出目前的按键配置与其功能。

### 实例

显示按键组合的所有功能

    # bind -l //显示按键组合的内容
    abort
    accept-line
    alias-expand-line
    arrow-key-prefix
    backward-byte
    backward-char
    backward-delete-char
    backward-kill-line
    backward-kill-word
    backward-word
    beginning-of-history
    beginning-of-line
    ……省略部分内容
    vi-goto-mark
    vi-insert-beg
    vi-insertion-mode
    vi-match
    vi-movement-mode
    vi-next-word
    vi-overstrike
    vi-overstrike-delete
    vi-prev-word
    vi-put
    vi-redo
    vi-replace
    vi-rubout
    vi-search
    vi-search-again
    vi-set-mark
    vi-subst
    vi-tilde-expand
    vi-yank-arg
    vi-yank-to
    yank
    yank-last-arg
    yank-nth-arg
    yank-pop
    

显示当前按键组合的设置

    # bind -l
    abort
    accept-line
    alias-expand-line
    arrow-key-prefix
    backward-byte
    backward-char
    backward-delete-char
    backward-kill-line
    backward-kill-word
    backward-word
    beginning-of-history
    beginning-of-line
    call-last-kbd-macro
    capitalize-word
    character-search
    character-search-backward
    clear-screen
    complete
    complete-command
    complete-filename
    complete-hostname
    complete-into-braces
    complete-username
    complete-variable
    copy-backward-word
    copy-forward-word
    copy-region-as-kill
    dabbrev-expand
    delete-char
    delete-char-or-list
    delete-horizontal-space
    digit-argument
    display-shell-version
    do-lowercase-version
    downcase-word
    dump-functions
    dump-macros
    dump-variables
    dynamic-complete-history
    edit-and-execute-command
    emacs-editing-mode
    end-kbd-macro
    end-of-history
    end-of-line
    exchange-point-and-mark
    forward-backward-delete-char
    forward-byte
    forward-char
    forward-search-history
    forward-word
    glob-complete-word
    glob-expand-word
    glob-list-expansions
    history-and-alias-expand-line
    history-expand-line
    history-search-backward
    history-search-forward
    insert-comment
    insert-completions
    insert-last-argument
    kill-line
    kill-region
    kill-whole-line
    kill-word
    magic-space
    menu-complete
    menu-complete-backward
    next-history
    non-incremental-forward-search-history
    non-incremental-forward-search-history-again
    non-incremental-reverse-search-history
    non-incremental-reverse-search-history-again
    old-menu-complete
    operate-and-get-next
    overwrite-mode
    possible-command-completions
    possible-completions
    possible-filename-completions
    possible-hostname-completions
    possible-username-completions
    possible-variable-completions
    previous-history
    quoted-insert
    redraw-current-line
    re-read-init-file
    reverse-search-history
    revert-line
    self-insert
    set-mark
    shell-backward-kill-word
    shell-backward-word
    shell-expand-line
    shell-forward-word
    shell-kill-word
    skip-csi-sequence
    start-kbd-macro
    tab-insert
    tilde-expand
    transpose-chars
    transpose-words
    tty-status
    undo
    universal-argument
    unix-filename-rubout
    unix-line-discard
    unix-word-rubout
    upcase-word
    vi-append-eol
    vi-append-mode
    vi-arg-digit
    vi-back-to-indent
    vi-bword
    vi-bWord
    vi-change-case
    vi-change-char
    vi-change-to
    vi-char-search
    vi-column
    vi-complete
    vi-delete
    vi-delete-to
    vi-editing-mode
    vi-end-word
    vi-eof-maybe
    vi-eword
    vi-eWord
    vi-fetch-history
    vi-first-print
    vi-fword
    vi-fWord
    vi-goto-mark
    vi-insert-beg
    vi-insertion-mode
    vi-match
    vi-movement-mode
    vi-next-word
    vi-overstrike
    vi-overstrike-delete
    vi-prev-word
    vi-put
    vi-redo
    vi-replace
    vi-rubout
    vi-search
    vi-search-again
    vi-set-mark
    vi-subst
    vi-tilde-expand
    vi-yank-arg
    vi-yank-to
    yank
    yank-last-arg
    yank-nth-arg
    yank-pop
    root@snail-hnlinux:~# 
    root@snail-hnlinux:~# 
    root@snail-hnlinux:~# 
    root@snail-hnlinux:~# 
    root@snail-hnlinux:~# bind -v
    set bind-tty-special-chars on
    set blink-matching-paren on
    set byte-oriented off
    set completion-ignore-case off
    set convert-meta off
    set disable-completion off
    set echo-control-characters on
    set enable-keypad off
    set enable-meta-key on
    set expand-tilde off
    set history-preserve-point off
    set horizontal-scroll-mode off
    set input-meta on
    set mark-directories on
    set mark-modified-lines off
    set mark-symlinked-directories off
    set match-hidden-files on
    set meta-flag on
    set output-meta on
    set page-completions on
    set prefer-visible-bell on
    set print-completions-horizontally off
    set revert-all-at-newline off
    set show-all-if-ambiguous off
    set show-all-if-unmodified off
    set skip-completed-text off
    set visible-stats off
    set bell-style audible
    set comment-begin #
    set completion-prefix-display-length 0
    set completion-query-items 100
    set editing-mode emacs
    set history-size 1000
    set keymap emacs
    

列出指定功能的按键和按键组合

    # bind -q abort
    //请用 调用abort “C-g”, “C-xC-g”, “eC-g”.
    
    # bind -q accept-line //列出功能“accept-line”按键以及组合按键
    //请用 调用accept-line “C-j”, “C-m”.
    