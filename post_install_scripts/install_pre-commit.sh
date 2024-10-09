#!/bin/bash

cp ./.githooks/pre-commit ./.git/hooks/pre-commit
chmod +x ./.git/hooks/pre-commit
npm install eslint eslint-config-airbnb eslint-plugin-yml --save-dev
npm i eslint-config-drupal
echo "The pre-commit hook installed"
