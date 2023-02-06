const router = require('express').Router();

const auth = require('../middleware/auth');
const userController = require('../controllers/user.controller');
const authAdmin = require('../middleware/authAdmin');

router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/infor', auth, userController.getUserInfor);
router.get('/all_infor', auth, authAdmin, userController.getUsersAllInfor);
router.patch('/update_user', auth, userController.updateUserInfor);
router.patch(
    '/update_role/:id',
    auth,
    authAdmin,
    userController.updateUserRole
);
router.delete('/delete_user/:id', auth, authAdmin, userController.deleteUser);


module.exports = router;
