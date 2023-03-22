const fs = require('fs');
const unzipper = require('unzipper');

const zipPath = '/Users/ihuseung/nas/test/M1.zip';
const unzipPath = '/Users/ihuseung/nas/test/unzip'


// unzipper 모듈을 사용하여 압축 해제를 수행합니다.
fs.createReadStream(zipPath)
    .pipe(unzipper.Extract({ path: unzipPath }))
    .on('finish', () => {
        //  /Users/ihuseung/nas/test/unzip/M1 폴더가 생성된다.
        console.log('압축 해제 완료!');
    })
    .on('error', (err) => {
        console.error('압축 해제 실패:', err);
    });
