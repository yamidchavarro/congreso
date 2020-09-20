import { Router } from 'express';
import registerController from "../controllers/registerController";

class RegisterRouter {

    public router: Router = Router();

    constructor() {
        this.config();
    }
    config(): void {
        this.router.get('/', registerController.index);
        this.router.get('/typedocu', registerController.typeDocu);
        this.router.get('/departament', registerController.departament);
        this.router.get('/modality', registerController.modality);
        this.router.get('/modalityproject', registerController.modalityProject);
        this.router.get('/maintheme', registerController.mainTheme);
        this.router.get('/city/:id', registerController.city);
        this.router.post('/register', registerController.create);
        // this.router.delete('/register:id', registerController.index);
    }
}
const registerRouter = new RegisterRouter();
export default registerRouter.router;