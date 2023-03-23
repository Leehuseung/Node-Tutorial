const ftp = require('basic-ftp');
const fs = require('fs');

const client = new ftp.Client();
const ftpHost = {
};

// (async () => {
//     const accessInfo = await client.access(ftpHost);
//     console.log('accessInfo', accessInfo);
//
//     // const list = await client.list();
//
//
//     const downloadPath = '/Users/ihuseung/nas/test/ftpfolder/README.html';
//
//     // Log progress for any transfer from now on.
//     // client.trackProgress(info => {
//     //     console.log("File", info.name)
//     //     console.log("Type", info.type)
//     //     console.log("Transferred", info.bytes)
//     //     console.log("Transferred Overall", info.bytesOverall)
//     // });
//
//
//     //README.html을 downloadPath로 만든다.
//     // await client.downloadTo(downloadPath, "README.html");
//
//     //README.html 을 READEME_FTP2로 업로드한다.
//     // await client.uploadFrom('/Users/ihuseung/nas/test/ftpfolder/movie.zip', "movie.zip")
//
//
//     client.close();
// })();



/**
 * 파일 리스트 조회
 */
// (async () => {
//     const accessInfo = await client.access(ftpHost);
//
//     //루트 폴더 조회
//     // const list = await client.list();
//     // console.log(list);
//
//     //my 폴더 조회
//     const my = await client.list('README.html');
//     console.log(my);
//     client.close();
// })();


/**
 * 파일삭제
 */
// (async () => {
//     const accessInfo = await client.access(ftpHost);
//     //파일삭제
//     // const removeResult = await client.remove("README_FTP2.md");
//     /**
//      성공
//      { code: 250, message: '250 Delete operation successful.' }
//      실패시 에러 발생
//      const err = code >= 400 ? new FTPError(response) : undefined;
//      FTPError: 550 Delete operation failed.
//      */
//     // console.log(removeResult);
//     client.close();
// })();

/**
 * 파일 사이즈 조회
 */
// (async () => {
//     const filePath =  '/Users/ihuseung/nas/test/ftpfolder/movie.zip';
//     const stats = await fs.promises.stat(filePath);
//     const fileSizeInBytes = stats.size;
//     const fileSizeInKB = fileSizeInBytes / 1024;
//     const fileSizeInMB = fileSizeInKB / 1024;
//     console.log(`파일 크기: ${fileSizeInBytes} 바이트 (${fileSizeInMB} MB)`);
// })();

/**
 * 프로그래스바 % 만들기.
 */
(async () => {
    const accessInfo = await client.access(ftpHost);

    // const filePath =  '/Users/ihuseung/nas/test/ftpfolder/movie.zip';
    const filePath =  '/Users/ihuseung/nas/test/wether.zip';
    const stats = await fs.promises.stat(filePath);

    // Log progress for any transfer from now on.
    client.trackProgress(info => {
        // console.log("File", info.name)
        // console.log("Type", info.type)
        // console.log("Transferred", info.bytes)
        console.log('------------------------------------------------------')
        console.log("Transferred Overall", info.bytesOverall);
        console.log(stats.size)

        //둘째자리까지 나오면 N%임.
        const percent = Math.round(((info.bytesOverall/stats.size).toFixed(2) * 100));

        /**
         * percent를 업데이트 하면 될듯 하다.
         */
        console.log(percent);

    });

    await client.uploadFrom(filePath, "movie.zip")

    client.close();
})();
