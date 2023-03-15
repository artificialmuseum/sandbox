rm -rf node_modules package.json package-lock.json shrinkwrap.yaml server.py \
&& mv src/* . \
&& rm -rf src \
&& rm init-glitch.sh \
&& refresh
