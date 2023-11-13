make install:
	npm install

make local-tests:
	npm test

make sauce-labs-tests:
	saucectl run