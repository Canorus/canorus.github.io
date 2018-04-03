---
layout: "post"
title: "PopClip mail extension"
date: "2018-04-02 21:16"
tags:
  - AppleScript
  - study
---

PopClip의 기본 메일 익스텐션은 무조건 선택한 텍스트를 메일의 본문에 넣어버리는 *못된(?)* 습성을 가지고 있습니다. 마침 [Popclip Extension 제작 Documentation](https://github.com/pilotmoon/PopClip-Extensions#types-of-actions)을 보니 애플스크립트로도 가능하다고 해서 만들어보았습니다. 일단 소스 코드는 [Github](https://github.com/Canorus/Popclip-mail)에 올려두었으며 ~~현재 작동하는 버전은 아니고~~ *2018년 4월 3일 업데이트함* 개발자의 도움을 받아서 계속 진행할 예정입니다. 이 포스트는 그 과정 중에 배운 것을 적어보는 글입니다.

### 텍스트 이어붙이기

영어로는 concatenation이라고 하던데 한국말로는 뭐라고 하는지 정확히 모르기 때문에 그냥 *이어붙이기*라고 부르겠습니다. 파이선에서는 `+`로 됐었는데 애플스크립트에서는 `&`를 사용하는군요. 하나 배웠습니다.

```
set a to "Al "
set b to "was "
set c to "here."
set myVar to a & b & c
display dialog myVar
```
via [alvinalexander blog](https://alvinalexander.com/blog/post/mac-os-x/applescript-concatenate-strings)

### 조건문

if else 문을 쓰긴 쓰는데 if를 썼으면 end if로 닫아주어야 합니다. 한 줄로 쓸 때는 *if __(조건)__ then __(액션)__*의 꼴로 써도 되더군요.

### 변수

자바스크립트에서는 var, C언어에서는 변수 타입으로 변수 지정을 시작했었는데 애플스크립트에서는 특이하게 `set`으로 시작하더군요. `set (변수명) to (값)` 이런 식… 개인적으로 적응하기 가장 어려운 부분이었습니다.

변수할당도 `=` 기호를 쓰는 대신 `to`를 쓰고 `==` 대신에 `is equal to`를 쓰는데 읽는 입장에서야 편할지 몰라도 작성하는 입장에서는 꽤나 곤혹스럽더군요.

변수 타입을 강제로 지정할 때는 `as (변수타입)`으로 하는 모양.

### 반복문

애플스크립트의 반복문은 `repeat`으로 시작합니다.

```
repeat with chr from 1 to (get (count of character in inputText) - 2)
	if item chr of inputText is equal to "@" then set aat to 1 as boolean
	if item chr of inputText is equal to "." then set dot to 1 as boolean
end repeat
```

### 문자열과 정규식

전술했듯이 선택한 텍스트가 메일 주소 형식인지를 파악해서 다음 액션을 결정하도록 하고 싶었기 때문에 가장 유용할 법한 것은 정규식입니다. `.*@.*\.[..?]` 쯤 되려나요.

다만 아무래도 정규식을 불러오면 그만큼 자원이 더 필요하니 조금 간략화해서 `@`과 `.`가 둘 다 들어있으면 메일 주소인 걸로 합니다. 조금 더 머리를 쓰면 최상위 도메인 주소는 적어도 2글자 이상이니까 문자열의 뒤에서 2번째까지 읽어서 그 안에 `.`가 없으면 메일 주소인 걸로 해도 되겠네요.

문자열 내의 각 문자에 접근하기 위해서는 C언어와 비슷하게 `item (숫자) of (문자열 변수명)`으로 씁니다. 재밌는 건 `(숫자)`에 음수가 들어가면 뒤에서부터 세는 거라고 하는군요. [Apple Discussion](https://discussions.apple.com/thread/133465)

''는 문자열로 안 받고 ""만 문자열로 받는 듯 합니다.

### 제어문

위의 조건문과 밀접한 부분이기는 한데, 애플스크립트에는 `continue`에 상응하는 구문이 없다고 합니다. 때문에 [이런 구라 루프](https://stackoverflow.com/a/1035260)를 쓰더군요. 신선한 충격이었습니다.

### URL Scheme

[alfred-2do](https://canor.cf/2018/01/21/alfred-2do-후기/) 때 잘 써먹었었지만 macOS의 경우 `tell application "System Events" to open location "**(주소)**"` 형식을 이용해서 URL을 열 수 있습니다. 메일의 경우 URL 형식에 `mailto:`를 넣으면 기본으로 설정된 메일이 열리고 이하 내용이 수신자로 입력이 됩니다. `mailto:?body=` 라면 `=` 이하 내용이 본문에 입력됩니다.
