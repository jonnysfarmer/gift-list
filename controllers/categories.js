// const axios = require('axios')
// require('dotenv').config()

// const etsyKey = process.env.ETSY_KEY

// // this is the result you care about
// const test = [
//   {
//     category_id: 69150467,
//     name: 'accessories',
//     meta_title: 'Handmade Accessories on Etsy - Belts, hats, pins, scarves',
//     meta_keywords: 'handmade accessories, handmade belt, handmade hat, handmade wallet, handmade scarf, handmade keychain, handmade necktie, handmade accessory',
//     meta_description: 'Shop for unique, handmade accessories for men and women on Etsy, a global handmade marketplace. Browse belts, hats, pins, scarves & more from independent artisans.',
//     page_description: 'Shop for unique, handmade accessories from our artisan community',
//     page_title: 'Handmade accessories',
//     category_name: 'accessories',
//     short_name: 'Accessories',
//     long_name: 'Accessories',
<<<<<<< HEAD
//     num_children: 27,
=======
//     // num_children: 27,
>>>>>>> development
//     subCategories: [
//       'gloves', 'mittens',
//       'cuff', 'wallet',
//       'leg_warmers', 'lanyard',
//       'hat', 'men',
//       'belt', 'scarf',
//       'case', 'patch',
//       'apron', 'cozy',
//       'shawl', 'eyewear',
//       'watch', 'women',
//       'hair', 'necktie',
//       'money_clip', 'cuff_links',
//       'keychain', 'mirror',
//       'pin', 'pinback_button',
//       'charm'
//     ]
//   },
//   {
//     category_id: 68887312,
//     name: 'art',
//     meta_title: 'Fine Art on Etsy - Original fine art, prints, sculpture ',
//     meta_keywords: 'handmade art, handcrafted art, folk art, arts and crafts, fine art, painting, original art, sculpture, prints, art reproductions, collectible art, ACEO',
//     meta_description: 'Shop for unique, original fine art directly from independent artists on Etsy, a global handmade marketplace. Browse paintings, sculpture, digital prints, reproductions & more.',
//     page_description: 'Shop for unique, original fine art from our artisan community',
//     page_title: 'Fine Art',
//     category_name: 'art',
//     short_name: 'Art',
//     long_name: 'Art',
//     num_children: 12,
//     subCategories: [
//       'sculpture', 'reproduction',
//       'mixed_media', 'painting',
//       'fiber_art', 'drawing',
//       'aceo', 'illustration',
//       'print', 'collage',
//       'photography', 'printmaking'
//     ]
//   },
//   {
//     category_id: 69150455,
//     name: 'bags_and_purses',
//     meta_title: 'Handmade Bags & Purses on Etsy - Bags, purses, backpacks, wallets',
//     meta_keywords: 'handmade bag, handcrafted purse, handsewn purse, handmade purses, handmade bags, purse, purses, bag, bags',
//     meta_description: 'Shop for unique, handmade bags and purses on Etsy, a global handmade marketplace. Browse purses, backpacks, messenger bags, wallets & more from independent artisans.',
//     page_description: 'Shop for unique, handmade bags and purses from our artisan community',
//     page_title: 'Handmade bags and purses',
//     category_name: 'bags_and_purses',
//     short_name: 'Bags and Purses',
//     long_name: 'Bags and Purses',
//     num_children: 12,
//     subCategories: [
//       'novelty', 'tote',
//       'backpack', 'laptop',
//       'diaper_bag', 'clutch',
//       'wristlet', 'pouch',
//       'purse', 'messenger',
//       'hip_bag', 'wallet'
//     ]
//   },
//   {
//     category_id: 68887336,
//     name: 'bath_and_beauty',
//     meta_title: 'Handmade Bath & Beauty on Etsy - Soap, lotions, skin care, makeup',
//     meta_keywords: 'handmade soap, handcrafted soap, handmade soaps, handcrafted soaps, handmade lotion, handmade lotions, soap, soaps, lotion, lotions',
//     meta_description: 'Shop for handmade bath and beauty products on Etsy, a global handmade marketplace. Browse soap, lotion, skin care, makeup, fragrances & more from independent artisans.',
//     page_description: 'Shop for unique, handmade bath and beauty products from our artisan community',
//     page_title: 'Handmade bath and beauty products',
//     category_name: 'bath_and_beauty',
//     short_name: 'Bath and Beauty',
//     long_name: 'Bath and Beauty',
//     num_children: 13,
//     subCategories: [
//       'scrub', 'makeup',
//       'skin_care', 'salve',
//       'lotion', 'bath',
//       'body', 'lip_balm',
//       'men', 'oil',
//       'hair', 'fragrance',
//       'soap'
//     ]
//   },
//   {
//     category_id: 69150385,
//     name: 'books_and_zines',
//     meta_title: 'Handmade Books & Zines on Etsy - Original zines, comics, blank journals',
//     meta_keywords: 'handmade books, handcrafted book, zine, journal, comic, original comic, book art, bookmark, blank book, handbound books',
//     meta_description: 'Shop for unique, handmade books and zines on Etsy, a global handmade marketplace. Browse original zines and comics from the authors, blank journals, albums & more from independent artisans.',
//     page_description: 'Shop for unique, handmade books and zines from our artisan community',
//     page_title: 'Handmade books and zines',
//     category_name: 'books_and_zines',
//     short_name: 'Books and Zines',
//     long_name: 'Books and Zines',
//     num_children: 6,
//     subCategories: ['journal', 'comic', 'album', 'book', 'zine', 'bookmark']
//   },
//   {
//     category_id: 69150375,
//     name: 'candles',
//     meta_title: 'Handmade Candles on Etsy - Beeswax or soy candles, incense',
//     meta_keywords: 'handmade candles, hand-dipped incense, beeswax candle, travel candle, soy candle, vegan candle, candle, candles, incense',
//     meta_description: 'Shop for unique, handmade candles on Etsy, a global handmade marketplace. Browse scented, beeswax, soy or vegan candles, incense & more from independent artisans.',
//     page_description: 'Shop for unique, handmade candles from our artisan community',
//     page_title: 'Handmade candles',
//     category_name: 'candles',
//     short_name: 'Candles',
//     long_name: 'Candles',
//     num_children: 16,
//     subCategories: [
//       'container', 'taper',
//       'soy', 'tea_light',
//       'vegan', 'travel',
//       'tin', 'shaped',
//       'incense', 'holder',
//       'pillar', 'scented',
//       'beeswax', 'tart',
//       'votive', 'unscented'
//     ]
//   },
//   {
//     category_id: 69150451,
//     name: 'ceramics_and_pottery',
//     meta_title: 'Handmade Ceramics & Pottery on Etsy - Ceramic dishes, jewelry, sculpture ',
//     meta_keywords: 'handmade ceramics, handmade pottery, handcrafted pottery, handcrafted ceramics, pottery, ceramics',
//     meta_description: 'Shop for unique, handmade ceramics and pottery on Etsy, a global handmade marketplace. Browse ceramic bowls, cups, dishes, jewelry, sculpture & more from independent artisans.',
//     page_description: 'Shop for unique, handmade ceramics and pottery from our artisan community',
//     page_title: 'Handmade ceramics and pottery',
//     category_name: 'ceramics_and_pottery',
//     short_name: 'Ceramics and Pottery',
//     long_name: 'Ceramics and Pottery',
//     num_children: 19,
//     subCategories: [
//       'planter', 'plate',
//       'sculpture', 'kitchen',
//       'coaster', 'cup',
//       'home_decor', 'jewelry',
//       'jar', 'serving',
//       'soap_dish', 'tile',
//       'bowl', 'miniature',
//       'pot', 'decoration',
//       'supplies', 'teapot',
//       'vase'
//     ]
//   },
//   {
//     category_id: 69150405,
//     name: 'children',
//     meta_title: "Handmade Children's Items on Etsy - Clothing, accessories, furniture, toys",
//     meta_keywords: 'handmade childrens toys, handsewn kids clothes, children, baby, toddler, babies, kids, child, childrens clothing, childrens, furniture, toys',
//     meta_description: 'Shop for unique handmade items for children & babies on Etsy, a global handmade marketplace. Browse clothing, accessories, furniture, art & more from independent artisans.',
//     page_description: "Shop for unique, handmade children's items from our artisan community",
//     page_title: "Handmade Children's Items",
//     category_name: 'children',
//     short_name: 'Children',
//     long_name: 'Children',
//     num_children: 10,
//     subCategories: [
//       'toy', 'furniture',
//       'housewares', 'baby',
//       'bath', 'toddler',
//       'jewelry', 'art',
//       'clothing', 'accessories'
//     ]
//   },
//   {
//     category_id: 69150353,
//     name: 'clothing',
//     meta_title: 'Handmade Clothing on Etsy - Shirts, dresses, pants, shoes',
//     meta_keywords: 'handmade clothing, handcrafted clothes, hand-altered clothing, shirt, dress, handmade shoes, pants, mens clothing, womens clothing, reconstructed clothing',
//     meta_description: 'Shop for unique, handmade and hand-altered clothing on Etsy, a global handmade marketplace. Shirts, dresses, pants, shoes & more for men, women & children from independent artisans.',
//     page_description: 'Shop for unique, handmade clothing from our artisan community',
//     page_title: 'Handmade clothing',
//     category_name: 'clothing',
//     short_name: 'Clothing',
//     long_name: 'Clothing',
//     num_children: 26,
//     subCategories: [
//       'children', 'vest', 'corset',
//       'underwear', 'shawl', 'plus_size',
//       'shirt', 'shorts', 'shoes',
//       'pants', 'dress', 'jacket',
//       'sweatshirt', 'maternity', 'tank',
//       'costume', 'women', 'sleepwear',
//       'socks', 'sweater', 'skirt',
//       'hoodie', 'tshirt', 'men',
//       'swimsuit', 'lingerie'
//     ]
//   },
//   {
//     category_id: 69150341,
//     name: 'crochet',
//     meta_title: 'Crocheted Items on Etsy - Crocheted accessories, cozies, housewares',
//     meta_keywords: 'Shop for unique, crocheted items on Etsy, a global handmade marketplace. Browse crocheted accessories, cozies, housewares & more from independent artisans.',
//     meta_description: 'crochet, crocheted, crocheted, knit, hat, cozy, crochet afghan, scarf',
//     page_description: 'Shop for unique, handmade crocheted items from our artisan community',
//     page_title: 'Crocheted Items',
//     category_name: 'crochet',
//     short_name: 'Crochet',
//     long_name: 'Crochet',
//     num_children: 11,
//     subCategories: [
//       'accessories',
//       'clothing',
//       'afghan',
//       'cozy',
//       'bags_and_purses',
//       'doll',
//       'jewelry',
//       'scarf',
//       'supplies',
//       'housewares',
//       'hat'
//     ]
//   },
//   {
//     category_id: 69150415,
//     name: 'dolls_and_miniatures',
//     meta_title: 'Handmade Dolls & Miniatures on Etsy - Dolls, collectibles, dollhouse miniatures',
//     meta_keywords: 'Shop for unique, handmade dolls and miniatures on Etsy, a global handmade marketplace. Browse art dolls, collectibles, dollhouse miniatures, puppets & more from independent artisans.',
//     meta_description: 'handmade doll, handcrafted doll, handmade miniatures, dollhouse, puppets, scale models, collectible dolls, art dolls, figurines',
//     page_description: 'Shop for unique, handmade dolls and miniatures from our artisan community',
//     page_title: 'Handmade Dolls and Miniatures',
//     category_name: 'dolls_and_miniatures',
//     short_name: 'Dolls and Miniatures',
//     long_name: 'Dolls and Miniatures',
//     num_children: 18,
//     subCategories: [
//       'soft_sculpture',
//       'miniature',
//       'reborns',
//       'primitive',
//       'plush',
//       'fantasy',
//       'figurines',
//       'human_figure_doll',
//       'art_doll',
//       'amigurumi',
//       'scale_models',
//       'waldorf',
//       'puppets',
//       'scale_dollhouse_miniature',
//       'fashion_dolls_apparel',
//       'artist_bears',
//       'child_friendly',
//       'animals'
//     ]
//   },
//   {
//     category_id: 68887416,
//     name: 'everything_else',
//     meta_title: 'Handmade Everything Else on Etsy - Design, educational items, magic items, tutorials & more',
//     meta_keywords: 'personalized handmade items, graphic design, custom design, handmade religious, handcrafted taxidermy',
//     meta_description: 'Shop for unique, handmade products on Etsy, a global handmade marketplace. A little bit of everything else; weird, custom-made & more from independent artisans',
//     page_description: 'Shop for unique, handmade items from our artisan community',
//     page_title: 'Handmade items',
//     category_name: 'everything_else',
//     short_name: 'Everything Else',
//     long_name: 'Everything Else',
//     num_children: 10,
//     subCategories: [
//       'custom',
//       'religious',
//       'personalized',
//       'taxidermy',
//       'educational',
//       'graphic_design',
//       'pocket',
//       'weird',
//       'magic',
//       'metaphysical'
//     ]
//   },
//   {
//     category_id: 68887430,
//     name: 'furniture',
//     meta_title: 'Handmade Furniture on Etsy - Tables, chairs, beds, storage',
//     meta_keywords: 'handmade furniture, handcrafted furniture, handmade bed, handmade chair, handmade table, wooden furniture, metal furniture',
//     meta_description: 'Shop for unique, handmade furniture on Etsy, a global handmade marketplace. Broswe tables, chairs, beds, storage solutions & more from independent artisans.',
//     page_description: 'Shop for unique, handmade furniture from our artisan community',
//     page_title: 'Handmade furniture',
//     category_name: 'furniture',
//     short_name: 'Furniture',
//     long_name: 'Furniture',
//     num_children: 12,
//     subCategories: [
//       'table', 'shelf',
//       'mirror', 'dresser',
//       'chair', 'bookcase',
//       'storage', 'bed',
//       'desk', 'entertainment',
//       'fixture', 'bench'
//     ]
//   },
//   {
//     category_id: 69150359,
//     name: 'geekery',
//     meta_title: 'Handmade Geekery on Etsy - Kitschy, weird, humorous items & more',
//     meta_keywords: 'handmade geekery, video game fan art, gag gifts, novelty gifts, kitschy jewelry',
//     meta_description: 'Shop for unique, handmade geekery items on Etsy, a global handmade marketplace. Browse kitschy, humorous & weird items for any geek from independent artisans.',
//     page_description: 'Shop for unique, handmade geekery from our artisan community',
//     page_title: 'Handmade geekery',
//     category_name: 'geekery',
//     short_name: 'Geekery',
//     long_name: 'Geekery',
//     num_children: 17,
//     subCategories: [
//       'electronic', 'fantasy',
//       'computer', 'kitsch',
//       'horror', 'videogame',
//       'gadget', 'clothing',
//       'accessory', 'jewelry',
//       'humor', 'housewares',
//       'magic', 'weird',
//       'science', 'toy',
//       'robot'
//     ]
//   },
//   {
//     category_id: 69150361,
//     name: 'glass',
//     meta_title: 'Handmade Glass on Etsy - Jewelry, beads, ornaments, home dÃ©cor',
//     meta_keywords: 'handmade glass, handcrafted glass, lampwork beads, glass jewelry, glass blowing, ornaments, glass bowl, stained glass',
//     meta_description: 'Shop for unique, handmade glass items on Etsy, a global handmade marketplace. Artisan glass jewelry, beads, ornaments, bowls & more from independent artisans',
//     page_description: 'Shop for unique, handmade glass items from our artisan community',
//     page_title: 'Handmade Glass Items',
//     category_name: 'glass',
//     short_name: 'Glass',
//     long_name: 'Glass',
//     num_children: 21,
//     subCategories: [
//       'dish', 'paperweight',
//       'bottle', 'magnet',
//       'glassware', 'mirror',
//       'sculpture', 'ornament',
//       'pipe', 'bowl',
//       'stained_glass', 'coaster',
//       'cabochon', 'jewelry',
//       'home_decor', 'marbles',
//       'supplies', 'windchime',
//       'bead', 'vase',
//       'suncatcher'
//     ]
//   },
//   {
//     category_id: 68887366,
//     name: 'holidays',
//     meta_title: 'Handmade Holiday Items on Etsy - Birthdays, Christmas, patriotic celebrations ',
//     meta_keywords: 'handmade decorations, handcrafted decorations, handmade card, handmade cards, handmade holiday, handmade christmas',
//     meta_description: 'Shop for unique, handmade holiday items on Etsy, a global handmade marketplace. Browse items for Christmas, birthdays, Thanksgiving, patriotic days & more from independent artisans.',
//     page_description: 'Shop for unique, handmade holiday items from our artisan community',
//     page_title: 'Handmade Holiday Items',
//     category_name: 'holidays',
//     short_name: 'Holidays',
//     long_name: 'Holidays',
//     num_children: 11,
//     subCategories: [
//       'valentine',
//       'thanksgiving',
//       'st_patricks',
//       'halloween',
//       'easter',
//       'patriotic',
//       'new_years',
//       'hanukkah',
//       'day_of_the_dead',
//       'birthday',
//       'christmas'
//     ]
//   },
//   {
//     category_id: 69150425,
//     name: 'housewares',
//     meta_title: 'Handmade Housewares on Etsy - Kitchen, bath, home decor, housewares',
//     meta_keywords: 'handmade housewares, handcrafted home decor, kitchen, home decor, home goods, pillows, dishes, mirrors, picture frames, coasters',
//     meta_description: 'Shop for unique, handmade housewares on Etsy, a global handmade marketplace. Browse items for your kitchen, bath, home decor & more from independent artisans',
//     page_description: 'Shop for unique, handmade housewares from our artisan community',
//     page_title: 'Handmade housewares',
//     category_name: 'housewares',
//     short_name: 'Housewares',
//     long_name: 'Housewares',
//     num_children: 25,
//     subCategories: [
//       'wall_decor', 'sign', 'coaster',
//       'clock', 'kitchen', 'outdoor',
//       'rug', 'serving', 'cozy',
//       'home_decor', 'office', 'basket',
//       'box', 'bedroom', 'table',
//       'fixture', 'pillow', 'frame',
//       'lighting', 'bowl', 'bathroom',
//       'wall_decal', 'cleaning', 'magnet',
//       'vase'
//     ]
//   },
//   {
//     category_id: 68887482,
//     name: 'jewelry',
//     meta_title: 'Handmade Jewelry on Etsy - Necklaces, rings, earrings, bracelets',
//     meta_keywords: 'handmade jewelry, handcrafted jewelry, hand made jewelry, artisan jewelry, custom jewelry, jewelry, jewellry',
//     meta_description: 'Shop for unique, handmade jewelry on Etsy, a global handmade marketplace. Browse necklaces, bracelets, rings, earrings & more from independent artisans.',
//     page_description: 'Shop for unique, handmade jewelry from our artisan community',
//     page_title: 'Handmade jewelry',
//     category_name: 'jewelry',
//     short_name: 'Jewelry',
//     long_name: 'Jewelry',
//     num_children: 8,
//     subCategories: [
//       'bracelet', 'earrings',
//       'necklace', 'anklet',
//       'brooch', 'ring',
//       'pendant', 'piercing'
//     ]
//   },
//   {
//     category_id: 68887400,
//     name: 'knitting',
//     meta_title: 'Knit Items on Etsy - Hats, scarves, knit clothing ',
//     meta_keywords: 'knit, knitting, knitted, handmade knit, handmade knitting, handmade knitted',
//     meta_description: 'Shop for unique, handmade knit items on Etsy, a global handmade marketplace. Browse knit hats, cozies, scarves, clothing, knitting supplies & more from independent artisans',
//     page_description: 'Shop for unique, handmade knit items from our artisan community',
//     page_title: 'Knit Items',
//     category_name: 'knitting',
//     short_name: 'Knitting',
//     long_name: 'Knitting',
//     num_children: 16,
//     subCategories: [
//       'children', 'accessories',
//       'blanket', 'clothing',
//       'baby', 'bags_and_purses',
//       'cozy', 'jewelry',
//       'knitting_supplies', 'men',
//       'housewares', 'doll',
//       'hat', 'women',
//       'scarf', 'sweater'
//     ]
//   },
//   {
//     category_id: 68887460,
//     name: 'music',
//     meta_title: 'Handmade Music Items on Etsy - Original music recordings, instruments, accessories',
//     meta_keywords: 'handmade music, original music, self-published cd, cassette tape, musical instrument, handcrafted instruments, guitar, music accessories',
//     meta_description: 'Shop for unique, handmade musical items on Etsy, a global handmade marketplace. Browse musical items & more from independent artists.',
//     page_description: 'Shop for unique, handmade music items from our artisan community',
//     page_title: 'Handmade music items',
//     category_name: 'music',
//     short_name: 'Music',
//     long_name: 'Music',
//     num_children: 10,
//     subCategories: [
//       'cd', 'case',
//       'video', 'tape',
//       'vinyl', 'strap',
//       'instrument', 'mp3',
//       'equipment', 'poster'
//     ]
//   },
//   {
//     category_id: 68887406,
//     name: 'needlecraft',
//     meta_title: 'Needlecraft on Etsy - Embroidery, cross stitch, needlepoint',
//     meta_keywords: 'needlecraft, handmade embroidery, needlepoint, cross stitch, felting, needle felting, pincushion',
//     meta_description: 'Shop for unique, needlecraft items on Etsy, a global handmade marketplace. Browse embroidery, cross stitch, needlepoint & more from independent artisans.',
//     page_description: 'Shop for unique, handmade needlecraft items from our artisan community',
//     page_title: 'Needlecraft Items',
//     category_name: 'needlecraft',
//     short_name: 'Needlecraft',
//     long_name: 'Needlecraft',
//     num_children: 13,
//     subCategories: [
//       'holidays', 'pillow',
//       'needlepoint', 'felted',
//       'clothing', 'accessories',
//       'pattern', 'jewelry',
//       'doll', 'cross_stitch',
//       'embroidery', 'pincushion',
//       'supplies'
//     ]
//   },
//   {
//     category_id: 69150367,
//     name: 'paper_goods',
//     meta_title: 'Handmade Paper Goods on Etsy - Stationery, cards, calendars',
//     meta_keywords: 'handmade paper goods, handmade stationery, handmade paper, handmade gift wrap, handmade wrap',
//     meta_description: 'Shop for unique, handmade paper goods on Etsy, a global handmade marketplace. Browse stationery, greeting cards, calendars, gift wrap & more from independent artisans.',
//     page_description: 'Shop for unique, handmade paper goods from our artisan community',
//     page_title: 'Handmade paper goods',
//     category_name: 'paper_goods',
//     short_name: 'Paper Goods',
//     long_name: 'Paper Goods',
//     num_children: 14,
//     subCategories: [
//       'journal', 'gift_wrap',
//       'pad', 'scrapbooking',
//       'calendar', 'bookmark',
//       'sticker', 'tag',
//       'stationery', 'origami',
//       'papermaking', 'notebook',
//       'cards', 'bookplate'
//     ]
//   },
//   {
//     category_id: 68887486,
//     name: 'patterns',
//     meta_title: 'Handmade Patterns on Etsy - Original patterns for sewing, knitting, crochet, crafting',
//     meta_keywords: 'handmade patterns, original patterns, sewing pattern, clothing pattern, knitting patterns, crochet patterns, patternmaking',
//     meta_description: 'Shop for unique, handmade patterns on Etsy, a global handmade marketplace. Browse original sewing, knitting, crochet & craft patterns from independent artisans.',
//     page_description: 'Shop for unique, handmade patterns from our artisan community',
//     page_title: 'Handmade Patterns',
//     category_name: 'patterns',
//     short_name: 'Patterns',
//     long_name: 'Patterns',
//     num_children: 17,
//     subCategories: [
//       'embroidery', 'holiday',
//       'home', 'knitting',
//       'plushie', 'clothing',
//       'beading', 'baby',
//       'handmade', 'doll_clothing',
//       'cross_stitch', 'crochet',
//       'sewing', 'quilt',
//       'painting', 'accessories',
//       'amigurumi'
//     ]
//   },
//   {
//     category_id: 68887434,
//     name: 'pets',
//     meta_title: 'Handmade Pet Items on Etsy - Pet toys, accessories, treats, clothes',
//     meta_keywords: 'handmade collar, handmade pet toys, handmade pet treats, organic pet treats, leash, pet bed, pet toys, cat, dog',
//     meta_description: 'Shop for unique, handmade items for pets on Etsy, a global handmade marketplace. Browse accessories, clothes, dishes, toys & more for pets or pet-lovers from independent artisans.',
//     page_description: 'Shop for unique, handmade pet items from our artisan community',
//     page_title: 'Handmade pet items',
//     category_name: 'pets',
//     short_name: 'Pets',
//     long_name: 'Pets',
//     num_children: 20,
//     subCategories: [
//       'bag', 'accessories',
//       'blanket', 'bed',
//       'treat', 'feeding',
//       'carrier', 'clothing',
//       'pet_lover', 'small_animal',
//       'pillow', 'house',
//       'leash', 'toy',
//       'tag', 'grooming',
//       'collar', 'bowl',
//       'portrait', 'harness'
//     ]
//   },
//   {
//     category_id: 68887346,
//     name: 'plants_and_edibles',
//     meta_title: 'Plants and Edibles on Etsy - Baked goods, spices, herbs, tea & more',
//     meta_keywords: 'handmade food, homemade food, artisan food, gourmet food, baked goods, spices, homegrown herbs, artisan tea, roasted coffee, jam, candy',
//     meta_description: 'Shop for unique, homemade plants and edibles on Etsy, a global handmade marketplace. Browse baked goods, spices, candy, jam, tea & more from independent artisans.',
//     page_description: 'Shop for unique, homegrown plants and handmade edibles from our artisan community',
//     page_title: 'Plants and Edibles',
//     category_name: 'plants_and_edibles',
//     short_name: 'Plants and Edibles',
//     long_name: 'Plants and Edibles',
//     num_children: 13,
//     subCategories: [
//       'dried_herb', 'jam',
//       'baked_goods', 'sauce',
//       'tea', 'candy',
//       'coffee', 'marmalade',
//       'plant', 'vegan',
//       'recipes', 'snack',
//       'spice'
//     ]
//   },
//   {
//     category_id: 68887502,
//     name: 'quilts',
//     meta_title: 'Handmade Quilts on Etsy - Blankets, bed quilts, quilted wall art ',
//     meta_keywords: 'handmade quilts, handcrafted quilts, quilt, quilts, blankets, bed quilt, appliqued quilt, wall hanging, fiber art',
//     meta_description: 'Shop for unique, handmade quilts on Etsy, a global handmade marketplace. Browse blankets, bed quilts, wall hangings in traditional & modern styles from independent artisans.',
//     page_description: 'Shop for unique, handmade quilts from our artisan community',
//     page_title: 'Handmade quilts',
//     category_name: 'quilts',
//     short_name: 'Quilts',
//     long_name: 'Quilts',
//     num_children: 15,
//     subCategories: [
//       'traditional', 'rag',
//       'mini', 'geometric',
//       'pillow', 'trim',
//       'baby', 'applique',
//       'table_runner', 'patch',
//       'patchwork', 'wall_hanging',
//       'fabric_postcard', 'bed',
//       'crazy'
//     ]
//   },
//   {
//     category_id: 69150433,
//     name: 'supplies',
//     meta_title: 'Craft Supplies on Etsy - Beads, buttons, yarn, craft supplies',
//     meta_keywords: 'handmade supplies, craft supplies, craft materials, art beads, beads, buttons, handspun yarn, hand dyed yarn, yarn, patterns, scrapbooking supplies',
//     meta_description: 'Shop for handmade and commercial crafting supplies on Etsy, a global handmade marketplace. Browse a wide variety of beads, buttons, yarn & more.',
//     page_description: 'Shop for unique supplies from our artisan community',
//     page_title: 'Supplies',
//     category_name: 'supplies',
//     short_name: 'Supplies',
//     long_name: 'Supplies',
//     num_children: 10,
//     subCategories: [
//       'knitting', 'scrapbooking',
//       'cabochon', 'fabric',
//       'pattern', 'yarn',
//       'commercial', 'button',
//       'handmade', 'bead'
//     ]
//   },
//   {
//     category_id: 69150393,
//     name: 'toys',
//     meta_title: 'Handmade Toys on Etsy - Dolls, games, puppets, toys',
//     meta_keywords: 'handmade toys, handcrafted toys, childrens toys, wooden toy, plushie, doll, games, collectible toys',
//     meta_description: 'Shop for unique, handmade toys on Etsy, a global handmade marketplace. Browse dolls, plushies, games, puppets & more for kids or adults from independent artisans',
//     page_description: 'Shop for unique, handmade toys from our artisan community',
//     page_title: 'Handmade toys',
//     category_name: 'toys',
//     short_name: 'Toys',
//     long_name: 'Toys',
//     num_children: 16,
//     subCategories: [
//       'baby', 'puppet',
//       'pretend', 'waldorf',
//       'children', 'bear',
//       'miniature', 'game',
//       'doll_clothes', 'amigurumi',
//       'puzzle', 'sports',
//       'plush', 'doll',
//       'blythe', 'food'
//     ]
//   },
//   {
//     category_id: 69150437,
//     name: 'vintage',
//     meta_title: 'Vintage on Etsy - Vintage clothing, home decor, collectibles, antiques',
//     meta_keywords: 'vintage clothing, vintage, retro, thrift stores, thrifted, vintage collectibles, vintage home decor',
//     meta_description: 'Shop for amazing and hard-to-find vintage goods on Etsy, a global handmade and vintage marketplace. Browse clothing, home decor, collectibles & more from the 1980s & earlier.',
//     page_description: 'Shop for unique, vintage items from our artisan community',
//     page_title: 'Vintage items',
//     category_name: 'vintage',
//     short_name: 'Vintage',
//     long_name: 'Vintage',
//     num_children: 15,
//     subCategories: [
//       'furniture', 'home_decor',
//       'collectibles', 'book',
//       'antique', 'bags_and_purses',
//       'accessories', 'electronics',
//       'supplies', 'serving',
//       'paper_ephemera', 'jewelry',
//       'housewares', 'clothing',
//       'toy'
//     ]
//   },
//   {
//     category_id: 68887494,
//     name: 'weddings',
//     meta_title: 'Handmade Wedding Items on Etsy - Invitations, jewelry, party favors for weddings',
//     meta_keywords: 'handmade wedding invitations, wedding invitations, custom invitations, wedding favors, unique wedding jewelry, letterpress invitations',
//     meta_description: 'Shop for unique, handmade wedding items on Etsy, a global handmade marketplace. Wedding invitations, accessories, favors, jewelry & more from independent artisans',
//     page_description: 'Shop for unique, handmade wedding items from our artisan community',
//     page_title: 'Handmade wedding items',
//     category_name: 'weddings',
//     short_name: 'Weddings',
//     long_name: 'Weddings',
//     num_children: 20,
//     subCategories: [
//       'pillow', 'just_married',
//       'men', 'guest_book',
//       'invitation', 'candle',
//       'bouquet', 'cake_topper',
//       'card', 'album',
//       'jewelry', 'decoration',
//       'favor', 'clothing',
//       'something_blue', 'portrait',
//       'frame', 'accessories',
//       'bags_and_purses', 'basket'
//     ]
//   },
//   {
//     category_id: 68887388,
//     name: 'woodworking',
//     meta_title: 'Handcrafted Wood Items on Etsy - Furniture, sculpture, home decor',
//     meta_keywords: 'handmade woodworking, wood, wooden furniture, handcrafted from wood, wood jewelry, wood sculpture, woodworking',
//     meta_description: 'Shop for unique, handcrafted woodworking items on Etsy, a global handmade marketplace. Browse wooden furniture, decor, sculpture, jewelry & more from independent artisans.',
//     page_description: 'Shop for unique, handcrafted wood items from our artisan community',
//     page_title: 'Handcrafted Wood Items',
//     category_name: 'woodworking',
//     short_name: 'Woodworking',
//     long_name: 'Woodworking',
//     num_children: 22,
//     subCategories: [
//       'accessories', 'miniature',
//       'furniture', 'fretwork',
//       'box', 'housewares',
//       'seasonal', 'sculpture',
//       'sport', 'toy',
//       'outdoor', 'kitchen',
//       'office', 'jewelry',
//       'carving', 'home_decor',
//       'clock', 'burning',
//       'bowl', 'inlay',
//       'sign', 'supplies'
//     ]
//   }
// ]

