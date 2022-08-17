export type ItemData = {
    id: string,
    text: string
}

export type BinData = {
    id: string,
    label: string,
    position: {
        x: number, y: number
    },
    size: {
        width: number,
        height: number
    }
}

const ITEMS = [
    {
        id: 'item11',
        text: 'stołówka'
    },
    {
        id: 'item12',
        text: 'leżalnie'
    },
    {
        id: 'item13',
        text: 'picie mleka'
    },
    {
        id: 'item14',
        text: 'szatnia'
    },
    {
        id: 'item15',
        text: 'koce'
    },

    {
        id: 'item21',
        text: 'umywalnie'
    },
    {
        id: 'item22',
        text: 'mierzenie temp.'
    },
    {
        id: 'item23',
        text: 'nocniki'
    },
    {
        id: 'item24',
        text: 'czyszczenie obuwia'
    },

    {
        id: 'item31',
        text: 'rozrywki'
    },
    {
        id: 'item32',
        text: 'goście - rodzice'
    },
    {
        id: 'item33',
        text: 'poczta'
    },
    {
        id: 'item34',
        text: 'biblioteka'
    },

    {
        id: 'item41',
        text: 'gołębnik'
    },
    {
        id: 'item42',
        text: 'stacja meteo.'
    },
    {
        id: 'item43',
        text: 'ogród i sad'
    },
    {
        id: 'item44',
        text: 'kurnik'
    }
];


export const SCREEN: {
    ITEMS: ItemData[],
    BINS: BinData[],
    PAGES: string[][],
    ANSWERS: [string, {
        id: string,
        position: {
            x: number, y: number
        }
    }[]][]
} = {
    PAGES: ITEMS
        .map(i => i.id)
        .reduce((prev, itemId) => {

            if (!prev.length) {
                return [[itemId]]
            }

            if (prev[prev.length - 1].length < 3) {
                prev[prev.length - 1].push(itemId);
                return prev;
            }

            return [
                ...prev,
                [itemId]
            ];
        }, [] as string[][])

    ,
    ANSWERS: [
        ['bin1', [
            { id: 'item11', position: { x: 20, y: 20 } },
            { id: 'item12', position: { x: 20, y: 40 } },
            { id: 'item13', position: { x: 20, y: 60 } },
            { id: 'item14', position: { x: 20, y: 80 } },
            { id: 'item15', position: { x: 20, y: 100 } }
        ]
        ],
        ['bin2', [
            { id: 'item21', position: { x: 20, y: 20 } },
            { id: 'item22', position: { x: 20, y: 40 } },
            { id: 'item23', position: { x: 20, y: 60 } },
            { id: 'item24', position: { x: 20, y: 80 } }
        ]],
        ['bin3', [
            { id: 'item31', position: { x: 20, y: 20 } },
            { id: 'item32', position: { x: 20, y: 40 } },
            { id: 'item33', position: { x: 20, y: 60 } },
            { id: 'item34', position: { x: 20, y: 80 } }
        ]],
        ['bin4', [
            { id: 'item41', position: { x: 20, y: 20 } },
            { id: 'item42', position: { x: 20, y: 40 } },
            { id: 'item43', position: { x: 20, y: 60 } },
            { id: 'item44', position: { x: 20, y: 80 } }
        ]]
    ],
    ITEMS,
    BINS: [
        {
            id: 'bin1',
            label: 'Gospodarstwo',
            position: {
                x: .05,
                y: .1
            },
            size: {
                width: 200,
                height: 400
            }
        },
        {
            id: 'bin2',
            label: 'Higiena',
            position: {
                x: .55,
                y: .1
            },
            size: {
                width: 200,
                height: 400
            }
        },
        {
            id: 'bin3',
            label: 'koło pracy kulturalnej',
            position: {
                x: .05,
                y: .3
            },
            size: {
                width: 200,
                height: 400
            }
        },
        {
            id: 'bin4',
            label: 'Koło przyrodnicze',
            position: {
                x: .55,
                y: .3
            },
            size: {
                width: 200,
                height: 400
            }
        },
    ]
}
