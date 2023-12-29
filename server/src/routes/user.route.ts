import { refreshToken, logout, login, signin, getUserByToken, updatePassword, updateUser, updateImage, getUserByUsernameTo } from '../controllers/user.controller';
import * as express from 'express';
import multer from "multer";
const router = express.Router();

// initialize a multer object for uploading user profile image
const upload = multer({
    fileFilter: (req, file, cb) => {
        console.log(file)
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});


router.get('/', getUserByToken);
router.post('/refreshtoken', refreshToken);
router.post('/logout', logout);
router.post('/login', login);
router.post('/signin', signin);
router.post('/update', updateUser);
router.post('/byUsername', getUserByUsernameTo);
router.post('/update/password', updatePassword);
router.post('/update/image', upload.single("image"), updateImage);

export default router;