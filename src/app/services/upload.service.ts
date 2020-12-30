import { Injectable } from '@angular/core';

@Injectable()
export class UploadService {

    public url: string;

    constructor() {
        this.url = `http://${location.hostname}/app/api/upload`;
    }

    uploadFile(url: string, params: Array<string>, files: Array<File>, name: string) { // url to upload to, parameters aka headers, files are the files from the form and name is the name of the field in the form
        return new Promise((resolve, reject) => {
            let formData: any = new FormData();
            let xhr = new XMLHttpRequest();
            for (let i = 0; i < files.length; i++) {
                formData.append(name, files[i]);
            }

            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            }
            xhr.open('POST', url, true);
            xhr.send(formData);
        })
    }
}
