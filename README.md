# TYPO3 Public UI Demo

Demonstation how to use Public UI Kolibri web components in an TYPO3 project.

- https://github.com/public-ui/kolibri
- Based on https://gitlab.com/gitlab-org/project-templates/typo3-distribution/


## Prerequisites
- Docker Desktop or Colima
- DDEV
- Mutagen needs to be enabled for HMR

## Local installation guide
    git clone https://github.com/fgeierst/typo3-publicui-demo.git
    cd typo3-publicui-demo
    ddev start
    ddev composer install
    ddev snapshot restore --latest
    ddev pnpm install
    ddev pnpm build:production

Login via https://typo3-publicui-demo.ddev.site/typo3 using these credentials:

- Username: `admin`
- Password: `Password.1`

## Start Vite development server

    ddev vite-serve start

## Test the production build

    ddev vite-serve stop
    ddev pnpm build:production



