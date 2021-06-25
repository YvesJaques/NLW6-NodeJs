import { Request, Response } from 'express';
import { ListUsersService } from '../services/ListUsersService';

class ListUsersController {
    
    async handle(request: Request, response: Response) {
        const { user_id } = request;
        const listUserReceiveUsersService = new ListUsersService();

        const users =  await listUserReceiveUsersService.execute(user_id);

        return response.json(users);
    }

}

export { ListUsersController }