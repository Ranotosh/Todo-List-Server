const pool = require('../postgresdb')

module.exports = {
    getCount: async function (res) {
        try {
            const result = await pool.query('SELECT COUNT(*) FROM student');
            console.log(result.rows[0])
            return result.rows[0].count
          } catch (err) {
            console.error('Error fetching data:', err.message);
            reject(new Error('Error:Http Status - '+err.message))
          }
    }

}