import { Request, Response } from 'express';
import { ListTagsService } from '../services/ListTagsService';

class ListTagsController {
    
    async handle(request: Request, response: Response) {
        const { user_id } = request;
        const listUserReceiveTagsService = new ListTagsService();

        const tags =  await listUserReceiveTagsService.execute(user_id);

        return response.json(tags);
    }

}

export { ListTagsController }