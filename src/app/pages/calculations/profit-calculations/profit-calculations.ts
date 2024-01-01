import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { create } from "domain";
import { Observable, from, of } from "rxjs";
import { map, tap } from "rxjs/operators";

@Component({
    selector: 'ngx-profit-calculations',
    styleUrls: ['profit-calculations.scss'],
    templateUrl: 'profit-calculations.html'
})

export class ProfitCalculationsComponent implements OnInit{

    imageSrc: any = ''

    constructor (
        private http: HttpClient
    ) {}

    ngOnInit(): void {
        const http$ = this.createHttpObservable('/api/items')
        http$.pipe(
            tap((data)=> console.log(data)),
            map((data) => {})
        ).subscribe()

        this.makeGetRequest()

        const response$ = this.makeGetRequest2()
        response$.pipe(
            tap(
                (data) => {
                    console.log('this is second get method')
                    console.log(data['data'])
                }
            )
        ).subscribe()

        this.fetchImage('http://127.0.0.1:5000/api/image/6592f6f869b7a79e538096f0')
    }


    createHttpObservable(url = '/api/items') {
        const port = 5000;
        const fullUrl = `http://127.0.0.1:${port}${url}`;
    
        return Observable.create((observer)=>{

            const controller = new AbortController()
            const signal = controller.signal

            fetch(fullUrl, {mode: 'no-cors', credentials: 'include', signal}).then(
                (response) => { 
                    if (response.ok)
                    {
                        return response.json()
                    }
                    else
                    {
                        return observer.error(`An error has occurred with status -> ${response.status}`)
                    }
                }
            )
            .then(
                (data)=>{
                    observer.next(data)
                    observer.complete()
                }
            ).catch(
                (error) => {
                    observer.error(error)
                }
            )
            return () => controller.abort()
        }
        );
    }

    makeGetRequest(): void {
        const url = 'http://127.0.0.1:5000/api/items';  
    
        this.http.get(url, {
            headers: {
                mode: 'no-cors', credentials: 'include'
            }
        }).subscribe(
          (data) => {
            console.log('GET Request was successful', data);
          },
          (error) => {
            console.error('Error occurred during GET Request', error);
          }
        );
      }

      makeGetRequest2(): Observable<any> {
        const url = 'http://127.0.0.1:5000/api/items';  
    
        return this.http.get(url, {
            headers: {
                mode: 'no-cors', credentials: 'include'
            }
        })
      }
      fetchImage(apiUrl: string): void {
        this.http.get(apiUrl, { responseType: 'blob' }).subscribe(
          (data: Blob) => {
            const reader = new FileReader();
            reader.onloadend = () => {
              // Convert the blob data to a base64-encoded data URL
              this.imageSrc = reader.result;
            };
            reader.readAsDataURL(data);
          },
          (error) => {
            console.error('Error fetching image:', error);
          }
        );
      }
}