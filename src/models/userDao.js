const { sqlDataSource } = require("./data-source");

const getUserbyEmail = async (email) => {
  const [user] = await sqlDataSource.query(
    `
        SELECT
            id,
            nickname,
            email,
            social_id
        FROM 
          users
        WHERE 
          users.email = ?
        `,
    [email]
  );
  return user;
};
const createUser = async (nickname, email, id) => {
  try {
    const users = await sqlDataSource.query(
      `INSERT INTO users(
          nickname,
          email,
          social_id
          ) 
        VALUES (?, ?, ?)
        `,
      [nickname, email, id]
    );
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("INVALID DATA INPUT");
  }
};
const updateUserInfo = async (kakaoId, name, phone, date) => {
  await sqlDataSource.query(
    `UPDATE 
      users 
    SET 
      name= ?,
      birth= ?,
      phone= ? 
    WHERE social_id = ? `,
    [name, phone, date, kakaoId]
  );
};

const getUserBySocialId = async (id) => {
  const [user] = await sqlDataSource.query(
    `
        SELECT
          id,
          name,
          email,
          social_id,
          phone,
          birth
        FROM 
          users
        WHERE 
          users.social_id = ?
        `,
    [id]
  );
  return user;
};

const getUserInfoByUserId = async (id) => {
  const [user] = await sqlDataSource.query(
    `
        SELECT
          id,
          name,
          email,
          social_id,
          phone,
          birth
        FROM 
          users
        WHERE 
          users.id = ?
        `,
    [id]
  );

  return user;
};

module.exports = {
  getUserbyEmail,
  createUser,
  getUserBySocialId,
  updateUserInfo,
  getUserInfoByUserId,
};