// const firstCalll = [
//   {
//     category_id: 69150467,
//     name: 'accessories',
//     meta_title: 'Handmade Accessories on Etsy - Belts, hats, pins, scarves',
//     meta_keywords: 'handmade accessories, handmade belt, handmade hat, handmade wallet, handmade scarf, handmade keychain, handmade necktie, handmade accessory',
//     meta_description: 'Shop for unique, handmade accessories for men and women on Etsy, a global handmade marketplace. Browse belts, hats, pins, scarves & more from independent artisans.',
//     page_description: 'Shop for unique, handmade accessories from our artisan community',
//     page_title: 'Handmade accessories',
//     category_name: 'accessories',
//     short_name: 'Accessories',
//     long_name: 'Accessories',
//     num_children: 27
//   },
//   {
//     category_id: 68887312,
//     name: 'art',
//     meta_title: 'Fine Art on Etsy - Original fine art, prints, sculpture ',
//     meta_keywords: 'handmade art, handcrafted art, folk art, arts and crafts, fine art, painting, original art, sculpture, prints, art reproductions, collectible art, ACEO',
//     meta_description: 'Shop for unique, original fine art directly from independent artists on Etsy, a global handmade marketplace. Browse paintings, sculpture, digital prints, reproductions & more.',
//     page_description: 'Shop for unique, original fine art from our artisan community',
//     page_title: 'Fine Art',
//     category_name: 'art',
//     short_name: 'Art',
//     long_name: 'Art',
//     num_children: 12
//   },
//   {
//     category_id: 69150455,
//     name: 'bags_and_purses',
//     meta_title: 'Handmade Bags & Purses on Etsy - Bags, purses, backpacks, wallets',
//     meta_keywords: 'handmade bag, handcrafted purse, handsewn purse, handmade purses, handmade bags, purse, purses, bag, bags',
//     meta_description: 'Shop for unique, handmade bags and purses on Etsy, a global handmade marketplace. Browse purses, backpacks, messenger bags, wallets & more from independent artisans.',
//     page_description: 'Shop for unique, handmade bags and purses from our artisan community',
//     page_title: 'Handmade bags and purses',
//     category_name: 'bags_and_purses',
//     short_name: 'Bags and Purses',
//     long_name: 'Bags and Purses',
//     num_children: 12
//   },
//   {
//     category_id: 68887336,
//     name: 'bath_and_beauty',
//     meta_title: 'Handmade Bath & Beauty on Etsy - Soap, lotions, skin care, makeup',
//     meta_keywords: 'handmade soap, handcrafted soap, handmade soaps, handcrafted soaps, handmade lotion, handmade lotions, soap, soaps, lotion, lotions',
//     meta_description: 'Shop for handmade bath and beauty products on Etsy, a global handmade marketplace. Browse soap, lotion, skin care, makeup, fragrances & more from independent artisans.',
//     page_description: 'Shop for unique, handmade bath and beauty products from our artisan community',
//     page_title: 'Handmade bath and beauty products',
//     category_name: 'bath_and_beauty',
//     short_name: 'Bath and Beauty',
//     long_name: 'Bath and Beauty',
//     num_children: 13
//   },
//   {
//     category_id: 69150385,
//     name: 'books_and_zines',
//     meta_title: 'Handmade Books & Zines on Etsy - Original zines, comics, blank journals',
//     meta_keywords: 'handmade books, handcrafted book, zine, journal, comic, original comic, book art, bookmark, blank book, handbound books',
//     meta_description: 'Shop for unique, handmade books and zines on Etsy, a global handmade marketplace. Browse original zines and comics from the authors, blank journals, albums & more from independent artisans.',
//     page_description: 'Shop for unique, handmade books and zines from our artisan community',
//     page_title: 'Handmade books and zines',
//     category_name: 'books_and_zines',
//     short_name: 'Books and Zines',
//     long_name: 'Books and Zines',
//     num_children: 6
//   },
//   {
//     category_id: 69150375,
//     name: 'candles',
//     meta_title: 'Handmade Candles on Etsy - Beeswax or soy candles, incense',
//     meta_keywords: 'handmade candles, hand-dipped incense, beeswax candle, travel candle, soy candle, vegan candle, candle, candles, incense',
//     meta_description: 'Shop for unique, handmade candles on Etsy, a global handmade marketplace. Browse scented, beeswax, soy or vegan candles, incense & more from independent artisans.',
//     page_description: 'Shop for unique, handmade candles from our artisan community',
//     page_title: 'Handmade candles',
//     category_name: 'candles',
//     short_name: 'Candles',
//     long_name: 'Candles',
//     num_children: 16
//   },
//   {
//     category_id: 69150451,
//     name: 'ceramics_and_pottery',
//     meta_title: 'Handmade Ceramics & Pottery on Etsy - Ceramic dishes, jewelry, sculpture ',
//     meta_keywords: 'handmade ceramics, handmade pottery, handcrafted pottery, handcrafted ceramics, pottery, ceramics',
//     meta_description: 'Shop for unique, handmade ceramics and pottery on Etsy, a global handmade marketplace. Browse ceramic bowls, cups, dishes, jewelry, sculpture & more from independent artisans.',
//     page_description: 'Shop for unique, handmade ceramics and pottery from our artisan community',
//     page_title: 'Handmade ceramics and pottery',
//     category_name: 'ceramics_and_pottery',
//     short_name: 'Ceramics and Pottery',
//     long_name: 'Ceramics and Pottery',
//     num_children: 19
//   },
//   {
//     category_id: 69150405,
//     name: 'children',
//     meta_title: "Handmade Children's Items on Etsy - Clothing, accessories, furniture, toys",
//     meta_keywords: 'handmade childrens toys, handsewn kids clothes, children, baby, toddler, babies, kids, child, childrens clothing, childrens, furniture, toys',
//     meta_description: 'Shop for unique handmade items for children & babies on Etsy, a global handmade marketplace. Browse clothing, accessories, furniture, art & more from independent artisans.',
//     page_description: "Shop for unique, handmade children's items from our artisan community",
//     page_title: "Handmade Children's Items",
//     category_name: 'children',
//     short_name: 'Children',
//     long_name: 'Children',
//     num_children: 10
//   },
//   {
//     category_id: 69150353,
//     name: 'clothing',
//     meta_title: 'Handmade Clothing on Etsy - Shirts, dresses, pants, shoes',
//     meta_keywords: 'handmade clothing, handcrafted clothes, hand-altered clothing, shirt, dress, handmade shoes, pants, mens clothing, womens clothing, reconstructed clothing',
//     meta_description: 'Shop for unique, handmade and hand-altered clothing on Etsy, a global handmade marketplace. Shirts, dresses, pants, shoes & more for men, women & children from independent artisans.',
//     page_description: 'Shop for unique, handmade clothing from our artisan community',
//     page_title: 'Handmade clothing',
//     category_name: 'clothing',
//     short_name: 'Clothing',
//     long_name: 'Clothing',
//     num_children: 26
//   },
//   {
//     category_id: 69150341,
//     name: 'crochet',
//     meta_title: 'Crocheted Items on Etsy - Crocheted accessories, cozies, housewares',
//     meta_keywords: 'Shop for unique, crocheted items on Etsy, a global handmade marketplace. Browse crocheted accessories, cozies, housewares & more from independent artisans.',
//     meta_description: 'crochet, crocheted, crocheted, knit, hat, cozy, crochet afghan, scarf',
//     page_description: 'Shop for unique, handmade crocheted items from our artisan community',
//     page_title: 'Crocheted Items',
//     category_name: 'crochet',
//     short_name: 'Crochet',
//     long_name: 'Crochet',
//     num_children: 11
//   },
//   {
//     category_id: 69150415,
//     name: 'dolls_and_miniatures',
//     meta_title: 'Handmade Dolls & Miniatures on Etsy - Dolls, collectibles, dollhouse miniatures',
//     meta_keywords: 'Shop for unique, handmade dolls and miniatures on Etsy, a global handmade marketplace. Browse art dolls, collectibles, dollhouse miniatures, puppets & more from independent artisans.',
//     meta_description: 'handmade doll, handcrafted doll, handmade miniatures, dollhouse, puppets, scale models, collectible dolls, art dolls, figurines',
//     page_description: 'Shop for unique, handmade dolls and miniatures from our artisan community',
//     page_title: 'Handmade Dolls and Miniatures',
//     category_name: 'dolls_and_miniatures',
//     short_name: 'Dolls and Miniatures',
//     long_name: 'Dolls and Miniatures',
//     num_children: 18
//   },
//   {
//     category_id: 68887416,
//     name: 'everything_else',
//     meta_title: 'Handmade Everything Else on Etsy - Design, educational items, magic items, tutorials & more',
//     meta_keywords: 'personalized handmade items, graphic design, custom design, handmade religious, handcrafted taxidermy',
//     meta_description: 'Shop for unique, handmade products on Etsy, a global handmade marketplace. A little bit of everything else; weird, custom-made & more from independent artisans',
//     page_description: 'Shop for unique, handmade items from our artisan community',
//     page_title: 'Handmade items',
//     category_name: 'everything_else',
//     short_name: 'Everything Else',
//     long_name: 'Everything Else',
//     num_children: 10
//   },
//   {
//     category_id: 68887430,
//     name: 'furniture',
//     meta_title: 'Handmade Furniture on Etsy - Tables, chairs, beds, storage',
//     meta_keywords: 'handmade furniture, handcrafted furniture, handmade bed, handmade chair, handmade table, wooden furniture, metal furniture',
//     meta_description: 'Shop for unique, handmade furniture on Etsy, a global handmade marketplace. Broswe tables, chairs, beds, storage solutions & more from independent artisans.',
//     page_description: 'Shop for unique, handmade furniture from our artisan community',
//     page_title: 'Handmade furniture',
//     category_name: 'furniture',
//     short_name: 'Furniture',
//     long_name: 'Furniture',
//     num_children: 12
//   },
//   {
//     category_id: 69150359,
//     name: 'geekery',
//     meta_title: 'Handmade Geekery on Etsy - Kitschy, weird, humorous items & more',
//     meta_keywords: 'handmade geekery, video game fan art, gag gifts, novelty gifts, kitschy jewelry',
//     meta_description: 'Shop for unique, handmade geekery items on Etsy, a global handmade marketplace. Browse kitschy, humorous & weird items for any geek from independent artisans.',
//     page_description: 'Shop for unique, handmade geekery from our artisan community',
//     page_title: 'Handmade geekery',
//     category_name: 'geekery',
//     short_name: 'Geekery',
//     long_name: 'Geekery',
//     num_children: 17
//   },
//   {
//     category_id: 69150361,
//     name: 'glass',
//     meta_title: 'Handmade Glass on Etsy - Jewelry, beads, ornaments, home dÃ©cor',
//     meta_keywords: 'handmade glass, handcrafted glass, lampwork beads, glass jewelry, glass blowing, ornaments, glass bowl, stained glass',
//     meta_description: 'Shop for unique, handmade glass items on Etsy, a global handmade marketplace. Artisan glass jewelry, beads, ornaments, bowls & more from independent artisans',
//     page_description: 'Shop for unique, handmade glass items from our artisan community',
//     page_title: 'Handmade Glass Items',
//     category_name: 'glass',
//     short_name: 'Glass',
//     long_name: 'Glass',
//     num_children: 21
//   },
//   {
//     category_id: 68887366,
//     name: 'holidays',
//     meta_title: 'Handmade Holiday Items on Etsy - Birthdays, Christmas, patriotic celebrations ',
//     meta_keywords: 'handmade decorations, handcrafted decorations, handmade card, handmade cards, handmade holiday, handmade christmas',
//     meta_description: 'Shop for unique, handmade holiday items on Etsy, a global handmade marketplace. Browse items for Christmas, birthdays, Thanksgiving, patriotic days & more from independent artisans.',
//     page_description: 'Shop for unique, handmade holiday items from our artisan community',
//     page_title: 'Handmade Holiday Items',
//     category_name: 'holidays',
//     short_name: 'Holidays',
//     long_name: 'Holidays',
//     num_children: 11
//   },
//   {
//     category_id: 69150425,
//     name: 'housewares',
//     meta_title: 'Handmade Housewares on Etsy - Kitchen, bath, home decor, housewares',
//     meta_keywords: 'handmade housewares, handcrafted home decor, kitchen, home decor, home goods, pillows, dishes, mirrors, picture frames, coasters',
//     meta_description: 'Shop for unique, handmade housewares on Etsy, a global handmade marketplace. Browse items for your kitchen, bath, home decor & more from independent artisans',
//     page_description: 'Shop for unique, handmade housewares from our artisan community',
//     page_title: 'Handmade housewares',
//     category_name: 'housewares',
//     short_name: 'Housewares',
//     long_name: 'Housewares',
//     num_children: 25
//   },
//   {
//     category_id: 68887482,
//     name: 'jewelry',
//     meta_title: 'Handmade Jewelry on Etsy - Necklaces, rings, earrings, bracelets',
//     meta_keywords: 'handmade jewelry, handcrafted jewelry, hand made jewelry, artisan jewelry, custom jewelry, jewelry, jewellry',
//     meta_description: 'Shop for unique, handmade jewelry on Etsy, a global handmade marketplace. Browse necklaces, bracelets, rings, earrings & more from independent artisans.',
//     page_description: 'Shop for unique, handmade jewelry from our artisan community',
//     page_title: 'Handmade jewelry',
//     category_name: 'jewelry',
//     short_name: 'Jewelry',
//     long_name: 'Jewelry',
//     num_children: 8
//   },
//   {
//     category_id: 68887400,
//     name: 'knitting',
//     meta_title: 'Knit Items on Etsy - Hats, scarves, knit clothing ',
//     meta_keywords: 'knit, knitting, knitted, handmade knit, handmade knitting, handmade knitted',
//     meta_description: 'Shop for unique, handmade knit items on Etsy, a global handmade marketplace. Browse knit hats, cozies, scarves, clothing, knitting supplies & more from independent artisans',
//     page_description: 'Shop for unique, handmade knit items from our artisan community',
//     page_title: 'Knit Items',
//     category_name: 'knitting',
//     short_name: 'Knitting',
//     long_name: 'Knitting',
//     num_children: 16
//   },
//   {
//     category_id: 68887460,
//     name: 'music',
//     meta_title: 'Handmade Music Items on Etsy - Original music recordings, instruments, accessories',
//     meta_keywords: 'handmade music, original music, self-published cd, cassette tape, musical instrument, handcrafted instruments, guitar, music accessories',
//     meta_description: 'Shop for unique, handmade musical items on Etsy, a global handmade marketplace. Browse musical items & more from independent artists.',
//     page_description: 'Shop for unique, handmade music items from our artisan community',
//     page_title: 'Handmade music items',
//     category_name: 'music',
//     short_name: 'Music',
//     long_name: 'Music',
//     num_children: 10
//   },
//   {
//     category_id: 68887406,
//     name: 'needlecraft',
//     meta_title: 'Needlecraft on Etsy - Embroidery, cross stitch, needlepoint',
//     meta_keywords: 'needlecraft, handmade embroidery, needlepoint, cross stitch, felting, needle felting, pincushion',
//     meta_description: 'Shop for unique, needlecraft items on Etsy, a global handmade marketplace. Browse embroidery, cross stitch, needlepoint & more from independent artisans.',
//     page_description: 'Shop for unique, handmade needlecraft items from our artisan community',
//     page_title: 'Needlecraft Items',
//     category_name: 'needlecraft',
//     short_name: 'Needlecraft',
//     long_name: 'Needlecraft',
//     num_children: 13
//   },
//   {
//     category_id: 69150367,
//     name: 'paper_goods',
//     meta_title: 'Handmade Paper Goods on Etsy - Stationery, cards, calendars',
//     meta_keywords: 'handmade paper goods, handmade stationery, handmade paper, handmade gift wrap, handmade wrap',
//     meta_description: 'Shop for unique, handmade paper goods on Etsy, a global handmade marketplace. Browse stationery, greeting cards, calendars, gift wrap & more from independent artisans.',
//     page_description: 'Shop for unique, handmade paper goods from our artisan community',
//     page_title: 'Handmade paper goods',
//     category_name: 'paper_goods',
//     short_name: 'Paper Goods',
//     long_name: 'Paper Goods',
//     num_children: 14
//   },
//   {
//     category_id: 68887486,
//     name: 'patterns',
//     meta_title: 'Handmade Patterns on Etsy - Original patterns for sewing, knitting, crochet, crafting',
//     meta_keywords: 'handmade patterns, original patterns, sewing pattern, clothing pattern, knitting patterns, crochet patterns, patternmaking',
//     meta_description: 'Shop for unique, handmade patterns on Etsy, a global handmade marketplace. Browse original sewing, knitting, crochet & craft patterns from independent artisans.',
//     page_description: 'Shop for unique, handmade patterns from our artisan community',
//     page_title: 'Handmade Patterns',
//     category_name: 'patterns',
//     short_name: 'Patterns',
//     long_name: 'Patterns',
//     num_children: 17
//   },
//   {
//     category_id: 68887434,
//     name: 'pets',
//     meta_title: 'Handmade Pet Items on Etsy - Pet toys, accessories, treats, clothes',
//     meta_keywords: 'handmade collar, handmade pet toys, handmade pet treats, organic pet treats, leash, pet bed, pet toys, cat, dog',
//     meta_description: 'Shop for unique, handmade items for pets on Etsy, a global handmade marketplace. Browse accessories, clothes, dishes, toys & more for pets or pet-lovers from independent artisans.',
//     page_description: 'Shop for unique, handmade pet items from our artisan community',
//     page_title: 'Handmade pet items',
//     category_name: 'pets',
//     short_name: 'Pets',
//     long_name: 'Pets',
//     num_children: 20
//   },
//   {
//     category_id: 68887346,
//     name: 'plants_and_edibles',
//     meta_title: 'Plants and Edibles on Etsy - Baked goods, spices, herbs, tea & more',
//     meta_keywords: 'handmade food, homemade food, artisan food, gourmet food, baked goods, spices, homegrown herbs, artisan tea, roasted coffee, jam, candy',
//     meta_description: 'Shop for unique, homemade plants and edibles on Etsy, a global handmade marketplace. Browse baked goods, spices, candy, jam, tea & more from independent artisans.',
//     page_description: 'Shop for unique, homegrown plants and handmade edibles from our artisan community',
//     page_title: 'Plants and Edibles',
//     category_name: 'plants_and_edibles',
//     short_name: 'Plants and Edibles',
//     long_name: 'Plants and Edibles',
//     num_children: 13
//   },
//   {
//     category_id: 68887502,
//     name: 'quilts',
//     meta_title: 'Handmade Quilts on Etsy - Blankets, bed quilts, quilted wall art ',
//     meta_keywords: 'handmade quilts, handcrafted quilts, quilt, quilts, blankets, bed quilt, appliqued quilt, wall hanging, fiber art',
//     meta_description: 'Shop for unique, handmade quilts on Etsy, a global handmade marketplace. Browse blankets, bed quilts, wall hangings in traditional & modern styles from independent artisans.',
//     page_description: 'Shop for unique, handmade quilts from our artisan community',
//     page_title: 'Handmade quilts',
//     category_name: 'quilts',
//     short_name: 'Quilts',
//     long_name: 'Quilts',
//     num_children: 15
//   },
//   {
//     category_id: 69150433,
//     name: 'supplies',
//     meta_title: 'Craft Supplies on Etsy - Beads, buttons, yarn, craft supplies',
//     meta_keywords: 'handmade supplies, craft supplies, craft materials, art beads, beads, buttons, handspun yarn, hand dyed yarn, yarn, patterns, scrapbooking supplies',
//     meta_description: 'Shop for handmade and commercial crafting supplies on Etsy, a global handmade marketplace. Browse a wide variety of beads, buttons, yarn & more.',
//     page_description: 'Shop for unique supplies from our artisan community',
//     page_title: 'Supplies',
//     category_name: 'supplies',
//     short_name: 'Supplies',
//     long_name: 'Supplies',
//     num_children: 10
//   },
//   {
//     category_id: 69150393,
//     name: 'toys',
//     meta_title: 'Handmade Toys on Etsy - Dolls, games, puppets, toys',
//     meta_keywords: 'handmade toys, handcrafted toys, childrens toys, wooden toy, plushie, doll, games, collectible toys',
//     meta_description: 'Shop for unique, handmade toys on Etsy, a global handmade marketplace. Browse dolls, plushies, games, puppets & more for kids or adults from independent artisans',
//     page_description: 'Shop for unique, handmade toys from our artisan community',
//     page_title: 'Handmade toys',
//     category_name: 'toys',
//     short_name: 'Toys',
//     long_name: 'Toys',
//     num_children: 16
//   },
//   {
//     category_id: 69150437,
//     name: 'vintage',
//     meta_title: 'Vintage on Etsy - Vintage clothing, home decor, collectibles, antiques',
//     meta_keywords: 'vintage clothing, vintage, retro, thrift stores, thrifted, vintage collectibles, vintage home decor',
//     meta_description: 'Shop for amazing and hard-to-find vintage goods on Etsy, a global handmade and vintage marketplace. Browse clothing, home decor, collectibles & more from the 1980s & earlier.',
//     page_description: 'Shop for unique, vintage items from our artisan community',
//     page_title: 'Vintage items',
//     category_name: 'vintage',
//     short_name: 'Vintage',
//     long_name: 'Vintage',
//     num_children: 15
//   },
//   {
//     category_id: 68887494,
//     name: 'weddings',
//     meta_title: 'Handmade Wedding Items on Etsy - Invitations, jewelry, party favors for weddings',
//     meta_keywords: 'handmade wedding invitations, wedding invitations, custom invitations, wedding favors, unique wedding jewelry, letterpress invitations',
//     meta_description: 'Shop for unique, handmade wedding items on Etsy, a global handmade marketplace. Wedding invitations, accessories, favors, jewelry & more from independent artisans',
//     page_description: 'Shop for unique, handmade wedding items from our artisan community',
//     page_title: 'Handmade wedding items',
//     category_name: 'weddings',
//     short_name: 'Weddings',
//     long_name: 'Weddings',
//     num_children: 20
//   },
//   {
//     category_id: 68887388,
//     name: 'woodworking',
//     meta_title: 'Handcrafted Wood Items on Etsy - Furniture, sculpture, home decor',
//     meta_keywords: 'handmade woodworking, wood, wooden furniture, handcrafted from wood, wood jewelry, wood sculpture, woodworking',
//     meta_description: 'Shop for unique, handcrafted woodworking items on Etsy, a global handmade marketplace. Browse wooden furniture, decor, sculpture, jewelry & more from independent artisans.',
//     page_description: 'Shop for unique, handcrafted wood items from our artisan community',
//     page_title: 'Handcrafted Wood Items',
//     category_name: 'woodworking',
//     short_name: 'Woodworking',
//     long_name: 'Woodworking',
//     num_children: 22
//   }
// ]

