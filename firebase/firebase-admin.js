import * as admin from 'firebase-admin';

const credentials = {
  client_email: process.env.client_email,
  private_key: process.env.private_key,
  project_id: process.env.projectId,
};

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(credentials),
    databaseURL: process.env.databaseURL,
  });
}

export default admin;
