import sys
import os
import argparse

pyVersion = sys.version_info[0]

# this ifelse distinguishes python 2 and 3 and then
# imports from the appropriate libraries.
# all code below either works in both 2 and 3,
# or is guarded by additional if statements
if pyVersion == 3:
    # Python 3 imports
    from http.server import HTTPServer, SimpleHTTPRequestHandler
    from socketserver import TCPServer
elif pyVersion == 2:
     # Python 2 imports
    from SimpleHTTPServer import BaseHTTPServer
    from SocketServer import TCPServer
    HTTPServer = BaseHTTPServer.HTTPServer
    from SimpleHTTPServer import SimpleHTTPRequestHandler
else:
  print("o.O this is awkward, i expected python 2 or 3 and you have neither.")

# this function allows us to setup a minimal cli for this script.
def init_argparse():
  parser = argparse.ArgumentParser(
    usage="%(prog)s [OPTION] [FILE]...",
    description="Artificial Museum Sandbox - Create and test your artifact on your own computer."
  )

  parser.add_argument(
    "-v", "--version", action="version",
    version = "%(prog)s version 0.0.1"
  )

  # custom port: --port 8000
  parser.add_argument("-p", "--port", nargs=1, default=8000)
  # custom dir: --dir src
  parser.add_argument("-d", "--dir", nargs=1, default="src")

  return parser

def main():
  # parse the cli arguments
  parser = init_argparse()
  # into the args variable
  args = parser.parse_args()

  # move to the src dir to serve it directly
  if args.dir != ".":
    os.chdir(args.dir)

  # start our imported handler
  Handler = SimpleHTTPRequestHandler
  # add .js mimetype, windows needs it.
  Handler.extensions_map.update({ '.js': 'text/javascript' })

  # killed processes won't block tcp sockets
  TCPServer.allow_reuse_address = True

  try:
    print("Using python " + str(pyVersion))
    print("Serving at: 'http://localhost:" + str(args.port) + "'")

    # if in python 2, start the TCPServer the python 2 way.
    if pyVersion == 2:
      httpd = TCPServer(("", args.port), Handler)
      httpd.serve_forever()

    # if in python 3, start the TCPServer the python 3 way.
    elif pyVersion == 3:
      with TCPServer(("", args.port), Handler) as httpd:
        Handler
        httpd.serve_forever()

  except KeyboardInterrupt:
    print(" <=== Received KeyboardInterrupt, Exiting...")
    sys.exit(0)

main()