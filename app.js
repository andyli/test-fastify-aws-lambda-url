const fastify = require('fastify')

const app = fastify()
app.get('*', (request, reply) => reply.send(
  "request.url: " + request.url + "\n\n" + 
  (request.awsLambda ? "request.awsLambda.event:\n" + JSON.stringify(request.awsLambda.event, null, "\t") : "")
))

if (require.main === module) {
  app.listen({ port: 3000 }, (err) => {
    if (err) console.error(err)
    console.log('server listening on 3000')
  })
} else {
  module.exports = app
}
