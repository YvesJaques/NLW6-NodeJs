import { classToPlain } from 'class-transformer';
import { getCustomRepository } from 'typeorm';
import { TagsRepository } from '../repositories/TagsRepository';

class ListTagsService {
    async execute(user_id: string) {
        const tagsRepository = getCustomRepository(
            TagsRepository
        );

        const tags = await tagsRepository.find();

        return classToPlain(tags)
    }
}

export { ListTagsService }