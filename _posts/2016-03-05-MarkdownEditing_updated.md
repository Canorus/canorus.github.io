---
layout: post
title: MarkdownEditing 플러그인 2.1.5 업데이트
tag:
 - update
---

마크다운 문법이 익숙하지 않던 시절에는 별도의 에디터가 필요했지만 어느 정도 익숙해진 지금은 가벼운 에디터가 필요하게 되었다. 에어에서는 용량 문제도 있고.

이리저리 찾다보니 자주 쓰는 에디터인 SublimeText 3에서 마크다운 플러그인MarkdownEditing을 설치해서 쓸 수 있다는 걸 알게 되었다. 이후로 마크다운으로 문서를 작성하는 경우에는 (동기화가 필요하지 않은 경우에는) 서브라임으로 작성한다. 그 마크다운 플러그인이 오늘 업데이트 되어서 내역을 남겨놓는다. <s>시간이 남으면 번역할지도</s>

MarkdownEditing
---------------

  # MarkdownEditing 2.1.5 Changelog
  
  Your _MarkdownEditing_ plugin is updated. Enjoy new version. For any type of
  feedback you can use [GitHub issues][issues].
  
  ## Bug Fixes
  
  *   "Insert References" commands get fixed. Select something and press `alt+ctrl+r`
      to try `insert_named_reference` command, and `super+ctrl+shift+r` to try
      `insert_numbered_reference`.
  *  Fix an issue that Sublime Text may freeze when searching in a large project.
  
  ## New Features
  
  *   Four new commands added to command pallete (`Paste as Link`, `Paste as Reference`,
      `Insert Named Reference`, `Insert Numbered Reference`).
  *   New command: `Paste as Inline Link`.
  *   New command: `Paste as Inline Image`, `Paste as Image`.
  *   Increment link reference defition on <kbd>Enter</kbd> (e.g. `[27]: http://www.example.org`).
  
  ## Changes
  
  *   `Paste As Reference` works differently now. Depending on whether the clipboard
      content is a valid URL, `super+ctrl+r` generates a reference on your selection
      with clipboard content as URL link or link name.
  *   `Insert Footnote` (`alt+shift+6`) now uses selected words (if any) as footnote
      marker name instead of number.
  *   Removed `Insert Named Reference` command, you are encouraged to use
      `Paste as Reference` instead.
  *   Space between two link parts will not be highlighted.
  
  [issues]: https://github.com/SublimeText-Markdown/MarkdownEditing/issues

