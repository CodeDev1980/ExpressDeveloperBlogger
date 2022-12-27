var router = require('express').Router();

const homeController = require('../controllers/homePage');
const aboutController = require('../controllers/aboutPage');
const galleryController = require('../controllers/gallery');
const blogsController = require('../controllers/blogsPage');
const singlePostController = require('../controllers/singlePost');
const createPostController = require('../controllers/createPost');
const storePostController = require('../controllers/storePost');
const deletePostController = require('../controllers/deletePost');
const registerController = require('../controllers/registerUser');
const storeUserController = require('../controllers/storeUsers');
const loginController = require('../controllers/login');
const loginUserController = require('../controllers/loginUser');
const profilesController = require('../controllers/profiles');
const singleProfileController = require('../controllers/singleProfile');
const logoutController = require('../controllers/logoutUser');
const deleteMemberController = require('../controllers/deleteProfile');

const authMiddleWare = require('../middleware/authorized');
const redirectMiddleWare = require('../middleware/redirectIfUser');
// const validateForm = require('../middleware/formValidate');

router.get('/', homeController);
router.get('/about', aboutController);
router.get('/gallery', galleryController);
router.get('/blogs', blogsController);
router.get('/post/:id', singlePostController);
router.get('/create', authMiddleWare, createPostController);
router.post('/store/post', authMiddleWare, storePostController);
router.get('/delete/:id', deletePostController);
router.get('/register', redirectMiddleWare, registerController);
router.post('/store/user', storeUserController);
router.get('/login', redirectMiddleWare, loginController);
router.post('/login/user', loginUserController);
router.get('/profiles', profilesController);
router.get('/profile/:id', singleProfileController);
router.get('/logout', logoutController);
router.get('/deleteProfile/:id', deleteMemberController);

module.exports = router;