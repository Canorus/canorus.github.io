---
layout: post
title: Tweetbot Tweet Marker Sync 버그
menu: private
permalink: /tweetbot
---

트위터를 사용하면서 마지막 읽은 위치의 기기 간 동기화를 지원하는 클라이언트는 그리 많지 않습니다. 사실 기기 간 위치 동기화 기능이 두 가지 방법 밖에 없어요. iCloud로 동기화하는 방법 하나, [Tweet Marker Sync](http://tweetmarker.net)로 동기화하는 방법 하나. 사실 iCloud는 컴퓨터와 모바일 모두 애플 기기를 사용할 때나 가능한 방법이고 안드로이드라거나 윈도우즈가 끼어들면 꼼짝없이 후자의 방법을 써야 합니다. 아 [Echofon](http://www.echofon.com/)은 자체 동기화 기능을 사용하는 모양이더군요.

Echofon은 잠시 제쳐두고, 동기화 기능을 지원하는 macOS 클라이언트는 [Tweetbot](http://tapbots.com/tweetbot/)이나 [Twitterrific](http://twitterrific.com/ios/)정도가 생각나는군요. 트윗봇이야 비싼 건 모두가 아는 사실이니 넘어가고 Twitterrific도 iOS 버전과 Mac 버전을 모두 갖추기 위해서는 $15에 가까운 결코 작지 않은 비용을 지불해야 하죠.

다만 Tweetbot은 그 가격에 걸맞는 기능을 갖추고 있다고 평가를 받습니다. 저도 그렇게 생각했고요.

아래 버그가 있기 전까지는요.

<p style="text-align: center"><iframe width="560" height="315" src="https://www.youtube.com/embed/likBFizxW48" frameborder="0" allowfullscreen></iframe></p>

YoruFukurou에서는 멀쩡히 작동하는 Tweet Marker Sync 기능이 Tweetbot에서는 작동조차 하지 않습니다. 정확히는 마지막 읽은 위치 데이터는 보내는데 이걸 읽어오지를 못하는건지 읽어오고 이동을 하지 않는 것인지 모르겠지만요.

그래서 문의했습니다. 

<blockquote class="twitter-tweet tw-align-center" data-lang="ko"><p lang="en" dir="ltr"><a href="https://twitter.com/helios7157">@helios7157</a> we'd recommend using iCloud sync, Tweetmarker has been unreliable lately.</p>— Tweetbot by Tapbots (@tweetbot) <a href="https://twitter.com/tweetbot/status/805423593005912064">2016년 12월 4일</a></blockquote> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

사실 이 시점까지만 해도 트윗봇에 문제가 있을거라고는 생각하지 않았기 때문에 그냥 안 된다고 물었으니 그러려니 하더라도 그 뒤에 메일로 질문하고 답변받은 내용은 실망스러웠습니다.

> Tweetbot for Mac fails sync to last read position from other client via Tweet Marker Sync(or it fails to read last position data at all), while it seem to successfully send out last read position data to other clients. Other clients(e.g. Night Owl) worked fine both ways. Tweetbot for iOS worked fine as well. I think the problem is on Tweetbot rather than Tweet Marker since other clients works. Please check.

> We've noticed that Tweetmarker has been fairly unreliable as of late.

버그는 고치면 되지만, $30을 (추가로)지불한 서비스의 대응이 이런 건 정말로 실망스러웠습니다.
