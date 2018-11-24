import { writePool, readPool } from '../../db/mysql';

export async function getAllSellersService({ search, limit, offset }) {
  let getQuery = 'SELECT * FROM sellers s';
  const values = [];

  if (search) {
    getQuery += ' WHERE s.name LIKE "%?%" ';
    values.push(search);
  }

  if (limit && offset) {
    getQuery += ' LIMIT ? OFFSET ?';
    values.push(parseInt(limit, 10), parseInt(offset, 10));
  }

  const result = await readPool.query(getQuery, values);
  return result[0];
}

export async function createSellersService({
  name, email, city, imageUrl,
}) {
  const result = await writePool.query(
    'INSERT INTO sellers (name, email, city, image_url) VALUES (?, ?, ?, ?)',
    [name, email, city, imageUrl],
  );
  if (!result[0].affectedRows) {
    return {};
  }
  return {
    userId: result[0].insertId,
    name,
    email,
    city,
    imageUrl,
  };
}

export async function updateSellersService({
  sellerId, name, email, city, imageUrl,
}) {
  let updateQuery = 'UPDATE sellers SET';
  const updates = [];
  const updateValues = [];

  if (name) {
    updates.push(' name = ? ');
    updateValues.push(name);
  }

  if (email) {
    updates.push(' email = ? ');
    updateValues.push(email);
  }

  if (city) {
    updates.push(' city = ? ');
    updateValues.push(city);
  }

  if (imageUrl) {
    updates.push(' image_url = ? ');
    updateValues.push(imageUrl);
  }

  updateQuery = `${updateQuery} ${updates.join()}  WHERE id = ?`;
  await writePool.query(updateQuery, [...updateValues, sellerId]);
  return {
    sellerId,
    name,
    email,
    city,
    imageUrl,
  };
}

export async function deleteSellersService({ sellerIdCollection }) {
  if (!Array.isArray(sellerIdCollection)) return;
  await writePool.query('UPDATE sellers SET is_active = 0 WHERE id IN (?)', [sellerIdCollection]);
}

export async function getProductsOfSeller({ sellerId, limit, offset }) {
  let query = 'SELECT p.* FROM products p INNER JOIN products_seller_maping psm ON p.id = psm.peoduct_id WHERE psm.sellerId = ?';

  const values = [sellerId];

  if (limit && offset) {
    query += ' LIMIT ? OFFSET ?';
    values.push(parseInt(limit, 10), parseInt(offset, 10));
  }
  const result = await readPool.query(query, values);
  return result[0];
}
