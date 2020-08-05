import { print, log, TEST_STRING as somethingElse } from './textHelpers'; // alias a variable
//import * as fns from './textHelpers'; // import everything

import add from './add';

// fns.print('Hello');

print('Hello');
log('logging a message', new Date());
log(somethingElse);
log(add(10, 25));
