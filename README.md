# rest-api
강의 : Danny TWLC(Rest API 강좌)

url : https://www.youtube.com/playlist?list=PLHGvDasahwZNIJ0aZQIhrf1Tg7Djqk7VQ										

## 제 1강, REST API란? NodeJS를 통해 만들기

rest api : REpresentational State Transfer Application Programming Interface

![image](https://github.com/hsy0511/rest-api/assets/104752580/f3189f85-dadb-4da2-8474-aa71534fe250)

클라이언트가 요구하는 값을 반환하는 것이 서버이다.

다이어그램에서 클라이언트와 서버가 있는데 클라이언트와 상관없이 서버 자체가 rest api 라고 보면된다.

- api 사용법

![image](https://github.com/hsy0511/rest-api/assets/104752580/0684bb53-88eb-41b4-b5d0-fe53c6911e15)

qpi/users를 사용해서 우리가 만든 api를 사용하는 것이다.

get 메소드는 users안에서 사용되고 있는 데이터를 보여준다.

post 메소드는 새로운 users를 추가한다.

put 메소드는 users에 데이터를 바꾼다.

delete 메소드는 users를 삭제한다.

- api 만들기 (nodejs)

api는 클라이언트가 아닌 서버이기 때문에 html을 사용하지 않는다.

1. nodejs가 설치되어 있는지 확인한다.

![image](https://github.com/hsy0511/rest-api/assets/104752580/40d09dac-6ad6-49eb-b6b5-af691a750a33)

2. npm이 설치되어 있는지 확인한다.

![image](https://github.com/hsy0511/rest-api/assets/104752580/1cd5226a-648e-4684-bf2d-4a7ee76ffae9)

4. npm과 nodejs가 설치되어 있으면 npn init으로 프로젝트를 생성한다.

![image](https://github.com/hsy0511/rest-api/assets/104752580/3f35494a-a48a-40a9-b0a6-91dfa3b7a28b)

5. 프로젝트가 json 파일로 생성된 것을 확인한다.

json (JavaScript Object Notation) : 데이터를 저장하거나 전송할 때 많이 사용되는 데이터 교환 형식

![image](https://github.com/hsy0511/rest-api/assets/104752580/1748185f-850d-4ae7-bb36-0966d7ede7b9)

name : 프로젝트 이름, version : 버전, description : 프록젝트 설명 , main : 서버에 맨 처음 실행되는 파일 등 나와있다.

6. npm install express을 사용하여 모듈을 사용한다.

express : 서버를 매우 쉽게 짤 수 있게 도와주는 라이브러리이다.

![image](https://github.com/hsy0511/rest-api/assets/104752580/1baa2d10-bbb0-4764-b597-41b849014f58)

7. sever.js 파일 생성하고 서버 생성하기

![image](https://github.com/hsy0511/rest-api/assets/104752580/5c56e7b2-3608-485d-99ae-1bd212b80ee9)

8. 서버가 작동하는지 확인하기

![image](https://github.com/hsy0511/rest-api/assets/104752580/e420ed45-b861-4e6a-924e-cd1dde7cb9d1)

9. users 생성

const : 상수를 선언하는 키워드

![image](https://github.com/hsy0511/rest-api/assets/104752580/d813d801-83a0-4629-b4b1-49269ae622b5)

10. get 메소드로 users 불러오기

![image](https://github.com/hsy0511/rest-api/assets/104752580/f3c454f3-ba65-4851-a716-27dededf85d1)

## 제 2강, POST, Postman, JSON Viewer 사용

- json viewer 설치

https://add0n.com/json-beautifier.html?version=0.3.7&type=install

설치 후 다시 localhost:3000/api/users 접속시 더 편하게 볼 수 있다.

![image](https://github.com/hsy0511/rest-api/assets/104752580/a1bfe6f5-6eb2-431a-b5bd-a6ee25489c3b)

- postman 설치

https://www.postman.com/downloads/

- postman 사용

postman에서는 서버를 여러 메소드를 코드로 작성하지 않아도 사용할 수 있게 해주는 프로그램 입니다.

![image](https://github.com/hsy0511/rest-api/assets/104752580/363e7fc0-f7d1-4256-ad9d-16112b313fb6)

- post 메소드 사용

![image](https://github.com/hsy0511/rest-api/assets/104752580/9a825b4c-472e-43b6-a796-9504d1e04f53)

다시 postman으로 돌아가서 post 메소드로 변경하여 불러온다.

![image](https://github.com/hsy0511/rest-api/assets/104752580/5de5567d-4a01-4d07-a0c6-56cce7743389)

post를 사용하는 이유는 패스워드 같은 중요한 데이터를 안전하게 가리고 보내기 위해서 사용된다.

- post 메소드를 사용하여 데이터 보내기

![image](https://github.com/hsy0511/rest-api/assets/104752580/e1a5fae2-7c6d-4565-8f86-37fcca3a29b4)

postman에서 header 목록에 들어가서 key를 Content-Type이라고 지정하고 value를 application/json으로 지정하여 post 메서드를 보내는 데이터는 json 파일이다는 것을 알려준다.

body로 들어가서 6개 목록 중 raw를 누르고 text에 json 파일을 선택하여 json 파일로 보낸다.

![image](https://github.com/hsy0511/rest-api/assets/104752580/f86e9173-74e1-4dbf-bebc-3ed70b14c6f6)

![image](https://github.com/hsy0511/rest-api/assets/104752580/4d7a8bab-3158-4826-a959-2bf98223753e)

위 데이터를 보냈지만 현재 서버에서 요청한 데이터 값을 받지 않았기 때문에 아직은 값이 같다.

데이터를 받기위해서 express 모듈에 있는 bodyParser라는 메소드를 사용해야한다.

require를 통해서 bodyParser 메소드를 사용할 수 있게 활성화 시킨다.

![image](https://github.com/hsy0511/rest-api/assets/104752580/60a1ac87-0225-41a1-96c1-12bd79979acb)

bodyparser를 사용하다는 코드를 작성한다.

![image](https://github.com/hsy0511/rest-api/assets/104752580/292284f1-5a83-4101-a8f9-000aa151ad39)

마지막으로 서버에서 데이터를 받기위해서 push 메소드를 사용한다.

![image](https://github.com/hsy0511/rest-api/assets/104752580/5d436cd8-f404-4ffe-825f-803ca16d3503)

postman에서 다시 응답을 받으면 불러오는 것을 볼 수 있다.

![image](https://github.com/hsy0511/rest-api/assets/104752580/f2a3f9c7-1770-4b34-bead-482e234d7a9c)
