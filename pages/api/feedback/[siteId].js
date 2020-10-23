// we don't need this api route
// since we are going to use getStaticPaths and getStaticProps
// it's just for testing purpose

import { getAllFeedback } from '../../../firebase/firestore-admin';

export default async (req, res) => {
  const siteId = req.query.siteId;
  const feedback = await getAllFeedback(siteId);
  res.status(200).json({ feedback });
};
