---
layout: "post"
title: "sparsebundle 사이즈 변경"
date: "2017-05-22 14:38"
tags:
 - study
---

sparsebundle의 크기를 변경하는 일반적인 방법은 disk utility를 통하는 것이다.

disk utility를 열고 상단 메뉴 탭의 이미지 > 크기 조절을 눌러서 원하는 크기로 변경하면 된다.

하지만 이번에는 변경할 수 없다는 답을 받았다… 건방진 du

그래서 터미널로 해결했다.

`hdiutil resize -size 120g ~/documents/image.sparsebundle`

08년 팁이지만 지금도 잘 작동한다. Sierra 10.12.5

- - -

via [Ray's weblog](https://ep1curus.wordpress.com/2008/12/16/resize-a-sparse-bundle-image-using-terminal/)
