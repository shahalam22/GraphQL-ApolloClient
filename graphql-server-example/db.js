let games = [
    {id: 1, title: 'Zelda, Tears of the Moon', platform: ['Switch']},
    {id: 2, title: 'Final Fantasy 7 Remake', platform: ['PS5', 'Xbox']},
    {id: 3, title: 'Halo 5', platform: ['Xbox']},
    {id: 4, title: 'Zelda, Tears of the Moon', platform: ['Switch']},
    {id: 5, title: 'Final Fantasy 7 Remake', platform: ['PS5', 'Xbox']},
]

let authors = [
    {id: 1, name: 'John Doe', verified: true},
    {id: 2, name: 'Youshi Mago', verified: false},
    {id: 3, name: 'John Smith', verified: true},
]

let reviews = [
    {id: 1, rating: 5, content: 'lorem ipsum', author_id: '1', game_id: '2'},
    {id: 2, rating: 4, content: 'lorem ipsum', author_id: '2', game_id: '1'},
    {id: 3, rating: 3, content: 'lorem ipsum', author_id: '3', game_id: '3'},
    {id: 4, rating: 2, content: 'lorem ipsum', author_id: '1', game_id: '4'},
    {id: 5, rating: 1, content: 'lorem ipsum', author_id: '2', game_id: '5'},
    {id: 6, rating: 5, content: 'lorem ipsum', author_id: '3', game_id: '1'},
    {id: 7, rating: 4, content: 'lorem ipsum', author_id: '1', game_id: '2'},
]

export default {
    games,
    authors,
    reviews
}