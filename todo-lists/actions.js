const pool = require('../postgresdb_list')

module.exports = {
    getAllTasks: async function (res) {
        try {
            const result = await pool.query('SELECT * FROM mylist ORDER BY id');
            console.log(result.rows)
            return { data: result.rows }
        } catch (err) {
            console.error('Error fetching data:', err.message);
            res.status(500).json({ error: 'Failed to get data' });
        }
    },

    updateTask: async function (req,res) {
        const { id } = req.params;
        const data = req.body;
        console.log("val", id, data)
        let query;
        let values;
        try {
            if (data.type == 'Completed') {
                query = `
                UPDATE public.mylist
                SET iscompleted = $1
                WHERE id = $2;
            `;
                values = [data.isCompleted, id];
            }
            else {
                query = `
                UPDATE public.mylist
                SET title = $1
                WHERE id = $2;
            `;
                values = [data.title, id];
            }
            console.log(values)
            const result = await pool.query(query, values);
            console.log(result)
            return "updated successfully"
        } catch (error) {
            console.error('Error fetching data:', error.message);
            res.status(500).json({ error: 'Failed to update row' });
        }
    },

    addTask: async function (req,res) {
        const { title, active, status, iscompleted } = req.body;
        try {
            const query = `
           INSERT INTO public.mylist (title, active, status, iscompleted)
            VALUES ($1, $2, $3, $4);
        `;
            await pool.query(query, [title, active, status, iscompleted]);
            return 'Row added successfully';
        } catch (error) {
            console.error('Error adding row:', error);
            res.status(500).json({ error: 'Failed to add row' });
        }
    },

    deleteTask: async function (req,res) {
        const data = req.body;
        console.log("val", data)
        let query;
        try {
            query = `
                UPDATE public.mylist
                SET active = $1
                WHERE id = $2;
            `;
            const result = await pool.query(query, [data.active,data.id]);
            console.log(result)
            return "updated successfully"
        } catch (error) {
            console.error('Error fetching data:', error.message);
            res.status(500).json({ error: 'Failed to delete row' });
        }
    },

    deleteAllTask: async function (req,res) {
        const data = req.body;
        console.log("val", data)
        let query;
        try {
            query = `
                UPDATE public.mylist
                SET active = $1
                WHERE active = false;
            `;
            const result = await pool.query(query, [true]);
            console.log(result)
            return "updated successfully"
        } catch (error) {
            console.error('Error fetching data:', error.message);
            res.status(500).json({ error: 'Failed to delete all rows' });
        }
    },


}