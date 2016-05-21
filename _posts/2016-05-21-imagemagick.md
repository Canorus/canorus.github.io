---
layout: post
title: OS X에서 사진 이어 붙이기
published: true
---
블로깅을 하다보면 왕왕 사진을 이어붙여야 하는 경우가 있습니다. 정교하게 이어붙여야 하는 경우라면 포토샵을 켜지만 자체로 온전한 스크린 샷을 단순히 이어붙이기 위해서 포토샵을 열고 작업하는 건 억울한 감이 없지 않아 있습니다.

필요는 검색의 어머니(?)라고, 뭔가 다른 방법이 있을 것 같아 구글을 검색해 보았습니다. 그리고 그 결과물을 글로 정리보았습니다. 요약하자면 Homebrew를 통해 Imagemagick 이라는 패키지를 사용하여 사진을 이어 붙이는 방법입니다.[^1] 아마 맥을 오래 쓰신 분은 이 정도만으로 어떻게 해야 할 지 감을 잡으셨을거라 생각합니다.

[^1]: Homebrew 외에도 MacPorts로 설치할 수 있습니다. [링크](http://www.imagemagick.org/script/binary-releases.php)

## Homebrew를 설치해줍니다.

우선 [OS X 10.11 엘 캐피탄에 '홈브류(Homebrew)'를 설치하는 방법](http://macnews.tistory.com/3728)을 참고하여 Homebrew를 설치해줍니다. 이미 설치되어 있으시다면 넘어가셔도 좋습니다. 이 기회에 홈브류와 기타 패키지를 업데이트 해주셔도 좋겠습니다. 터미널에서 `brew update` 와 `brew upgrade` 를 입력하고 return을 눌러주시면 됩니다.

## Imagemagick을 설치합니다

![installation](/Resources/2016-05-21/installation.png)

터미널에서 `brew install imagemagick`을 입력하여 Imagemagick을 설치합니다. 이미지를 다루는 패키지인데 이번에는 `convert` 명령어만을 이용합니다. 나머지 사항은 [Imagemagick 페이지](http://www.imagemagick.org/script/index.php)에서 확인하실 수 있습니다. 

## 터미널을 열고 이미지가 있는 경로로 이동합니다

터미널에서 `convert` 명령어를 사용합니다. 그 전에 이미지가 있는 경로로 이동합니다. 예시에서는 바탕화면에 imagemagick이라는 폴더를 만들고 안에 이미지를 담아두었습니다. 따라서 이동 명령어는 `cd Desktop/imagemagick`이 됩니다. 여기서는 대소문자를 구별하지 않습니다.

![](/Resources/2016-05-21/conversion.png)

## 사진을 이어 붙여줍니다

명령어는 `convert +append {사진1.png} {사진2.png} {만들어지는사진이름.png}` 또는 `convert -append {사진1.png} {사진2.png} {만들어지는사진이름.png}` 입니다. 몇가지 유의하실 사항을 적어둡니다.

- `+append`는 좌우로, `-append`는 위아래로 붙이는 명령어업니다.
- `+append`의 경우 좌에서 우로, `-append`는 위에서 아래로 붙게 됩니다.
- `png`와 `jpg`의 혼합도 가능합니다. ex. `convert +append 1.jpg 2.png 3.tiff`
- 여러장 이어붙이기도 가능합니다. 마지막에 오는 파일명이 만들어지는 파일이 됩니다.
- 대소문자 구별하지 않습니다. 하지만 타이핑의 귀찮음과 오타를 피하기 위해 기존 사진 명은 짧게 하시는 걸 권장합니다.
- 기계적으로 이어붙이는 것이기 때문에 스크린샷을 찍을 때에는 배경의 그림자를 빼고 찍는 기술이 유효합니다. `(cmd + shift + 3/4) + space` 를 사용하시는 경우에 `option`을 누르고 클릭하면 배경의 그림자를 제거한 스크린샷을 찍을 수 있습니다.

![appendplus](/Resources/2016-05-21/appendplus.png)*+append* ![appendminus](/Resources/2016-05-21/appendminus.png)*-append*

- - -

#### via

- [OS X 10.11 엘 캐피탄에 '홈브류(Homebrew)'를 설치하는 방법](http://macnews.tistory.com/3728) from [Back to the Mac](http://macnews.tistory.com)
- [Imagemagick](http://www.imagemagick.org/script/index.php)

- - -
