# TYPO3 Distribution - GitLab Project Template

Get going quickly with TYPO3 CMS and GitLab.

## Quickstart

Use this command to set up the template

 * `ddev typo3-init`

## All commands - manual setup

Configure ddev, install packages and start the ddev instance:

```
ddev start
ddev composer install
ddev typo3 setup
```

Prepare and build frontend:

```
ddev npm install
ddev npm run build:production
```

Initialize data (page tree and link assets):

```
ddev typo3 extension:setup
ddev composer dumpautoload
```

## Use Vite.js [dev server for ddev](https://github.com/torenware/ddev-viteserve#getting-started)

```
ddev get torenware/ddev-viteserve
ddev restart
ddev vite-serve start
```

## Files and folders

The folder `packages` contains all your local extension/packages.
Require these packages simply by using `composer req vendor/package:@dev`

`assets` contains all scss, javascript, images and fonts which will be processed
by [Vite.js](https://vitejs.dev/) and stored in `packages/site-distribution/Resources/Public/`.

## Npm Scripts / Vite.js

The frontend toolchain uses NPM and Vite.js with a few loaders to ...
  * Compile scss to css (`assets/Scss`)
  * Bundle javascript (`assets/JavaScript`)
  * Copy images (`assets/Image`) and fonts (`assets/Fonts`) to the Public folder of EXT:site-distribution

Watch for changes in js/scss files:
```
npm run watch
```

Build JS, CSS for development use (not compressed/optimized):
```
npm run build:development
```

Build JS, CSS for production use:
```
npm run build:production
```

## QA / Analysis

Run PHPStan:
```
./vendor/bin/phpstan analyse -c .phpstan.neon --no-progress
```

PHP CS Fixer:
```
./vendor/bin/php-cs-fixer fix --dry-run --diff
```

## Composer Scripts - GitLab Runner

Run the `build_assets` Job:
```
composer run-script runner:assets
```

Run the `php_cs_fixer` Job:
```
composer run-script runner:fixer
```

Run the `package_install` Job:
```
composer run-script runner:install
```

Run the `phpstan` Job:
```
composer run-script runner:phpstan
```

## Deployer

`deploy.yaml` contains an example configuration for deployer
(PHP deployment tool). It's recommended to run [deployer](https://deployer.org/)
in GitLab CI.

Run deployer locally (only for testing):
```
./vendor/bin/dep deploy -vvv staging
```

## Documentation

  * TYPO3 - https://docs.typo3.org/
  * DDEV - https://ddev.readthedocs.io/en/stable/
  * Vite.js - https://vitejs.dev/
  * Deployer - https://deployer.org/docs/7.x/basics

## License

GPL-2.0 or later
