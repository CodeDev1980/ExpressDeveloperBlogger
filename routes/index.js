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
const logoutController = require('../controllers/logoutUser');
const newProjectController = require('../controllers/newProject');
const storeProjectController = require('../controllers/StoreProject');
const projectsPageController = require('../controllers/projectsPage');
const singleProjectController = require('../controllers/singleProject');
const deleteProjectController = require('../controllers/deleteProject');

const authMiddleWare = require('../middleware/authorized');
const redirectMiddleWare = require('../middleware/redirectIfUser');
// const validateForm = require('../middleware/formValidate');

router.get('/', homeController);
router.get('/about', aboutController);
router.get('/gallery', galleryController);
router.get('/newProject', newProjectController); // no ejs page yet
router.post('/project/store', storeProjectController); // no ejs page yet
router.get('/projects', projectsPageController); // no ejs page yet
router.get('/singleProject/:id', singleProjectController); // no ejs page yet
router.get('/deleteProject/:id', deleteProjectController); // no ejs page yet
router.get('/blogs', blogsController);
router.get('/post/:id', singlePostController);
router.get('/create', authMiddleWare, createPostController);
router.post('/store/post', authMiddleWare, storePostController);
router.get('/delete/:id', deletePostController);
router.get('/register', redirectMiddleWare, registerController);
router.post('/store/user', storeUserController);
router.get('/login', redirectMiddleWare, loginController);
router.post('/login/user', loginUserController);
router.get('/logout', logoutController);

module.exports = router;