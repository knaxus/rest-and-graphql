import humps from 'humps';
import { writePool, readPool } from '../../db/mysql';

export async function getAllReviewsService({ search, limit, offset }) {
  let getQuery = 'SELECT * FROM product_reviews pr';
  const values = [];

  if (search) {
    getQuery += ` WHERE pr.title LIKE "%${search}%" `;
    // values.push(search);
  }

  if (limit && (offset || offset === 0)) {
    getQuery += ' LIMIT ? OFFSET ?';
    values.push(parseInt(limit, 10), parseInt(offset, 10));
  }

  const result = await readPool.query(getQuery, values);
  return humps.camelizeKeys(result[0]);
}

export async function getResourceDetails({ reviewId }) {
  const query = 'SELECT * FROM product_reviews WHERE id = ?';
  const result = await readPool.query(query, [reviewId]);
  if (result.length) {
    return result[0][0];
  }
  return {};
}

// TODO: remove userId with the person currently logged in
export async function createReviewsService({
  userId, productId, title, description,
}) {
  const result = await writePool.query(
    'INSERT INTO product_reviews (user_id, product_id, title, description) VALUES (?, ?, ?, ?)',
    [userId, productId, title, description],
  );
  if (!result[0].affectedRows) {
    return {};
  }
  return {
    userId,
    productId,
    title,
    description,
  };
}

export async function updateReviewsService({ reviewId, title, description }) {
  let updateQuery = 'UPDATE product_reviews SET';
  const updates = [];
  const updateValues = [];

  if (title) {
    updates.push(' title = ? ');
    updateValues.push(title);
  }

  if (description) {
    updates.push(' description = ? ');
    updateValues.push(description);
  }

  updateQuery = `${updateQuery} ${updates.join()}  WHERE id = ?`;
  await writePool.query(updateQuery, [...updateValues, reviewId]);
  const updatedReview = await getResourceDetails({ reviewId });
  return updatedReview;
}

export async function deleteReviewsService({ reviewIdCollection }) {
  if (!Array.isArray(reviewIdCollection)) return;
  await writePool.query('UPDATE product_reviews SET is_active = 0 WHERE id IN (?)', [
    reviewIdCollection,
  ]);
}
