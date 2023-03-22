const fs = require('fs');
const archiver = require('archiver');

const targetPath = '/Users/ihuseung/nas/test/M1';
const resultZip = '/Users/ihuseung/nas/test/M1.zip'

function zipFolder(sourceFolder, resultZip) {
    //압축된 파일의 경로
    const output = fs.createWriteStream(resultZip);

    const archive = archiver('zip', { zlib: { level: 6 } });

    //압축 완료시
    output.on('close', function() {
        console.log(`${archive.pointer()} total bytes`);
        console.log('archiver has been finalized and the output file descriptor has closed.');
    });

    archive.on('error', function(err) {
        throw err;
    });

    archive.pipe(output);

    archive.directory(sourceFolder, false);

    archive.finalize();
}

// 사용 예시
zipFolder(targetPath, resultZip);
