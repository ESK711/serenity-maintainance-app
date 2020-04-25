import 'zone.js/dist/zone-node';

import { connect } from '../dist/server/main';

const run = async ( ) => {
  const port = process.env.PORT || 4000;

  // Start up the Node server
  const server = connect( );
  server.listen(port, ( ) => {
    console.log(`Node Express server listening on http://localhost:${ port }`);
  });
}

run( );