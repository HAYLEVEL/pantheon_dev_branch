# Setting Up Pre-Commit Hooks for PHPCS, ESLint and Trivy

To use the pre-commit pipeline effectively, please follow the steps below to ensure the correct configurations are set for PHP CodeSniffer (PHPCS) and ESLint.

## Steps to Enable PHPCS, ESLint and Trivy

### 1. Update Pre-commit Hook

Replace your pre-commit file stored in the `.git/hooks` directory. If you want to change the file inside `.githooks` and have your changes applied to `.git/hooks/`, create a symbolic link:

```bash
# Create symbolic link (adjust paths as necessary)
ln -s .githooks/pre-commit .git/hooks/pre-commit
```

### 2. Install PHPCS

Run the following command to install PHP CodeSniffer globally:
```bash
composer global require "squizlabs/php_codesniffer=*"
```

### 3. Configure PHPCS

Set the necessary configurations for PHPCS:
```bash
# Set the installed paths for Drupal Coder
vendor/bin/phpcs --config-set installed_paths vendor/drupal/coder/coder_sniffer

# Set the default coding standard
vendor/bin/phpcs --config-set default_standard Drupal,DrupalPractice
```

### 4. Install ESLint

To set up ESLint, run the following commands:

```bash
npm install eslint eslint-config-airbnb eslint-plugin-yml --save-dev
npm i eslint-config-drupal --save-dev
```

### 5. Install Trivy

To set up Trivy, run the following commands:

```bash
sudo apt-get install wget apt-transport-https gnupg
wget -qO - https://aquasecurity.github.io/trivy-repo/deb/public.key | gpg --dearmor | sudo tee /usr/share/keyrings/trivy.gpg > /dev/null
echo "deb [signed-by=/usr/share/keyrings/trivy.gpg] https://aquasecurity.github.io/trivy-repo/deb generic main" | sudo tee -a /etc/apt/sources.list.d/trivy.list
sudo apt-get update
sudo apt-get install trivy
```

### 6. Verify Installation

Create a commit and ensure that the pre-commit hooks for PHPCS, ESLint and Trivy work as expected

```bash
git add .
git commit -m "Test pre-commit hooks"
```
