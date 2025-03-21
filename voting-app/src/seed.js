function generateVoteCount() {
        return Math.round((Math.random() * 50) + 15 );
    }

export const products = [
    {
      id: '4c3bbf58-15a7-4c76-b6fa-8b01c2fb23e3',
      title: 'Yellow Pail',
      description: 'On-demand sand castle construction expertise.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/daniel.jpg',
      productImageUrl: 'images/products/image-aqua.png',
    },
    {
      id: 'e1510a36-dc72-4ef8-8edf-b49181a46012',
      title: 'Supermajority: The Fantasy Congress League',
      description: 'Earn points when your favorite politicians pass legislation.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/kristy.png',
      productImageUrl: 'images/products/image-rose.png',
    },
    {
        id: 'bca45dce-67e6-459d-a0f9-5f1a6021fba3',
        title: 'Tinfoild: Tailored tinfoil hats',
        description: 'We already have your measurements and shipping address.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: 'images/avatars/veronika.jpg',
        productImageUrl: 'images/products/image-steel.png',
    },
    {
        id: '1682c551-f108-4b41-9357-37f31661af30',
        title: 'Haught or Naught',
        description: 'High-minded or absent-minded? You decide.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: 'images/avatars/molly.png',
        productImageUrl: 'images/products/image-yellow.png',
    },
  ];      

  export const submitters = [
    { id: 1, name: 'Daniel', image: 'daniel.jpg' },
    { id: 2, name: 'Elliot', image: 'elliot.jpg' },
    { id: 3, name: 'Elyse', image: 'elyse.jpg' },
    { id: 4, name: 'Helen', image: 'helen.jpg' },
    { id: 5, name: 'Jenny', image: 'jenny.jpg' },
    { id: 6, name: 'Justen', image: 'justen.jpg' },
    { id: 7, name: 'Kristy', image: 'kristy.png' },
    { id: 8, name: 'Matthew', image: 'matthew.png' },
    { id: 9, name: 'Molly', image: 'molly.png' },
    { id: 10, name: 'Steve', image: 'steve.jpg' },
    { id: 11, name: 'Stevie', image: 'stevie.jpg' },
    { id: 12, name: 'Veronika', image: 'veronika.jpg' },
  ];
  
  export const images = ['image', 'image-aqua', 'image-rose', 'image-steel', 'image-yellow'];   
  