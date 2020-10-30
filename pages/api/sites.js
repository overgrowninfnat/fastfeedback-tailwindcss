import admin from 'firebase-admin';
import { getUserSites } from '../../firebase/firestore-admin';

export default async (req, res) => {
  try {
    const { uid } = await admin.auth().verifyIdToken(req.headers.token);
    const sites = await getUserSites(uid);
    res.status(200).json({ sites });
  } catch (error) {
    res.status(500).json(error);
  }
};
