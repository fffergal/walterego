requirements.txt: setup.py
	CUSTOM_COMPILE_COMMAND="make requirements.txt" pip-compile --no-emit-index-url --no-annotate

dev-requirements.txt: dev-requirements.in requirements.txt
	CUSTOM_COMPILE_COMMAND="make dev-requirements.txt" pip-compile dev-requirements.in --no-emit-index-url --no-annotate
