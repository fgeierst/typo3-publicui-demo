<?php

$config = \TYPO3\CodingStandards\CsFixerConfig::create();

// CS Fixer will only analyze files in "./packages/". Feel free to customize
$config->getFinder()->in(__DIR__ . '/packages');
return $config;
