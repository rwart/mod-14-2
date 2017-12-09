var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'Film o czarodzieju.',
    poster: 'https://imgc.allpostersimages.com/img/print/u-g-F53CWT0.jpg?w=100&h=auto&p=0',
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film opowiadający historię króla sawanny.',
    poster: 'https://imgc.allpostersimages.com/img/print/u-g-E915Q0.jpg?w=100&h=auto&p=0',
  },
  {
    id: 3,
    title: 'Shrek',
    desc: 'Jest to opowieść o dużym zielonym ogrze o imieniu Shrek.',
    poster: 'https://imgc.allpostersimages.com/img/print/u-g-F4S6OE0.jpg?w=100&h=auto&p=0',
  },
  {
    id: 4,
    title: 'Skok przez płot',
    desc: 'Historia o przyjaźni i rodzinie opowiedziana za pomocą postaci zwierząt mieszkających w lesie, który został przekształcony w park miejski.',
    poster: 'https://imgc.allpostersimages.com/img/print/u-g-F3NF9L0.jpg?w=100&h=auto&p=0',
  },
  {
    id: 5,
    title: 'Gwiezdne Wojny',
    desc: 'Seria filmów zainicjowana przez George\'a Lucasa, której akcja rozgrywa się „dawno temu w odległej galaktyce".',
    poster: 'https://imgc.allpostersimages.com/img/print/u-g-F5RPXZ0.jpg?w=100&h=auto&p=0',
  },
];

var moviesElements = movies.map(function (movie) {
  return React.createElement('li', { key: movie.id },
    React.createElement('h2', {}, movie.title),
    React.createElement('p', {}, movie.desc),
    React.createElement('img', { src: movie.poster })
  );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('u1', {}, moviesElements)
);

ReactDOM.render(element, document.getElementById('app'));
