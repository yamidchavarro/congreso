import { Request, Response } from 'express';
import db from "../database";

class RegisterController {
    constructor() {

    }

    public index(req: Request, res: Response) {
        
        res.send('hola');
    }
    public async typeDocu(req: Request, res: Response): Promise<any> {
        const data = await db.query('SELECT * FROM type_docu');
        if (data.length > 0) {
            return res.json(data);
        }
        res.status(404).json({ message: "Not found type document" });
    }
    public async departament(req: Request, res: Response): Promise<any> {
        const data = await db.query('SELECT * FROM departament');
        if (data.length > 0) {
            return res.json(data);
        }
        res.status(404).json({ message: "Not found type document" });
    }
    public async modality(req: Request, res: Response): Promise<any> {
        const data = await db.query('SELECT * FROM modality');
        if (data.length > 0) {
            return res.json(data);
        }
        res.status(404).json({ message: "Not found type document" });
    }
    public async modalityProject(req: Request, res: Response): Promise<any> {
        const data = await db.query('SELECT * FROM modality_project');
        if (data.length > 0) {
            return res.json(data);
        }
        res.status(404).json({ message: "Not found type document" });
    }
    public async mainTheme(req: Request, res: Response): Promise<any> {
        const data = await db.query('SELECT * FROM main_theme');
        if (data.length > 0) {
            return res.json(data);
        }
        res.status(404).json({ message: "Not found type document" });
    }
    public async city(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const data = await db.query('SELECT * FROM city WHERE departament_id = ? ',[id]);
        if (data.length > 0) {
            return res.json(data);
        }
        res.status(404).json({ message: "Not found type document" });
    }
    public async create(req: Request, res: Response) :Promise<void> {
        try {
            await db.query('INSERT INTO user_register SET ?', [req.body]);
            res.json({ message: 'User Save' });
        } catch (error) {
            res.status(404).json({ message: error });
        }
       
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await db.query('DELETE FROM user_register WHERE id = ?', [id]);
        res.json({ message: 'User Delete' });
    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await db.query('UPDATE user_register set ?', [req.body,id]);
        res.json({ message: 'User Update' });
    }

}
const registerController = new RegisterController();
export default registerController;