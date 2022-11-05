import { Model } from 'sequelize-typescript';
export default class Workshop extends Model {
    id: number;
    start: string;
    end: string;
    eventId: number;
    name: string;
    createdAt: string;
}
