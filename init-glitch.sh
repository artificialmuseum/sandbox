# remove unneeded nodejs and python files
rm -rf \
  node_modules \
  package.json \
  package-lock.json \
  shrinkwrap.yaml \
  server.py \
  .gitignore \
  README.md

# move the actual sandbox contents into the main directory
mv src/* .

# remove the src directory, it is now empty.
rm -rf src

# remove this file
rm init-glitch.sh \

# refresh glitch to get the new file hierarchy shown
refresh
