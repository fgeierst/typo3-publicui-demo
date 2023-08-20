import "../Scss/app.scss";

import { register } from '@public-ui/components';
import { defineCustomElements } from '@public-ui/components/dist/loader';
import { ITZBund } from '@public-ui/themes';

register([ITZBund], defineCustomElements).catch(console.warn);

