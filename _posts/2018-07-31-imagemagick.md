---
layout: post
title: imagemagick
permalink: /imagemagick
tags: 
 - study
---

![imagemagick](https://www.imagemagick.org/image/wizard.jpg){:.center-image}

[imagemagick](https://www.imagemagick.org/script/index.php)이라는 꽤 걸출한 패키지가 있습니다. 요점을 말하자면 commandline에서 이미지 수정과 관련해서 쓰는 패키지인데요. commandline인 만큼 매번 쓸 때마다 기억에 의존해서만 작업하기에 무리가 있어서 슬슬 작업한 내역에 관해서 정리를 할 필요성을 느끼고 있습니다.

### 기본

```bash
convert [input option] input.file [output option] output.file
```

### 이미지 붙이기

```
convert -append image1.png image2.jpg image3.tiff result.gif
```



input option `append`를 사용해서 이어붙일 수 있습니다. 언젠가 적었던 것 같아서 찾아보니 [2016년에 적은 글](https://canorus.github.io/2016/05/21/imagemagick/)이 있군요. `+append`는 좌우로 `-append`는 상하로 붙이게 됩니다.

### 이미지 색 변경하기

```bash
convert -fuzz 15% -fill 'color-to-change-to' -opaque 'color-to-change-from' input.file output.file
```



`opaque` 플래그와 `fill` 플래그를 이용해서 전자의 색깔을 후자로 변경할 수 있습니다. `white`나 `black` 같은 단어도 인지하고 `#434343` 이나 `rgb(254,254,254)` 처럼 hex 코드와 rgb 값도 인식합니다.

`fuzz` 플래그를 이용해서 오차 허용 범위를 지정할 수도 있습니다.

\- via [replace color in images - ImageMagick](https://www.imagemagick.org/discourse-server/viewtopic.php?t=18196)

\- via [php - How I can replace colors with Imagemagick? - Stack Overflow](https://stackoverflow.com/questions/32355068/how-i-can-replace-colors-with-imagemagick)

### gif 분해하기

```bash
convert input.gif -coalsce output-%04d.gif
```

gif는 기본적으로 여러장의 이미지를 묶어서 순차적으로 보여주는 것이기 때문에 각각의 이미지로 분해할 수 있습니다. 예시 코드의 경우 각각의 이미지를 `output-0001.gif` 의 형태로 분해하라는 뜻입니다.

bash의 for 문과 결합하면 대량의 이미지를 처리할 수 있어서 편합니다.

### gif 배경 투명화하기

```bash
convert -dispose previous input-*.gif output.gif
```

사실 이미지 색 변경하기의 연장선상에 서있는 항목이긴 한데 단순히 묶어버리면 이전의 이미지가 남아있어서 잔상이 생기게 됩니다. 이 경우 묶는 과정에서 `input option` 에 `dispose` 플래그에 `previous` 값을 주면 이전 이미지를 없애고 묶어주기 때문에 잔상이 발생하지 않습니다.

또 한 가지는 움짤 → 움짤에서는 적용이 되지 않고 gif 움짤을 분해한 뒤 이걸 다시 묶는 과정에서 `-dispose previous` 플래그를 주어야 합니다.

\- via [How to avoid Imagemagick's convert overlay of frames in a gif - Stack Overflow](https://stackoverflow.com/questions/26239900/how-to-avoid-imagemagicks-convert-overlay-of-frames-in-a-gif)

### 이미지 크기 조절하기

```bash
convert input.gif -resample (int) output.gif
```

이미지의 ppi를 조절해주는 명령어입니다. (int) 자리에 원하는 숫자를 넣어서 이미지의 크기를 조절할 수 있습니다.

```bash
convert input.gif -scale width[xheight] output.gif
```

이미지의 가로 사이즈를 비율에 맞춰서 늘립니다. `widthxheight`의 형태로 설정할 경우 비율을 무시하고 크기를 변경하게 됩니다.

via

\- [imagemagick documentation - resample](https://www.imagemagick.org/Usage/resize/#resample)

\- [imagemagick documentation - scale](https://www.imagemagick.org/Usage/resize/#resize)

\- [imagemagick commandline - resample](https://www.imagemagick.org/script/command-line-options.php?#resample)

\- [imagemagick commandline - scale](https://www.imagemagick.org/script/command-line-options.php?#scale)

### 이미지 사이에 공간 넣기

[포럼](https://www.imagemagick.org/discourse-server/viewtopic.php?t=16383#p59851)에서 언급된 바와 같이 이미지 사이에 공간을 넣는 방법은 `-splice` 를 사용하거나 작은 이미지를 넣는 방법이 있습니다.

우선 작은 이미지를 넣는 방법은 아래와 같은 코드를 사용합니다.

```bash
convert image1.png image2.jpg -size 10x10 xc:Red +swap -background White -gravity Center +append result.png
```

위 코드는 `image1.png` 와 `image2.jpg` 뒤에 빨간색 10 * 10 이미지를 생성한 뒤 두번째 이미지와 자리를 바꾸고 흰 배경 위에 중앙 정렬을 함으로써 이미지 사이에 간격을 만들게 됩니다. 이 경우 이미지 사이에는 10 * 10 크기의 빨간 네모가 자리하게 되며 이미지 위 아래로 남는 부분은 흰색으로 처리되게 됩니다. 따라서 배경색과 네모의 색을 같게 함으로써 이미지 사이에 간격을 두는 효과를 만들 수 있습니다.

만일 합칠 이미지가 두 개 이상인 경우에는 `-splice` 를 사용하는 아래 코드를 사용하게 됩니다.

```bash
convert image1.png image2.jg image3.tiff -background red -splice 10x0+0+0 -gravity center +append +gravity -chop 10X0+0+0 result.png
```

이 코드는 매 이미지의 앞에 10 크기의 `splice` 를 준 뒤 결과물의 맨 앞에서 10 크기 만큼 잘라내는 방법을 사용합니다. 따라서 이미지 사이 간격을 10을 주게 되는 효과를 발생시키며 위 코드의 경우 간격 사이 색은 빨강으로 칠해지게 됩니다.

via

- [imagemagick forum](https://www.imagemagick.org/discourse-server/viewtopic.php?t=16383#p59851)

