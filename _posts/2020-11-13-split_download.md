---
layout: post
title: split_download.sh
---

우리나라는 일반적으로 인터넷 속도가 상당히 빠른 편이다. 국가 차원에서 ~~쓸 데 없이~~ 막는 곳이 많아서 문제긴 하지만 어쨌든 속도 자체는 빠르다.

하지만 인터넷에서 필요한 파일들을 다운받다보면 파일이 호스팅된 서버의 속도가 느려서 다운로드 속도가 복장터지게 하는 경우가 왕왕 있다. 또는 트래픽이 몰린다든가.

그럴 때 유용하게 썼던 앱이 바로 [downloadshuttle](https://apps.apple.com/kr/app/download-shuttle-speed-boost/id847809913?mt=12) 이다. 다운로드 링크만 따면 파일을 분할해서 받을 수 있도록 해주는 앱이다.

이 앱이 한가지 아쉬웠던 점이 맥에서만 돌아간다는 점이었다. 우분투나 윈도우에서도 사용할 수 있는 방법이 있었으면 했다. `split download` 키워드로 검색을 했더니 `curl` 명령어에서 `--range` 옵션으로 다운로드 데이터를 바이트 단위로 나눠 받을 수 있다는 것을 [알게 되었다](https://www.maketecheasier.com/split-download-large-file-curl/). 내친 김에 bash 스크립트로 작성해보자는 생각이 들었다. 나중에 알게 된 사실인데 이미 2013년에 거의 완전히 같은 코드를 작성한 [리포](https://github.com/antonyho/bash-split-download) 가 있었다는 게 함정이라면 함정이다.

일단 작성한 코드는 [Github 리포](https://github.com/Canorus/split_download) 에 올려두었다. 3.2.56(1) 버전 bash 에서 동작하는 걸 확인했고 맥의 경우 gawk 를 별도로 설치해주어야 한다.[^1] macOS 의 경우 curl 이 기본적으로 탑재되어 있으며 리눅스의 경우도 대부분 curl이 기본 탑재되어 있다.[^2]

[^1]: [homebrew](https://brew.sh/index_ko) 를 사용하여 설치하면 편하다

[^2]: `curl -v` 를 입력하여 확인할 수 있다.

[스크립트](https://raw.githubusercontent.com/Canorus/split_download/main/split_download.sh) 를 내려받고 아래처럼 사용할 수 있다. 

```
bash split_download.sh '다운로드링크'
```

쪼개는 수를 달리하고 싶은 경우에는 `'다운로드링크'c` 뒤에 쪼개고자 하는 갯수를 입력하면 된다.

```
bash split_download.sh 'https://raw.githubusercontent.com/Canorus/split_download/main/split_download.sh' 8
```

같은 경우 8개로 나눠 받은 뒤 합치게 된다. 기본값은 5개로 나눠받는다.

위에서 언급한 [2013년 코드](https://github.com/antonyho/bash-split-download) 와 다른 점은 쪼개는 갯수를 인자로 줄 수 있다는 점이다. 나머지는 스크립트가 알아서 나눠서 내려받고 병합한다. 

이래저래 bash 가지고 짱구를 굴릴 수 있어서 재밌었다. 그리고 생각보다 결과물이 빨리 튀어나와서 다행이라고 생각한다. 솔직히 여기서 이틀만 더 늘어졌어도 포기할 뻔 했다.

- - -

### 참조 페이지

- [How to Split and Download a Large File with cURL](https://www.maketecheasier.com/split-download-large-file-curl/)
- [Putting jobs in background - Linux Shell Scripting Tutorial - A Beginner's handbook](https://bash.cyberciti.biz/guide/Putting_jobs_in_background)
- [Bash For Loop 예제 :: 과학을 이해하는 개발자](https://taepcsiandwe.tistory.com/entry/Bash-For-Loop-%EC%98%88%EC%A0%9C)
- [linux - How to retrieve downloadable file size with curl command? - Unix & Linux Stack Exchange](https://unix.stackexchange.com/questions/450402/how-to-retrieve-downloadable-file-size-with-curl-command)
- [변수 할당(Variable Assignment)](http://wiki.kldp.org/HOWTO/html/Adv-Bash-Scr-HOWTO/varassignment.html)
- [Check existence of input argument in a Bash shell script - Stack Overflow](https://stackoverflow.com/questions/6482377/check-existence-of-input-argument-in-a-bash-shell-script)
- [User Input - Bash Scripting Tutorial](https://ryanstutorials.net/bash-scripting-tutorial/bash-input.php)
- [74 Bash Operators Examples – Linux Hint](https://linuxhint.com/bash_operator_examples/)
- [shell script - ") Syntax error Invalid arithmetic operator (error token is " - Unix & Linux Stack Exchange](https://unix.stackexchange.com/questions/297330/syntax-error-invalid-arithmetic-operator-error-token-is)
- [How to spawn a background process in a bash script - SysTutorials](https://www.systutorials.com/how-to-spawn-a-background-process-in-a-bash-script/)
- [perform arithmetic operations with multiple variables that contain floating point in bash - Stack Overflow](https://stackoverflow.com/questions/36306443/perform-arithmetic-operations-with-multiple-variables-that-contain-floating-poin)
- [김용환 블로그(2004-2020) :: expr & bc 명령어 (정수 및 실수 연산을 bash에서 쓰기)](https://knight76.tistory.com/entry/expr-bc-%EB%AA%85%EB%A0%B9%EC%96%B4-%EC%A0%95%EC%88%98-%EB%B0%8F-%EC%8B%A4%EC%88%98-%EC%97%B0%EC%82%B0%EC%9D%84-bash%EC%97%90%EC%84%9C-%EC%93%B0%EA%B8%B0)
- [Break and continue](https://tldp.org/LDP/Bash-Beginners-Guide/html/sect_09_05.html)
