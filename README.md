# rest-api
강의 : Danny TWLC(Rest API 강좌)

url : https://www.youtube.com/playlist?list=PLHGvDasahwZNIJ0aZQIhrf1Tg7Djqk7VQ										

## 제 1강, REST API란? NodeJS를 통해 만들기

rest api : REpresentational State Transfer Application Programming Interface

rest api :  HTTP 요청을 통해 통신함으로써 리소스 내에서 읽기, 업데이트 및 삭제 등 표준 데이터베이스 기능을 수행하는 것이다.

![image](https://github.com/hsy0511/rest-api/assets/104752580/f3189f85-dadb-4da2-8474-aa71534fe250)

서버는 클라이언트가 요구하는 값을 반환한다.

즉, 다이어그램에서 클라이언트와 서버가 있는데 클라이언트와 상관없이 서버 자체가 rest api 라고 보면된다.

- api 사용법

![image](https://github.com/hsy0511/rest-api/assets/104752580/0684bb53-88eb-41b4-b5d0-fe53c6911e15)

api/users를 사용해서 우리가 만든 api를 사용하는 것이다.

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

```javascript
const express = require('express');

const server = express();

server.listen(3000, () => {
    console.log("the server is running");
});
```

8. 서버가 작동하는지 확인하기

![image](https://github.com/hsy0511/rest-api/assets/104752580/e420ed45-b861-4e6a-924e-cd1dde7cb9d1)

9. users 생성

const : 상수를 선언하는 키워드

```javascript

const users = [
    {
        id:"tjddud",
        name:"syher",
        email:"0511tjd@gmail.com"
    },
    {
        id:"tjd",
        name:"hersy",
        email:"0511tjddud@naver.com"
    }
];
```

10. get 메소드로 users 불러오기

```javascript
server.get("/api/users",(req,res) => {
    res.json(users);
});

```

## 제 2강, POST, Postman, JSON Viewer 사용

- json viewer 설치

https://add0n.com/json-beautifier.html?version=0.3.7&type=install

설치 후 다시 localhost:3000/api/users 접속시 더 편하게 볼 수 있다.

간단하게 코드를 변경할 수도 있다.

![image](https://github.com/hsy0511/rest-api/assets/104752580/a1bfe6f5-6eb2-431a-b5bd-a6ee25489c3b)

- postman 설치

https://www.postman.com/downloads/

- postman 사용

postman 사용하는 이유는 웹에 관련된 메서드를 코드로 작성하지 않고 여러 메소드를 사용할 수 있게 해주는 프로그램이기 때문이다.

![image](https://github.com/hsy0511/rest-api/assets/104752580/363e7fc0-f7d1-4256-ad9d-16112b313fb6)

- post 메소드 사용

```javascript
server.post("/api/users",(req,res) => { 
    res.json(users);
});

```

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

![image](https://github.com/hsy0511/rest-api/assets/104752580/5de5567d-4a01-4d07-a0c6-56cce7743389)

데이터를 받기위해서 express 모듈에 있는 bodyParser라는 메소드를 사용해야한다.

require를 통해서 bodyParser 메소드를 사용할 수 있게 활성화 시킨다.

```javascript

const bodyParser = require('body-parser');
```

bodyparser를 사용하다는 코드를 작성한다.

```javascript
server.use(bodyParser.json());

```

마지막으로 서버에서 데이터를 받기위해서 push 메소드를 사용한다.

```javascript

server.post("/api/users",(req,res) => { 
    users.push(req.body)
    res.json(users);
});
```

postman에서 다시 응답을 받으면 불러오는 것을 볼 수 있다.

![image](https://github.com/hsy0511/rest-api/assets/104752580/f2a3f9c7-1770-4b34-bead-482e234d7a9c)

## 제 3강, ID 를 통해 User의 데이터를 불러오는 방법

- 서버 실행

![image](https://github.com/hsy0511/rest-api/assets/104752580/bbc6e651-0414-4eb7-946b-8d4d45141e2a)

![image](https://github.com/hsy0511/rest-api/assets/104752580/479e4b49-3aef-4d22-96ac-6c76aa92ef6e)

- 특정한 값만 불러오는 방법

1. id 파라미터 설정

```javascript
server.get("/api/user/:id",(req,res) => {
    
    });
```

2. 콘솔 창에서 id 확인하기

```javascript
server.get("/api/user/:id",(req,res) => {      
console.log(req.params.id)
});
```

![image](https://github.com/hsy0511/rest-api/assets/104752580/409e87b0-b6b0-4d1c-8842-5ca9b44b6afb)

![image](https://github.com/hsy0511/rest-api/assets/104752580/d67a0acc-916a-41e4-8479-98d53e810d6c)

url 뒤에 id를 확인할 수 있다.

3. id로 특정 값 불러오기

```javascript
server.get("/api/user/:id",(req,res) => {
    const user = users.find(u=>{
    배열에 있는 유저를 찾는다.
        
        return u.id === req.params.id;
        유저 id와 파라미터 id가 동일할 경우 유저 값을 리턴한다.
    });
    if(user){
        res.json(user);
        유저가 존재하면 유저값을 리턴한다.
            
    }else{
        res.status(404).json({ errorMessage: "User was not found"});
        유저가 존재하지 않으면 User was not found 나오는 오류서버로 이동된다.
    }
});
```

url 뒤에 id를 통해 특정 id에 대한 user가 나온다.

![image](https://github.com/hsy0511/rest-api/assets/104752580/42a7d979-9fb0-49f1-8502-8abb439518fd)

id가 일치하지 않으면 오류서버로 이동한다

![image](https://github.com/hsy0511/rest-api/assets/104752580/f15c1e40-3482-4952-a5ab-bf5afbaea74b)


## 제 4강, Update 와 Delete 사용하는방법

let 키워드 : let은 지역변수로 var와 달리 자신이 사용된 표현식 안에서만 사용이 가능한 키워드이다.(표현식 밖에서 선언한 let은 사용 가능)

```javascript
let times = 4;

if (times > 3) {
     let hello = "say Hello instead";
     console.log(hello);
 }
```

![image](https://github.com/hsy0511/rest-api/assets/104752580/9bcc2681-b3a3-4bc5-a09f-50cd3e24c492)

표현식 안에서 사용했기 때문에 값이 제대로 나옴

```javascript
let times = 4;

if (times > 3) {
     let hello = "say Hello instead";
 }

console.log(hello);
```

![image](https://github.com/hsy0511/rest-api/assets/104752580/33105c03-8316-40b1-b39a-4e631f0bdf04)

표현식 밖에서 사용했기 때문에 오류가 남

- var를 사용한다면?

```javascript
var times = 4;

if (times > 3) {
     var hello = "say Hello instead";
     console.log(hello);
 }
```

![image](https://github.com/hsy0511/rest-api/assets/104752580/b5878337-c863-47f3-966a-d821ef534e8b)

표현식 안에서 정상적으로 실행된다..

```javascript
var times = 4;

if (times > 3) {
     var hello = "say Hello instead";
 }
 
console.log(hello);
```

표현식 밖에서도 정상적으로 실행된다.

![image](https://github.com/hsy0511/rest-api/assets/104752580/c9fb40af-2159-4c49-97af-a73f56344b1d)

- update : put 메소드를 사용하여 유저값 변경하기

```javascript
server.put('/api/user/:id',(req,res)=>{
    let foundIndex = users.findIndex(u=>u.id === req.params.id);
    id를 통해서 유저의 인덱스를 찾는다.
    유저 id와 파라미터 id가 동일할 경우 유저 값을 리턴한다.
    
    if(foundIndex === -1){
        res.status(404).json({ errorMessage: 'User was not found'});
        foundIndex가 -1과 같아 유저를 발견하지 못했을 경우 오류 서버로 이동한다.
    }else{
        users[foundIndex] = { ...users[foundIndex], ...req.body};
        ...users[foundIndex] 값에 현재 있는 유저 값을 가져오고 바디를 통해서 유저 값을 업데이트 한다.
            
        res.json(users[foundIndex]);
        업데이트된 유저를 불러온다.
    }
});
```

포스트맨에 들어가서 put 메소드로 바꾼 후 변경할 유저 id의 헤더를 눌러 어떤 형식으로 변경할지 key와 value 값을 쓴다. 그리고 바디를 눌러 바꿀 유저 값을 쓴다.

![image](https://github.com/hsy0511/rest-api/assets/104752580/d167dc11-e2a1-4b01-a987-d08c7a689f6b)

![image](https://github.com/hsy0511/rest-api/assets/104752580/6564b5bb-de0e-4bf2-9138-3ce34aa855b3)

유저 값이 변경된 것을 확인할 수 있다.

![image](https://github.com/hsy0511/rest-api/assets/104752580/c79f03ad-3453-4f07-8066-4c4f67f9894c)

get 메소드로 바꿔서 불러와도 변경된 것을 확인할 수 있다.

![image](https://github.com/hsy0511/rest-api/assets/104752580/7215b2c5-8df2-40f8-bf64-ae01f4794672)

id가 일치하지 않으면 오류서버로 이동한다

![image](https://github.com/hsy0511/rest-api/assets/104752580/816518ab-3555-41d8-ae73-f0638f901642)

- delete : delete 메소드를 사용하여 유저값 삭제하기

```javascript
server.delete("/api/user/:id", (req,res) => {
    let foundIndex = users.findIndex(u => u.id === req.params.id);
    id를 통해서 유저의 인덱스를 찾는다.
    유저 id와 파라미터 id가 동일할 경우 유저 값을 리턴한다.
        
    if(foundIndex === -1) {
        res.status(404).json({ errorMessage: "Users was not found"});
        foundIndex가 -1과 같아 유저를 발견하지 못했을 경우 오류 서버로 이동한다.
    }else{
        let foundUser = users.splice(foundIndex, 1);
        splice 함수를 통해 foundIndex부터 1칸을 지운값을 foundUser에 저장한다.
            
        res.json(foundUser[0]);
        유저값이 삭제된다.
    }
});
```

포스트맨에 들어가서 메소드를 delete로 바꾼 후 삭제할 user id 값을 입력하면 삭제될 데이터를 보여고 삭제한다.

![image](https://github.com/hsy0511/rest-api/assets/104752580/60d4c78e-393f-49e5-a273-b81fa5d28b4d)

get 메소드로 바꿔서 불러오면 삭제된 것을 확인할 수 있다.

![image](https://github.com/hsy0511/rest-api/assets/104752580/f180394e-6a3b-4e11-81a4-615197865098)

id가 일치하지 않으면 오류서버로 이동한다

![image](https://github.com/hsy0511/rest-api/assets/104752580/2bb94950-e5d9-4661-b248-ddc2eea56de6)

## 제 5강, 동적서비스와 정적서비스

- 정적 서비스

정적(static)은 외부 환경에 관계 없이 일정한 결과값을 제공해주는 걸 의미합니다.

![image](https://github.com/hsy0511/rest-api/assets/104752580/f6c5486b-d1ad-4e18-94a9-a97adba342dd)

정적 서비스는  웹 서버와 통신해서 이미 저장되어 있던 HTML, CSS, JS 파일을 다운 받는다.  

여기서 웹 서버는 HTML, CSS, JS 저장소 역할을 한다.

따로 데이터베이스가 필요하거나 복잡한 비즈니스 로직이 필요하지 않다.


- 동적 서비스

동적(dynamic)은 외부 환경에 따라 다른 결과값을 제공해주는 걸 뜻해요. 

![image](https://github.com/hsy0511/rest-api/assets/104752580/f0e2a99f-46ed-4f43-976d-e91b62398462)

동적 웹은 클라이언트의 요청에 따라 다양한 화면을 제공해 준다.

웹 어플리케이션 서버와 직접 통신을 한다.

웹 어플리케이션 서버(WAS)는 복잡한 비즈니스 로직, 데이터 베이스와 통신 등을 책임진다.

웹 서버는 WAS와 통신해서 얻은 결과 값을 바탕으로 가공 작업을 거친다. 

최종적으로 만들어진 동적인 웹 파일을 클라이언트에게 전달해 준다. 

기본적으로 동적 웹은 정적 웹에 비해 복잡한 로직들과 리소스를 필요로 한다.

참고로 웹 어플리케이션 서버는 일종의 API 서버라고 볼 수도 있다.

왜냐하면 데이터베이스와 통신하며 데이터를 가공하고 전달해주는 역할도 하기 때문이다.

## 제 6강, Oracle을 Nodejs와 연결하는 방법

1. 새폴더 생성하고 vs코드에서 폴더 열기

![image](https://github.com/hsy0511/rest-api/assets/104752580/089c10ff-0384-4ad4-b370-a2049eda191f)
![image](https://github.com/hsy0511/rest-api/assets/104752580/218efc0b-851b-4f64-9d99-e7981185b3a1)
![image](https://github.com/hsy0511/rest-api/assets/104752580/6fb4d528-4169-4977-8a22-a09570749b65)

2. 터미널 창에서 npm init --y 입력

![image](https://github.com/hsy0511/rest-api/assets/104752580/fcf1de74-49c1-488d-9afc-c5013d36a495)

![image](https://github.com/hsy0511/rest-api/assets/104752580/b43c79cd-6923-4e6d-bb8c-e2a7f516b413)

json 경로 확인 파일이 만들진 것을 확인할 수  있다.

3. npm install oracledb 입력하여 oracedb 패키지 설치

![image](https://github.com/hsy0511/rest-api/assets/104752580/e3b04b37-9d39-464e-bae4-496e87eb4016)

![image](https://github.com/hsy0511/rest-api/assets/104752580/aa927293-6931-420b-a18c-b284b36ecc4c)

oracledb 패키지가 추가된 것을 볼 수 있다.

4. index.js 파일 생성

![image](https://github.com/hsy0511/rest-api/assets/104752580/eb00e752-f5c9-4efb-b2b5-f4f23df6993f)

5. 오라클 연결 코드 작성
```javascript
const oracledb = require('oracledb');
// node에서 oracle를 사용하기 위해서 패키지를 불러옴

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
// 이 패키지에서 오라클를 연동한다.

async function fun() {
qle
    let con;
// 다음에 나오는 con과 연결하는 con 즉, 변수지정

    try{
        con = await oracledb.getConnection({
// fun 함수를 async를 사용하여 비동기 함수로 지정 
// 비동기란? 특정 코드가 끝날때 까지 코드의 실행을 멈추지 않고 다음 코드를 먼저 실행하는 것

            user : "hr",
            password : "hr",
            connectString : "localhsot/orcl"
        });

        const data = await con.execute(
            `select * from departments`,
        );
        console.log(data.row);
    } catch (err) {
        console.error(err);
    }
}
// try catch문으로 사용하여 유효성 검사(오류검출)
fun();
```
6. index.js 실행

![image](https://github.com/hsy0511/rest-api/assets/104752580/b4e8ca83-faa5-40c0-8941-691b541c1d2e)

hr 계정에 departments 테이블에 있는 데이터가 출력된다.
