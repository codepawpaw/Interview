import { Model } from 'sequelize-typescript';
export default class MenuItem extends Model {
    id: number;
    name: string;
    url: string;
    parentId: number;
    createdAt: Date;
}
