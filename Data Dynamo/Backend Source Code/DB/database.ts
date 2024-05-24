
import mysql from 'mysql2/promise';



const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root', // Change the user if you have a different user in your XAMPP setup
    password: '', // Set the password if you have one; it might be empty by default
    database: 'socialMedia', // Replace 'your_database_name' with your database name
});

// const db = async () => {
//     try {
export default {
    query: async (text: string, params?: any[], limit?: number, offset?: number) => {
        const connection = await pool.getConnection();
        try {
            if (limit !== undefined && offset !== undefined) {
                const [rows] = await connection.query(text + ' LIMIT ?, ?', [...(params || []), offset, limit]);
                return rows;
            } else {
                const [rows] = await connection.query(text, params);
                return rows;
            }
        } finally {
            connection.release();
        }
    },
};



