import { Component } from "@angular/core";

@Component({
    selector : 'ngx-file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.css'],
})

export class FileUploadComponent {
    afuConfig = {
        uploadAPI: {
          url:"https://example-file-upload-api"
        }
    };
}