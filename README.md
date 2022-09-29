# Solar City

## Access to Marktstammdatenregister
Accessing the Register via CURL, Postman and other non-browser tools works. However, submitting the request within the web app / a browser will result in a network error due to [CORS issues](https://www.reddit.com/r/learnjavascript/comments/mdgjw7/axios_get_fails_but_postman_get_is_successful/).
To circumvent this issue, I use a Proxy via a Cloudflare worker which fixes the HTTP header and (among other measures) adds the `access-control-allow-origin=*` header. The code for the worker can be found in [this gist](https://gist.github.com/Kahtaf/e20515800054efcfb22830b4bc883880).

## Misc
[Marktstammdaten API Repository](https://github.com/bundesAPI/marktstammdaten-api)
[Other APIs via bund.dev](https://bund.dev/apis)
