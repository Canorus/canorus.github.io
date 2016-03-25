---
layout: post
title: 깃헙 블로그에서 사진이 <s>이유없이</s> 회전하는 문제
published: true
---

블로깅을 할 때면 사진이 필요한 경우가 왕왕 있다. 그런데 지난번부터 자꾸 이유없이~~사실은 이유가 있었다~~ 사진이 멋대로 회전해서 나오는 일이 생겨서 뭐가 문젠가 찾아보았다.

인터넷을 뒤지다가 [이런 글](http://gregoryhasseler.com/2015/12/09/strange-image-rotation.html)을 발견했다. 요컨데 이미지의 EXIF 메타데이터가 회전되게 되어 있다는 것. 살펴보니 제대로 나오는 사진은 EXIF orientation 값이 1(normal)로 되어 있던 반면 회전된 사진은 3(rotate 90 CW) 같이 나와 있었다. 본문에는 파이썬으로 EXIF 값을 바꾸었지만 파이썬을 다룰 줄 모르는 나는 다른 방법을 찾아야 했다.

그래서 [stackoverflow 글](http://stackoverflow.com/questions/2654281/how-to-remove-exif-data-without-recompressing-the-jpeg)에서 찾은 것이 exiftool.
HomeBrew가 설치되어 있다면 터미널에 `brew install exiftool`을 입력하여 설치할 수도 있고, 그렇지 않다면~~아마 이걸 쓰기는 귀찮지 않을까 싶기도 하지만~~ [다운로드 페이지](http://www.sno.phy.queensu.ca/~phil/exiftool/)에서 받아서 설치할 수 있다. 설치하고 나서는 조작할 파일/폴더가 있는 경로로 가서

`exiftool -메타데이터="값" 파일명`

으로 사용할 수 있다. 메타데이터의 값이 궁금하다면

`exiftool -메타데이터 파일명`

으로 사용하면 된다. 기타 자세한 사용법은 설치 후 `exiftool` 입력하면 주르륵 나오니~~좀 길다~~ 읽어보시면 쓸 수 있다.

예를 들어서 나 같은 경우는 사진을 수평으로 놓고 싶었기 때문에

`exiftool -orientation="Horizontal (normal)" 파일명.jpg`

처럼 썼다. 그 외에도 쓸모가 많은 것 같지만 아직은 써본 적이 없으므로...  

- - -

그래서 해결이 되었느냐고? 그렇지 않았다.

대체 뭐가 문제지 하다가 뒷골이 싸해지면서 로컬에 저장된 사진 원본을 열어보았다. *애초에 사진이 돌아가 있었다*.

- - -

via

- [Unexplained image rotation with Jekyll - GHB](http://gregoryhasseler.com/2015/12/09/strange-image-rotation.html)
- [How to remove EXIF data without recompressing the JPEG? - stackoverflow](http://stackoverflow.com/questions/2654281/how-to-remove-exif-data-without-recompressing-the-jpeg)
