import './common/env';
import { server, connectToDB } from './api';

const port = process.env.PORT || 3001;

server.listen(port, async () => {
  await connectToDB();
  console.log(`Server running on port http://localhost:${port} !`);
});
