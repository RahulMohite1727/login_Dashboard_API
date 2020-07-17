import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { LoggingService } from '../logger/logging.service';

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {
    urlsToNotUse: Array<string>;
    constructor(private loggingService: LoggingService) {
        this.urlsToNotUse = [
            'myController1/myAction1/.+',
            'myController1/myAction2/.+',
            'myController1/myAction3'
        ];
    }
    intercept(request: HttpRequest<any>, next: HttpHandler) {
        // console.log('Auth Interceptor Provider')
        // console.log(request.url);
        const authToken = "My Auth Token"
        const authReq = request.clone({
            setHeaders: { Authorization: authToken }
        })
        let msg = 'Interceptor called';
        this.loggingService.logStatus(msg)
        // console.log("authReq ", authReq);
        return next.handle(authReq)

    }

}