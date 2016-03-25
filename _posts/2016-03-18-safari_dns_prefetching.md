---
layout: post
title: Safari의 DNS 프리페칭 기능 비활성화하기
tag:
 - OSX
published: false
---
Safari의 DNS Prefetching 기능을 끌 수 있습니다.

일반적으로 사파리에서 한 페이지를 열면 해당 페이지에 있는 모든 URL의 도메인 네임 서버(DNS)로부터 해당하는 링크의 IP를 받아오게 됩니다. 정상적으로 작동한다면 매우 쾌적하게 사파리를 사용할 수 있겠지만 어느 경우에는 사이트 로딩이 매우 느려지거나 부분적으로만 로딩될 수 있고, 경우에 따라서는 'Safari가 서버를 찾을 수 없음' 같은 에러메시지를 내뱉으며 페이지 열기에 실패할 수도 있지요. 

만일 이런 증상을 보인다면 DNS 프리페칭을 끄는 것을 시도해 볼 수 있습니다.

1. Terminal.app 을 열고 아래와 같이 입력합니다.

`defaults write com.apple.safari WebKitDNSPrefetchingEnabled -boolean false`

2. 입력 후에 엔터return 키를 눌러줍니다.

3. 효과를 적용하려면 Safari를 닫거나 맥을 재시동해줍니다.

원상복귀시키려면 다음과 같이 실행합니다.

1. Terminal.app 을 열고 아래와 같이 입력합니다.

`defaults write com.apple.safari WebKitDNSPrefetchingEnabled -boolean true`

via [defaults-write.com](http://www.defaults-write.com/toggle-safari-dns-prefetching/)