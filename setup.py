from setuptools import find_packages, setup

setup(
    name="walterego",
    version="1.0.0",
    packages=find_packages(exclude=["tests.*"]),
    install_requires=[
        "Authlib~=0.15",
        "Flask~=1.1",
        "requests~=2.25",
    ],
)
