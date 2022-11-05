import { Model } from 'sequelize-typescript';
export default class Event extends Model {
    id: number;
    name: string;
    createdAt: Date;
}
