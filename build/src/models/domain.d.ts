import { Granularity } from '../utils/dates';
import DomainConfig from './domain.config';
import Ev3nt from './event';
declare class Domain {
    config: DomainConfig;
    granularity: Granularity;
    pixelsPerDay: number;
    private _left;
    height: number;
    width: number;
    nextDate: (d: Date) => Date;
    topAdder: (e: Ev3nt) => Ev3nt;
    constructor(config: DomainConfig);
    dateAtPosition(x: number): Date;
    dateAtProportion(proportion: number): Date;
    left: number;
    updateLeft(): number;
    positionAtDate(date: Date): number;
    proportionAtPosition(position: number): number;
}
export default Domain;