A minimal project to reproduce https://github.com/fastify/aws-lambda-fastify/issues/169

* http://localhost:3000/a%2Fb prints `request.url: /a%2Fb`
* https://ijkudl15ye.execute-api.us-east-1.amazonaws.com/a%2Fb prints `request.url: /a/b`
