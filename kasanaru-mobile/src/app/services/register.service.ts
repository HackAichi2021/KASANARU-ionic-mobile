import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: "root"
})

export class RegisterService {
    private basedUrl = 'https://hackaichi2021.herokuapp.com/';

    public register(user: User): Observable<Object> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }
        return this.http.post(this.basedUrl + "api/user/register", user, httpOptions).subscribe(
            (result) => {
                console.log(result);
                if (result.result === "Success") {
                    localStorage.setItem("access_token", result.access_token);
                    localStorage.setItem("refresh_token", result.refresh_token);
                } else {
                    console.error(result);
                }
            },
            (error) => console.error(error)
        )
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: リモート上のロギング基盤にエラーを送信する
            console.error(error); // かわりにconsoleに出力

            // TODO: ユーザーへの開示のためにエラーの変換処理を改善する
            this.log(`${operation} failed: ${error.message}`);

            // 空の結果を返して、アプリを持続可能にする
            return of(result as T);
        };
    }
    private log(message: string) {
    }
    constructor(private http: HttpClient) {
    }
}