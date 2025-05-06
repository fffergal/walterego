requirements.txt: requirements.in
	CUSTOM_COMPILE_COMMAND="make requirements.txt" pip-compile --no-emit-index-url --no-emit-find-links $(PIP_COMPILE_ARGS)

dev-requirements.txt: dev-requirements.in requirements.txt
	# Need to add -c requirements.txt here instead of in dev-requirements.in
	# because of a bug between pip-compile and pip that inserts absolute
	# paths into annotations.
	# https://github.com/jazzband/pip-tools/issues/2131
	CUSTOM_COMPILE_COMMAND="make dev-requirements.txt" pip-compile dev-requirements.in -c requirements.txt --no-emit-index-url --no-emit-find-links $(PIP_COMPILE_ARGS)

junit.xml: tox.ini walterego/**/*
	tox

.coverage: tox.ini walterego/**/*
	tox

coverage.xml: .coverage
	coverage xml