// const testCall = [
//   {
//     category_id: 69150467,
//     name: 'accessories',
//     meta_title: 'Handmade Accessories on Etsy - Belts, hats, pins, scarves',
//     meta_keywords: 'handmade accessories, handmade belt, handmade hat, handmade wallet, handmade scarf, handmade keychain, handmade necktie, handmade accessory',
//     meta_description: 'Shop for unique, handmade accessories for men and women on Etsy, a global handmade marketplace. Browse belts, hats, pins, scarves & more from independent artisans.',
//     page_description: 'Shop for unique, handmade accessories from our artisan community',
//     page_title: 'Handmade accessories',
//     category_name: 'accessories',
//     short_name: 'Accessories',
//     long_name: 'Accessories',
//     num_children: 27
//   }
// ]

// // this will be populated with data from etsy's API
// const results = []

// function getCategories() {
//   const promise = new Promise(function (resolve, reject) {
//     // etsy API call to grab all top-level categories
//     axios.get(`https://openapi.etsy.com/v2/taxonomy/categories/?api_key=${etsyKey}`)
//       .then(() => {
//         // 
//         getSubCategories(firstCalll)
//           .then(res => resolve(res))
//       })
//       .catch(err => reject(err))
//   })
//   return promise
// }

// function getSubCategories(categories) {
//   const promise = new Promise(function (resolve, reject) {
//     categories.forEach((category, i) => {
//       setTimeout(() => {
//         console.log(i)
//         // grab all subcategories per category on etsy
//         axios.get(`https://openapi.etsy.com/v2/taxonomy/categories/${category.name}?api_key=${etsyKey}`)
//           .then(res => {
//             const subCategories = res.data.results.map(elem => elem.name)
//             category.subCategories = subCategories
//             results.push(category)

//             if (results.length === categories.length) {
//               // console.log('here we go')
//               resolve(results)
//             }
//           })
//           .catch(err => reject(err))
//         // TODO: at 1000 it seems to still be exceeding the api call quota, so leave at 2000 for now
//       }, 2000 * i)
//     })
//   })
//   return promise
// }

// module.exports = getCategories()