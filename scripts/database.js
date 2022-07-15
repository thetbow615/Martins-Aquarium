//build function that holds fish inventory will be exported
const database = {
    fishes: [
        {
         id: 1,
         image: 'https://www.citarella.com/media/catalog/product/cache/6bd6bc90948058f1c179c773d53c57be/0/2/024011700000.jpg',//AGE LINK HERE
         name: 'Larry',
         species: "Lobster",
         length: 10,
         location: 'The Amazon River', 
         food: 'plankton'
        },
        {
         id: 2,
         image: 'https://media.meer.com/attachments/66daa0267672042e3468f8f6208625a05513f030/store/fill/860/645/e6101c269024548aa40ddcac9b3fa54eee13cb721e7c8f8bcdf890436959/A-puffer-fish.jpg',// IMAGE LINK HERE
         name: 'Puff',
         species: "Pufferfish",
         length: 3,
         location: 'Atlantic Ocean', 
         food: 'coral'
        },
        {
         id: 3,
         image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSnD0m-XbGEtf4b7D7oJ6Efnh5RI8c8Z_YLg&usqp=CAU',// IMAGE LINK HERE
         name: 'Sal',
         species: "Salmon",
         length: 7,
         location: 'Percy Priest', 
         food: 'plankton'
        },
        {
         id: 4,
         image: 'https://portal.ct.gov/-/media/DEEP/fishing/freshwater/freshwater_fishes/Sunfishes-and-Freshwater-Basses/66aPumpkinseed18cmcompressed.jpg?sc_lang=en&hash=1CC891F2615E1C2CCFDFF845BCB9C1E0',// IMAGE LINK HERE
         name: 'Sunny',
         species: "Sunfish",
         length: 11,
         location: 'The Amazon River', 
         food: 'sand'   
        },
        {
         id: 5,
         image: 'https://cdn-acgla.nitrocdn.com/bvIhcJyiWKFqlMsfAAXRLitDZjWdRlLX/assets/static/optimized/rev-5131b73/wp-content/uploads/2021/01/shutterstock_117425023-1-scaled.jpg',// IMAGE LINK HERE
         name: 'Turner',
         species: "Tuna",
         length: 8,
         location: 'Atlantic Ocean', 
         food: 'coral'
        },
        {
         id: 6,
         image: 'https://upload.wikimedia.org/wikipedia/commons/4/48/A_mackerel.jpg',// IMAGE LINK HERE
         name: 'Mack',
         species: "Mackerel",
         length: 12,
         location: 'Lake Michigan', 
         food: 'krill'
        }
    ]
}

export const getFish = () => {
    return database.fishes.map(fish => ({...fish}))
}

// exports martinsFishes which holds Array of fish