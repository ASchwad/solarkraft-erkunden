/**
 * Create a simple CORS proxy with Cloudflare Workers 
 * to bypass cors restrictions in the browser.
 * Example Usage: https://<worker_subdomain>.workers.dev/https://postman-echo.com/get?foo1=bar1&foo2=bar2
 * Copied from: https://gist.github.com/Kahtaf/e20515800054efcfb22830b4bc883880
 */

 addEventListener('fetch', event =>
 event.respondWith(handleRequest(event.request))
)

const handleRequest = async request => {
 let url = new URL(request.url)
 let requestUrl = request.url.replace(`${url.origin}/`, '');
 request = new Request(requestUrl, request)
 if (request.headers.has('origin')) request.headers.delete('origin')
 if (request.headers.has('referer')) request.headers.delete('referer')
 let response = await fetch(request)
 response = new Response(response.body, response)
 response.headers.set('access-control-allow-origin', '*')
 response.headers.set('access-control-allow-headers', '*')
 return response
}