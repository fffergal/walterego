requirements.txt: requirements.in
	CUSTOM_COMPILE_COMMAND="make requirements.txt" pip-compile --no-emit-index-url --no-emit-find-links $(PIP_COMPILE_ARGS)

dev-requirements.txt: dev-requirements.in requirements.txt
	CUSTOM_COMPILE_COMMAND="make dev-requirements.txt" pip-compile dev-requirements.in --no-emit-index-url --no-emit-find-links $(PIP_COMPILE_ARGS)

junit.xml: tox.ini walterego/**/*
	tox

.coverage: tox.ini walterego/**/*
	tox

coverage.xml: .coverage
	coverage xml
