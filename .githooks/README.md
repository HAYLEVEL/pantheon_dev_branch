# Using the pre commit hook for PHPCS and ESLint linting and Trivy for checking project vulnerabilities.

## Requirements

- Installed node.
- Installed composer.
- Installed trivy globaly.

## How to use

To use pre-commit hook for linting code and checking project vulnerabilities you need start ```composer install``` command.
After that,  a post-installation script is launched that installs all the necessary dependencies for ESLint.
Please check the logs composer install and make sure that all went well.
In another case, you must resolve all errors provided in logs.
After everything written above, try to commit the changes and make sure that the precommit hook works properly.
 
