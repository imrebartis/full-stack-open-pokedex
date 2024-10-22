# What are the specific tools for taking care of the following things in Python?

Linting: Ruff (also as VS Code extension), Sonarlint (also as VS Code extension), pyType (Linux machines), Pylint, Flake8, Black, autopep8, Pychecker, mypy (also as VS Code extension), Pylama, PyFlakes, pycodestyle.

Testing: PyTest, PyUnit/UnitTest, Python Robot Framework, Python Behave, Python Gauge, Python Lettuce, Python Jasmine, Python Splinter, Python Locust, Python RedwoodHQ.

Building: Pipenv, PyBuilder, Poetry, SCons, Setuptools, tox, Buildout, PyOxidizer, Conda, VS Code With Python Extension, PyInstaller, Streamlit, PlatformIO, BitBake, Twine.

# What alternatives are there to set up the CI besides Jenkins and GitHub Actions?
CircleCI, GitLab CI, Atlassian Bamboo, JetBrains TeamCity, Buildkite Pipelines, Travis CI, GoCD, Azure DevOps.

# Would the CI setup be better in a self-hosted or a cloud-based environment?

Are the following things a priority to your organization/team: full control over configuration, customization and data management; security and availability, one-off installation fee (which can be cheaper on the long run), increased performance?

If yes, go with the self-hosted setup.

If on the other hand things like low maintenance, lower costs (depending on network traffic though), reliability, ease of management, use and collaboration, easy scaling, access anywhere & anytime, infrastructure as code (this allows creating scripts or applications that support the process of automatic infrastructure configuration) are more appealing to you, then you should choose a cloud-based environment.