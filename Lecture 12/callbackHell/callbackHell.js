function downloadFile(path, downloaded) {
    console.log('File started to download from path:', path);
    setTimeout(() => {
        let file = path.split('/').pop();
        downloaded(file);
    }, 3000);
}

function compressFile(file, compressed) {
    console.log('file started to compress');
    setTimeout(() => {
        let compressedFile = file.split('.')[0] + '.zip';
        compressed(compressedFile);
    }, 2000);
}

function uploadFile(compressedFile, uploaded) {
    console.log(`File started to upload at http://facebookCloud.com/${compressedFile}`);
    setTimeout(() => {

    }, 3000);
}

//callback Hell
downloadFile('https://facebook.com/profile.jpg', (file) => {
    console.log('file downloaded successfully as', file);
    compressFile(file, (compressedFile) => {
        console.log('File compressed successfully as', compressedFile);
        uploadFile(compressedFile, () => {
            console.log('successfully uploaded!')
        })

    })
})

