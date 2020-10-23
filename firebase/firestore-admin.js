import admin from './firebase-admin';
import compare from './util/sortByDate';

export async function getAllFeedback(siteId) {
  try {
    const snapshot = await admin
      .firestore()
      .collection('feedback')
      .where('siteId', '==', siteId)
      .get();
    const unorderedFeedback = [];
    snapshot.forEach((doc) => {
      unorderedFeedback.push({ feedbackId: doc.id, ...doc.data() });
    });
    const feedback = unorderedFeedback.sort(compare);
    return feedback;
  } catch (error) {
    return error;
  }
}

export async function getAllSites() {
  try {
    const snapshot = await admin.firestore().collection('sites').get();
    const sites = [];
    snapshot.forEach((doc) => {
      sites.push({ siteId: doc.id, ...doc.data() });
    });
    return sites;
  } catch (error) {
    console.log(error);
    return error;
  }
}
