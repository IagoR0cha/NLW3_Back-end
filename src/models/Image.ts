import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Orphanages from './Orphanage';

@Entity('images')
export default class Image {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    path: string;

    @ManyToOne(() => Orphanages, orphanages => orphanages.images)
    @JoinColumn({ name: 'orphanages_id' })
    orphanages: Orphanages;
}