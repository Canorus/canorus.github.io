---
layout: post
title: commandline-mastodon
tags: 
 - personal
 - project
 - Mastodon
---

[Github 링크](https://github.com/Canorus/commandline-mastodon)

v.0.1

사실 Mastodon의 기본적인 인증 절차가 헷갈리기도 하고 까먹어가기도 해서 만든 프로젝트. 정식 macOS 앱을 만들기 전에 commandline에서 마스토돈의 기본적인 기능(툿 보내기와 타임라인 읽기)까지만 구현을 해 볼 예정. 부스트나 Favourite은 커맨드라인의 특성상 힘들기 때문에. 뭔가 좋은 생각이 나면 시도를 해 볼 만 할 듯.

`quit`을 입력하면 조건문에 의해서 툿 전송을 건너뛰게 되고 While 문에 의해서 코드가 종료되도록 설계. C언어에서는 좀 더 간명한 해결책이 있었던 것 같은데.

단점이라면 툿 전송을 위한 로그인 정보가 평문으로 저장된다는 건데 이건 고민해 볼 여지가 있는 사항. 보통은 어떻게 하지.

의외로 [Official Documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/OAuth-details.md)에 올라온 `refresh_token`는 안 해도 크게 상관이 없는 듯하다. 시간이 지나면 만료될 지는 모르겠지만.

다음 목표는 스트리밍 API를 이용해서 타임라인 구현하기.

- - -

via
- [python - How to send POST request? - Stack Overflow](https://stackoverflow.com/questions/11322430/how-to-send-post-request)
- [python - JSON파일을 파이썬으로 읽는 법 \| Hashcode](https://hashcode.co.kr/questions/333/json%ED%8C%8C%EC%9D%BC%EC%9D%84-%ED%8C%8C%EC%9D%B4%EC%8D%AC%EC%9C%BC%EB%A1%9C-%EC%9D%BD%EB%8A%94-%EB%B2%95)
- [Convert string to JSON using Python - Stack Overflow](https://stackoverflow.com/questions/4528099/convert-string-to-json-using-python)
- [Requests: HTTP for Humans — Requests 2.19.1 documentation](http://docs.python-requests.org/en/master/?/%20%20%20)
- [python - Add new keys to a dictionary? - Stack Overflow](https://stackoverflow.com/questions/1024847/add-new-keys-to-a-dictionary)
- [Python: user input and commandline arguments - Stack Overflow](https://stackoverflow.com/questions/70797/python-user-input-and-commandline-arguments)
- [bottle - how to open a url in python - Stack Overflow](https://stackoverflow.com/questions/4302027/how-to-open-a-url-in-python)
- [python send POST with header - Stack Overflow](https://stackoverflow.com/questions/10768522/python-send-post-with-header)
- [python - How do I check whether a file exists? - Stack Overflow](https://stackoverflow.com/questions/82831/how-do-i-check-whether-a-file-exists)
- [json - Storing Python dictionaries - Stack Overflow](https://stackoverflow.com/questions/7100125/storing-python-dictionaries)
