export type PetrolType = 'ron95' | 'ron97' | 'diesel'| 'diesel_east';
export type PetrolRegion = 'All region' | 'Peninsular Malaysia' | 'Sabah, Sarawak & Labuan';
export interface PetrolCard {
    type: PetrolType;
    label: 'RON 95' | 'RON 97' | 'DIESEL'| 'DIESEL EAST';
    region: PetrolRegion;
    price: number;
}