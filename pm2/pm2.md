# PM2

## 기본명령어

```bash
# 실행
pm2 start app.js

# 조회
pm2 ls

# 정지
pm2 stop 'id|name|namespace|all|json|stdin'

# 재실행(stop -> run) 
pm2 start 'id'

# 프로세스 삭제
pm2 delete 'id'

# 프로세스 모두삭제
pm2 delete all

# 변경시 즉시 반영
pm2 start app.js --watch

# pm2는 백그라운드 동작이기 때문에 화면에 콘솔 메세지 안나옴. 로그를 보기 위해서는..
pm2 log

# log + watch를 동시에 해준다.
pm2-dev app.js

# 프로세스 실행시 스레드의 숫자 만큼 스레드를 실행한다.
pm2 start app.js -i max

# 프로세스를 증가시킬 수 있다. (app은 ls에서 name임)
pm2 scale app +1

# 프로세스 숫자를 바꿀수 있다. (app은 ls에서 name임)
pm2 scale app +1

# 프로세스 재시작
pm2 reload app

# startup script (컴퓨터가 꺼졌다 커져도 실행된다) 쓸일이 있으면 문서를 읽어보자.


```
## 서비스 운영
- 리로드만 믿고 운영한1다면 무중단으로 서비스를 운영할 수 없을것이다.
- 





