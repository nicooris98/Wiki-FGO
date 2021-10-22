import { Np } from './np';
import { Skill } from './skill';
import { Trait } from './trait';

export interface Servant {
    id: number;
    name: string;
    rarity: string;
    class: string;
    atkMax: number;
    hpMax: number;
    np: Np[];
    cards: string[];
    img: string;
    skills: Skill[];
    classPassive: Skill[];
    traits: Trait[];
    cost: number;
    lvMax: number;
    attribute: string;
}
