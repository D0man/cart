export interface GameData {
    id:number|string,
    img: string,
    title: string,
    isOwned: boolean,
    price: number,
    promotionValue: null|number
    isCart:boolean;
}


export const games: GameData[] = [
    {
        id: 0,
        img: '/src/assets/images/oddworld.webp',
        title: `Oddworld: Stranger's wrath`,
        isOwned: false,
        price: 9.99,
        promotionValue: 50,
        isCart: false,

    },
    {
        id:1,
        img: '/src/assets/images/deponia.webp',
        title: `chaos on deponia`,
        isOwned: true,
        price: 9.99,
        promotionValue: 50,
        isCart: false,
    },
    {
        id:2,
        img: '/src/assets/images/setllers.webp',
        title: `The settlers 2: gold edition`,
        isOwned: false,
        price: 5.99,
        promotionValue: null,
        isCart: true,
    },
    {
        id:3,
        img: '/src/assets/images/neverwinter.webp',
        title: `neverwinter nights`,
        isOwned: false,
        price: 9.99,
        promotionValue: 50,
        isCart: false,
    },
    {
        id:4,
        img: '/src/assets/images/assasins.webp',
        title: `assassin’s creed: director’s cut`,
        isOwned: false,
        price: 9.99,
        promotionValue: null,
        isCart: true,
    }
]