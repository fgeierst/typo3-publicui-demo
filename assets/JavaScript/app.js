import "../Scss/app.scss";

import { register } from '@public-ui/components';
import { DEFAULT, ECL_EU } from '@public-ui/themes';

register([DEFAULT, ECL_EU], [], {
  theme: {
    detect: "auto",
  }
} ).catch(console.warn);

