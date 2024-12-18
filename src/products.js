const products = [
  {
    id: '1',
    title: 'Make me blus',
    description: 'Do you know how to send a wink to your loved one and make them blush? The Make Me Blush Bouquet is sure to do just that and more! Send your love and appreciation to them with this incredible bouquet! The pink hue from your loved one’s cheeks compares to the dazzling display of these pink roses. This perfect arrangement of a dozen flawless pink roses and white Limonium arranged in a crystal clear glass vase is the best way to flirt with your special someone! ',
    price: '98',
    image: 'https://cdn.floristone.com/large/T4-1A_d1.jpg',
    amount: 1
  },
  {
    id: '2',
    title: 'The Sweetest TOUCH',
    description: 'An oasis of soft pastel shades is created from this one-sided vase flower arrangement of gerbera daisies, alstroemeria, pink roses, Queen Annes Lace and hypericum. Prominent colors are pastel shades of pink, green, white, yellow. ',
    price: '89.3',
    image: 'https://cdn.floristone.com/large/FAA-101.jpg',
    amount: 1
  },
  {
    id: '3',
    title: 'Cupids creation',
    description:'Shoot straight from your heart to your loved ones with Cupids Creation. This dazzling arrangement consisting of magnificent pink and red roses, as well as pink and white spray roses and greens in a clear glass vase is sure to create a romantic mood in any space that its placed in. ',
    price: '109.99',
    image: 'https://cdn.floristone.com/large/T6-1A_d1.jpg',
    amount: 1
  },
  {
    id: '4',
    title: 'The Pink Dream Bouquet',
    description: 'What better way to celebrate a special occasion than with this simply graceful array of pink and white blooms. Included are white lilies, pink roses, white alstroemeria, pink miniature carnations, white pompons and statice arranged to perfection in a clear glass vase. ',
    price: '88.5 ',
    image: 'https://cdn.floristone.com/large/C13-5036_d1.jpg',
    amount: 1
  },
  {
    id: '5',
    title: 'Romance is Alive',
    description: 'Romance is alive and well with The Pure Romance Rose Bouquet! Her heart will be bursting with love at the sight of these stunning red, hot pink and lavender roses. Nestled with fuchsia stock and greens in an eye-catching pink glass vase, this arrangement is perfect for Valentines Day, an anniversary or just to show that special someone that you care! ',
    price: '69',
    image: 'https://cdn.floristone.com/large/E3-5238_d1.jpg',
    amount: 1
  },
  {
    id: '6',
    title: 'Living Spirit Dishgarden',
    description: 'The Living Spirit Dishgarden is a wonderful display of our finest plants to honor the life of your loved one. This dishgarden expresses your most heartfelt sympathy while offering hope for brighter days ahead. Variety of plants and container will vary.',
    price: '79',
    image: 'https://cdn.floristone.com/large/S25-4493_d1.jpg',
    amount: 1,
  },
  {
    id: '7',
    title: 'Serene Lily Basket ',
    description: 'Send the gift of peace and comfort to those who are going through a troubling time with this serene all-white arrangement. Thoughtfully arranged in a natural basket are peaceful white lilies, carnations, miniature carnations and lush greens. This elegant choice is perfect for conveying your sincerest sympathies and condolences. Ideal for both the funeral service and the familys home! ',
    price: '93 ',
    image: 'https://cdn.floristone.com/large/F1-228_d1.jpg',
    amount: 1
  },
  {
    id: '8',
    title: 'Love and Laughter',
    description: 'Know someone you love to make laugh? Someone you love to laugh with? Someone who could use a laugh? Someone who fits all of the above? Well, this beautiful arrangement has charms that extend way beyond its blossoms. Lavender roses and daisy spray chrysanthemums, purple carnations, miniature carnations, matsumoto asters and pink waxflower are delivered in a sweet lilac vase thats tied with a purple satin ribbon. Love, laugh and send it today! Color of vase may vary. ',
    price: '66',
    image: 'https://cdn.floristone.com/large/T50-3A_d1.jpg',
    amount: 1
  },
  {
    id: '9',
    title: 'The Sweeter Than Ever Bouquet',
    description: 'An arrangement so sweet it could give you a toothache, the Sweeter Than Ever Bouquet features a variety of pink blooms, including roses, carnations, miniature carnations and alstroemeria. Its also accented by white and yellow chrysanthemums and yellow solidago. Expertly arranged in a clear glass vase, this sweet bouquet is a perfect gift for any occasion. ',
    price: '79',
    image: 'https://cdn.floristone.com/large/C13-5170_d1.jpg',
    amount: 1
  },
  {
    id: '10',
    title: 'The French Garden',
    description: 'The French Garden is the perfect gift for any occasion! With a mix of indoor foliage plants, this basket dish garden will show how much you care, even if you cant be there in person. Variety of plants and container will vary.',
    price: '90',
    image: 'https://cdn.floristone.com/large/C23-4886_d1.jpg',
    amount: 1
  },
  {
    id: '11',
    title: 'The Enchanting Rose Bouquet',
    description: 'By putting a colorful spin on a timeless classic, this vivid display is perfect for conveying your sweet love and affection! Gathered in a crystal clear vase is a dozen mixed colored roses. Lush crimson red, golden yellow, sunset orange, and hot pink roses are gorgeously shown with vibrant lush greens. Brighten their day and put a smile on their face when they receive this magnificent bouquet.',
    price: '65',
    image: 'https://cdn.floristone.com/large/E4-4820_d1.jpg',
    amount: 1
  },
  {
    id: '12',
    title: 'The Dramatic Effects Bouquet',
    description: 'If youre looking for something a little different then look no further than The Dramatic Effects Bouquet! Included in this fascinating design are white alstroemeria, red roses, burgundy miniature carnations and purple button pompons. White snapdragons are then added in the clear glass vase to create an asymmetrical and dramatic effect. This stunning bouquet is perfectly suited for any occasion. ',
    price: '99',
    image: 'https://cdn.floristone.com/large/C15-5176_d1.jpg',
    amount: 1
  },
  {
    id: '13',
    title: 'The Yellow Rose Bouquet',
    description: 'There is nothing quite like receiving a bouquet of fresh yellow roses! Bursting with color, these are guaranteed to brighten your loved ones day. Presented in a clear glass vase, this bouquet is perfect for any of lifes special moments.',
    price: '89',
    image: 'https://cdn.floristone.com/large/E7-4808_d1.jpg',
    amount: 1
  },
  {
    id: '14',
    title: 'Simply Sweet',
    description: 'Sometimes life is simplest pleasures deliver life is most poignant feelings. Take this sweet bouquet. Soft colors, beautiful flowers in a yellow vase that is wrapped in a pretty pink satin bow. Simple? You bet. Special? For sure! Bright yellow roses, pink asiatic lilies and alstroemeria, light yellow miniature carnations, lavender daisy spray chrysanthemums and pink limonium are gorgeously arranged in a pretty yellow vase, complete with a satin bow. Sweeter than sweet! Vase may vary.',
    price: '39',
    image: 'https://cdn.floristone.com/large/T18-1A_d1.jpg',
    amount: 1
  },
   {
    id: '15',
    title: 'The Bountiful Garden Bouquet',
    description: 'Send them on a stroll through the French countryside with this eye-catching rustic bouquet! The Victorian elegance will absolutely capture their attention and be adored by all who see it. Arranged to perfection in a natural oval woodchip basket are soft white and salmon roses, peach spray roses, white hydrangea, cream gilly flower, dusty miller stems and lush greens. This sophisticated bouquet is the perfect gift for any occasion!',
    price: '69',
    image: 'https://cdn.floristone.com/large/C3-5179_d1.jpg',
    amount: 1
  },
];
export default products;
