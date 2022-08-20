import sys
import os

PORT = 8000

KEEP_RUNNING = True

def keep_running():
  return KEEP_RUNNING

os.chdir('./src')

try:
    # Python 3
    from http.server import HTTPServer, SimpleHTTPRequestHandler
    from socketserver import TCPServer
except ImportError:
     # Python 2
    from SimpleHTTPServer import BaseHTTPServer
    from SocketServer import TCPServer
    HTTPServer = BaseHTTPServer.HTTPServer
    from SimpleHTTPServer import SimpleHTTPRequestHandler

Handler = SimpleHTTPRequestHandler
Handler.extensions_map.update({
  '.js': 'text/javascript',
})

# killed processes won't linger tcp sockets
TCPServer.allow_reuse_address = True

if sys.version_info[0] == 2:
  print("using python " + str(sys.version_info[0]))

  httpd = TCPServer(("", PORT), Handler)

  print("Serving at port: http://localhost:" + str(PORT))

  httpd.serve_forever()

if sys.version_info[0] == 3:
  print("using python", sys.version_info[0])

  with TCPServer(("", PORT), Handler) as httpd:
    Handler

    print("serving at port: http://localhost:" + str(PORT))

    httpd.serve_forever()