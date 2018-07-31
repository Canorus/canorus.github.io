---
layout: post
title: purge-wrangler
tags: 
 - macOS
---

![purgewrangler image](https://github.com/mayankk2308/purge-wrangler/blob/master/resources/purge-wrangler-menu.png?raw=true){:.center-image}

이따금 좀 더 강력한 기능을 사용하기 위해서 불편을 감수해야 하는 때가 있습니다. 저같은 경우에는 eGPU가 대표적이죠. 맥미니에서 [QHD 듀얼 모니터](http://canorus.github.io/2017/10/24/결국-QHD-모니터로-듀얼을-구성했습니다)를 구성해보겠답시고[^QHD] Akitio Node를 사서 외장 그래픽도 끼워넣고 [이리저리 개조](https://canorus.github.io/2018/02/08/akitio-node-psu-교체하기/)도 해보는 것 까진 좋았는데 아무래도 공식 지원하는 구성이 아니기 때문에 여러가지 불편함을 감수해야 했습니다. 보안 업데이트라든가 OS 업데이트를 진행하고 나면 분명히 디스플레이와 관련해서 뭔가 문제가 생길거라고 확신할 수 있게 되는거죠. 어지간한 업데이트는 죄다 설치하면서 유독 OS 업그레이드는 미루게 되는 까닭도 여기 있습니다.

10.13 들어서 그나마 애플이 공식적으로 eGPU를 지원하긴 합니다만 그건 AMD 계열 그래픽 카드에만 해당하고 NVidia 계열 그래픽카드는 해당이 없습니다. 10.12까지는 그것도 없어서 매번 업데이트할 때마다 드라이버를 새로 설치하고 활성화하는 스크립트를 실행해줘야 했죠. 개발자가 업데이트를 중단한 스크립트였기 때문에 실행하더라도 반드시 그래픽이 잡힐 거라는 보장도 없었습니다.

[^QHD]: mac mini 내장 그래픽으로는 2K 해상도 두 개를 못 돌린다 하더군요.

다행히 10.13부터는 mayankk2308이라는 개발자가 [purge-wrangler](https://github.com/mayankk2308/purge-wrangler)라는 스크립트를 만들어서 배포하고 있습니다. 업데이트하고 외부에서 접속해서 실행해야 하는 점은 마찬가지지만 스크립트가 계속 업데이트되기 때문에 제대로만 실행하면 그래픽 드라이버가 제대로 잡힐 거라고 기대할 수 있는 거죠. 업데이트하면서 어느 정도 시간이 걸릴 지도 대략적으로 가늠할 수 있는 것 또한 이 패키지 스크립트가 가지는 장점입니다.

그래도 역시 별도 작업이 필요하다는 점은 내키지가 않으니 애플이 하루빨리 NVidia 계열 그래픽 카드도 지원을 해주었으면 하는 작은 소망이 있습니다. 가능성은 매우 희박하더라도 말이죠.