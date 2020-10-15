import admin from '../../firebase/firebase-admin';

export default async (_, res) => {
  const snapshot = await admin.firestore().collection('sites').get();
  const sites = [];
  snapshot.forEach((doc) => {
    sites.push({ siteId: doc.id, ...doc.data() });
  });
  res.status(200).json({ sites });
};
