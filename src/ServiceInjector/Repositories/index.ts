import { CatsRepository } from './CatsRepository';

export class Repositories {

    public catsRepository = new CatsRepository();
}

export const repositories = new Repositories();