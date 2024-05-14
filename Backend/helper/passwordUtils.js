const bcrypt = require('bcrypt');

class PasswordUtils {
    static async hashPassword(password) {
        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            return hashedPassword;
        } catch (error) {
            console.error("Error hashing password:", error);
            return null;
        }
    }

    static async comparePasswords(password, hashedPassword) {
        try {
            return await bcrypt.compare(password, hashedPassword);
        } catch (error) {
            console.error("Error comparing passwords:", error);
            return false;
        }
    }
}

module.exports = PasswordUtils;
