// Scss entrypoint
import "../Scss/app.scss";

// Use vite-svg-loader, see https://www.npmjs.com/package/vite-svg-loader#user-content-import-params
import typo3Logo from '../Image/Icon/typo3.svg?url'
document.querySelector('.js-made-with').innerHTML = 'Made with <img width="20px" height="20px" src="' + typo3Logo + '" alt="TYPO3">'

// TYPO3.lang contains all available inline labels
console.log("Say hi! " + TYPO3.lang["site-distribution.welcome"]);
