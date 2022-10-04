# Solarkraft erkunden | Explore solar power ☀️

## Access to Marktstammdatenregister
Accessing the Register via CURL, Postman and other non-browser tools works. However, submitting the request within the web app / a browser will result in a network error due to the same-origin policy which is enforced in browsers:
- The *same-origin policy* is a critical security mechanism that restricts how a document or script loaded by one origin can interact with a resource from another origin.
- For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. For example, XMLHttpRequest and the Fetch API follow the same-origin policy. This means that a web application using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers.
- Use CORS to allow cross-origin access. CORS is a part of HTTP that lets servers specify any other hosts from which a browser should permit loading of content.

To circumvent this issue, I use a Proxy via a Cloudflare worker which sets the response HTTP header to `access-control-allow-origin=*`. The code for the worker can be found in [this gist](https://gist.github.com/Kahtaf/e20515800054efcfb22830b4bc883880).

## Misc
[Marktstammdaten API Repository](https://github.com/bundesAPI/marktstammdaten-api)  
[Other APIs via bund.dev](https://bund.dev/apis)

## License
Attribution for the Lottie Files (used under the [Lottie Simple License](https://lottiefiles.com/page/license)):
- [Barnabás Prifer](https://lottiefiles.com/41371-bicycles-wind-turbines)
- [Cooper Look Wai Hung](https://lottiefiles.com/53207-empty-file)

MIT License

Copyright (c) 2022 Alexander Schoenenwald

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.