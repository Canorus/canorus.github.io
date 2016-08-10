---
layout: post
title: Sublime Text 3 한글 인코딩 문제 해결하기
---

[iWidgets](http://modmyi.com/info/iwidgets.php)에 기본으로 탑재되는 달력 위젯이 마음에 안 들어서 바꿀 요량으로 이리저리 코드를 찾다가 이런 화면에 맞닥뜨리게 되었다.

![](/Resources/2016-08-10/wrongencoding.png){: .center-image }

[TextWrangler](http://www.barebones.com/products/textwrangler/)는 기본적으로 EUC-KR 인코딩을 지원하기 때문에 그냥 적용하면 되지만 Sublime Text 개발자는 한글~~뿐만 아니라 동아시아 문자 전반~~에 관심이 없는 모양이므로 플러그인을 기대할 수 밖에 없다. 다행히 어느 중국인 개발자가 [ConverttoUTF8](https://github.com/seanliang/ConvertToUTF8)이라는 Sublime Text 2 & 3용 패키지를 만들어서 배포하고 있었다.

## Package Control 설치하기

#### 1. 우선 [Sublime Text Package Control](https://packagecontrol.io/installation)페이지에 가서 각자 버전에 맞는 코드를 복사한다. 맨 아래 주의에도 적혀있듯이 매 버전마다 코드가 변한다.

![](/Resources/2016-08-10/packagecontrolcode.png){: .center-image }

#### 2. Sublime Text 창을 열고 ctrl + \`를 누르거나 view > Show Console을 눌러 콘솔을 열고 복사한 코드를 붙여넣는다. return 키를 누르고 기다리면 package control의 설치가 끝난다.

![](/Resources/2016-08-10/showconsole.png){: .center-image }

## package 설치하기

설치하려는 패키지 명은 converttoutf8이나 그 전에 codecs33이라는 패키지를 먼저 설치해주어야 한다.

#### 1. cmd + shift + p 를 눌러 command palette 를 열고 install package 를 입력한 뒤 return을 눌러준다.

![](/Resources/2016-08-10/installpackage.png){: .center-image }

조금 시간이 걸릴 수도 있다.

#### 2. 다시 창이 나타나면 codecs33을 입력하고 return을 눌러 나타나는 패키지를 설치한다.

![](/Resources/2016-08-10/codecs33.png){: .center-image }

#### 3. 설치가 끝나면 1. 과 2.의 방법으로 converttoutf8 패키지를 설치한다.

![](/Resources/2016-08-10/converttoutf8.png){: .center-image}

#### 4. 설치가 끝나면 자동으로 리로드되면서 깨진 글자들이 나타난다.

![](/Resources/2016-08-10/result.png){: .center-image}

나타나지 않으면 File > Set File Encoding to > Korean 으로 변경해주면 된다.

![](/Resources/2016-08-10/setencoding.png){: .center-image }

------

via

- [ConvertToUTF8](https://github.com/seanliang/ConvertToUTF8)