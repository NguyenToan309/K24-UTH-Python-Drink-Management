// ===== DANH SÁCH SẢN PHẨM =====
const products = [
  { id: 1, name: "Hồng Trà kem cheese", price: 30000, category: "Thuần Trà", image: "https://chefjob.vn/wp-content/uploads/2020/02/hong-tra-sui-bot.jpg" },
  { id: 2, name: "Sữa Tươi Trân Châu Đường Đen", price: 35000, category: "Hot", image: "https://file.hstatic.net/200000721249/file/sua_tuoi_tran_chau_duong_den_6e622e3e514c4e5b9d1d46a80b210853.jpg" },
  { id: 3, name: "Matcha Latte", price: 40000, category: "Trà Latte", image: "https://cdn.tgdd.vn/2021/04/CookProduct/Trasuamatcha-1200x676.jpg" },
  { id: 4, name: "Trà Đào Cam Sả", price: 45000, category: "Trà Trái Cây", image: "https://lypham.vn/wp-content/uploads/2024/09/cach-lam-tra-dao-cam-sa.jpg" },
  { id: 5, name: "Trà Olong Bí Đao", price: 38000, category: "Hot", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGGKMnyeipm_d9-Vbx7hkswnX1pzQqctTH5Q&s" },
  { id: 6, name: "Trà Sữa Kem Trứng Nướng Dừa", price: 42000, category: "Trà Sữa", image: "https://lypham.vn/wp-content/uploads/2025/01/cach-lam-tra-sua-kem-dua-nuong.jpg" },
  { id: 7, name: "Trà Chanh Tươi", price: 25000, category: "Thuần Trà", image: "https://phache.com.vn/upload/images/tra-chanh-kim-quat.jpg" },
  { id: 8, name: "Trà Sữa Trân Châu Đen", price: 35000, category: "Trà Sữa", image: "https://images.gofnb.vn/prodimages/28102024100444.webp" },
  { id: 9, name: "Trà Sữa chocolate", price: 38000, category: "Trà Sữa", image: "https://vuaxedaybanhang.vn/wp-content/uploads/2022/01/tra-sua-socola.jpg" },
  { id: 10, name: "Trà Sữa Dâu", price: 37000, category: "Trà Sữa", image: "https://img.lazcdn.com/g/p/78be1032d6ea3ee29a33d32f5d66e365.jpg_720x720q80.jpg" },
  { id: 11, name: "Trà Xoài Nhiệt Đới", price: 42000, category: "Trà Trái Cây", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXhDVZpwQPXN1PBVRkePp8gkhyXchgcunHOw&s" },
  { id: 12, name: "Trà Vải Hoa Hồng", price: 45000, category: "Trà Trái Cây", image: "https://reskihotpot.kas.asia/images/media/66a06a9c177b7543d069f49e.png" },
  { id: 13, name: "Trà Sen Vàng", price: 30000, category: "Hot", image: "https://dayphache.edu.vn/wp-content/uploads/2019/09/cach-nau-tra-sen-vang-long-nhan.jpg" },
  { id: 14, name: "Trà Sữa Matcha Kem Cheese", price: 45000, category: "Trà Sữa", image: "https://kemducphat.com/wp-content/uploads/2023/09/tra%CC%80-su%CC%9B%CC%83a-matcha-kem.jpeg" },
  { id: 15, name: "Trà Sữa Khoai Môn", price: 40000, category: "Trà Sữa", image: "https://file.hstatic.net/200000538679/article/628cbb1fd96d2_6ec25b1b0b924d89a50f5c0e44d59ce3.jpg" },
  { id: 16, name: "Trà Olong Kem Cheese", price: 39000, category: "Hot", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQylwsCcBZ_Dp7Lvv6edPYJVFpEwSL6u74PWg&s" },
  { id: 17, name: "Trà Sữa Thái Xanh", price: 35000, category: "Trà Sữa", image: "https://lypham.vn/wp-content/uploads/2024/09/luu-y-khi-nau-tra-sua-thai-xanh.jpg"},
  { id: 18, name: "Trà Sữa Thái Đỏ", price: 35000, category: "Trà Sữa", image: "https://cdn.shopify.com/s/files/1/0537/9997/files/tra-sua-thai-do-la-gi-bot-tra-sua-thai-do-mua-o-dau-la-uy-tin_1_480x480.png?v=1681717448"},
  { id: 19, name: "Trà Sữa Hokkaido", price: 42000, category: "Trà Sữa", image: "https://nguyenlieuantoan.com/assets/upload/news/1634610871_tra-sua.jpg?v=0.0.3.1"},
  { id: 20, name: "Trà Sữa Ô Long", price: 39000, category: "Trà Sữa", image: "https://lypham.vn/wp-content/uploads/2024/12/tra-sua-o-long.jpg"},
  { id: 21, name: "Trà Sữa Việt Quất", price: 35000, category: "Trà Sữa", image: "https://traphucsang.vn/wp-content/uploads/2025/07/cong-thuc-tra-sua-viet-quat.jpg"},
  { id: 22, name: "Trà Sữa Bạc Hà", price: 35000, category: "Trà Sữa", image: "https://lypham.vn/wp-content/uploads/2024/11/tra-sua-bac-ha.jpg"},
  { id: 23, name: "Trà Chanh Dây", price: 30000, category: "Trà Trái Cây", image: "https://lypham.vn/wp-content/uploads/2024/10/chanh-day-mat-ong-truyen-thong.jpg"},
  { id: 24, name: "Trà Dâu", price: 30000, category: "Trà Trái Cây", image: "https://checkinvietnam.vtc.vn/media/20210701/images/tra-dau-ngam.jpeg"},
  { id: 25, name: "Trà Cam Tươi", price: 30000, category: "Trà Trái Cây", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQboW-5zGbqx61dV3AmTL2UDGvnU4O2JoZ9rA&s"},
  { id: 26, name: "Trà Dưa Lưới", price: 30000, category: "Trà Trái Cây", image: "https://tea-pop.com.vn/watermark/product/540x540x1/upload/product/tra-dua-luoi-hoang-kim-2789.jpg"},
  { id: 27, name: "Trà Ổi Hồng", price: 30000, category: "Trà Trái Cây", image: "https://cdn.tgdd.vn/2021/06/CookProductThumb/toh2-620x620.jpg"},
  { id: 28, name: "Trà Kiwi", price: 30000, category: "Trà Trái Cây", image: "https://thucphamplaza.com/wp-content/uploads/products_img/meo-khi-pha-che-tra-kiwi.jpg"},
  { id: 29, name: "Trà Nho Đen", price: 30000, category: "Trà Trái Cây", image: "https://tudienmonan.vn/wp-content/uploads/2024/10/cach-lam-tra-nho-den-5.jpg"},
  { id: 30, name: "Trà Vải Nha Đam", price: 30000, category: "Trà Trái Cây", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT00lyzkz7echNAfZi2D8RWrlHSPHSngoHgsA&s"},
  { id: 31, name: "Trà Thanh Long", price: 30000, category: "Trà Trái Cây", image: "https://cdn.shopify.com/s/files/1/0537/9997/files/tra-thanh-long_480x480.png?v=1704942940"},
  { id: 32, name: "Trà Táo", price: 30000, category: "Trà Trái Cây", image: "https://bizweb.dktcdn.net/thumb/1024x1024/100/347/975/products/tra-tao.jpg?v=1651134745640"},
  { id: 33, name: "Trà Cam Mật Ong", price: 30000, category: "Trà Trái Cây ", image: "https://kingdrink.vn/wp-content/uploads/2022/11/tra-cam-que-mat-ong.jpg"},
  { id: 34, name: "Trà tắc Xí Muội", price: 30000, category: "Trà Trái Cây", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHHEp4V2pp1o57gXaGjIkkwHDC6qJ9tO2nPw&s"},
  { id: 35, name: "Trà Dâu Cam", price: 30000, category: "Trà Trái Cây", image: "https://nguyenlieuantoan.com/assets/ckfinder/uploads/files/tr%C3%A2n%20ch%C3%A2u/cong-thuc-dao-cam-dau-tay-ngon-thanh-pham.jpg"},
  { id: 36, name: "Trà Cam Bười", price: 30000, category: "Trà Trái Cây", image: "https://onekafe.vn/wp-content/uploads/2013/07/10-6.jpg"},
  { id: 37, name: "Trà Vải Lài", price: 30000, category: "Trà Trái Cây", image: "https://www.lorca.vn/wp-content/uploads/2025/05/3-41.jpg"},
  { id: 38, name: "Trà Chanh Nha Đam", price: 30000, category: "Trà Trái Cây", image: "https://cdn.sobanhang.com/v2/512x512/finan-prd/3307d644-0aa5-427d-aa58-73b902a29bc7/image/c3faccae-ca6a-4efc-9784-888dfdf6084c.jpg"},
  { id: 39, name: "Trà Vải Tươi", price: 30000, category: "Trà Trái Cây", image: "https://bearviet.vn/wp-content/uploads/2023/11/cach-pha-tra-vai-ngon-1.jpg"},
  { id: 40, name: "Trà Cam Dâu Tằm", price: 30000, category: "Trà Trái Cây", image: "https://lafreshdalat.vn/img/new/tra-cam-dau-tam-21-atB.png"},
  { id: 41, name: "Trà Sữa Phúc Bồn Tử", price: 35000, category: "Trà Sữa", image: "https://trumthucpham.com/images/contents/thumbnail-cong-thuc-pha-che-thuc-uong-tra-sua-phuc-bon-tu-thom-mat-mang-lai-cam-giac-sang-khoai-1740737277.jpg"},
  { id: 42, name: "Trà Sữa Dừa", price: 35000, category: "Trà Sữa", image: "https://horecavn.com/wp-content/uploads/2024/05/ban-da-biet-cach-lam-tra-o-long-sua-dua-tran-chau-trang-chuan-vi-chua_20240526202348.png"},
  { id: 43, name: "Trà Sữa Caramen", price: 35000, category: "Trà Sữa", image: "https://file.hstatic.net/1000135323/file/tra_sua_caramel_3_181754176b4d4a78b8c5f6151277aa80_grande.png"},
  { id: 44, name: "Trà Sữa Phô Mai", price: 35000, category: "Trà Sữa", image: "https://lypham.vn/wp-content/uploads/2025/01/cach-lam-tra-sua-pho-mai-tuoi.jpg"},
  { id: 45, name: "Trà Sữa Đào", price: 35000, category: "Trà Sữa", image: "https://lypham.vn/wp-content/uploads/2024/11/cach-lam-tra-sua-dao.jpg"},
  { id: 46, name: "Trà Sữa Caramel Macchiato", price: 35000, category: "Trà Sữa", image: "https://nhanvipcoffee.com.vn/wp-content/uploads/2024/08/2.jpg"},
  { id: 47, name: "Trà Sữa Khoai Môn Kem Cheese", price: 35000, category: "Hot", image: "https://content.pancake.vn/1/s1780x2374/e2/31/f5/cd/fe92b15a6499e507df434b37675fa566cd85938daecbb429e1772e05-w:3858-h:5144-l:5018381-t:image/jpeg.jpeg"},
  { id: 48, name: "Matcha Đá Xay", price: 35000, category: "Hot", image: "https://www.richs.com.vn/images/cong-thuc/Th%E1%BB%A9c%20u%E1%BB%91ng/Matcha%20%C4%91%C3%A1%20xay/IMG_7185.jpg"},
  { id: 49, name: "Socola Đá Xay", price: 35000, category: "Hot", image: "https://noithatcaphe.vn/images/2022/07/15/socola-da-xay-1.jpg"},
  { id: 50, name: "Cookies Đá Xay", price: 35000, category: "Hot", image: "https://hocphachehanoi.com.vn/upload/userfiles/images/cach-lam-cookie-da-xay-01.jpg"},
  { id: 51, name: "Trà Dâu Kem Cheese", price: 35000, category: "Hot", image: "https://phache.com.vn/upload/news/tra_dau_kem_cheese_2111.jpg"},
  { id: 52, name: "Trà Sữa Việt Quất Kem Cheese", price: 35000, category: "Hot", image: "https://bizweb.dktcdn.net/thumb/grande/100/290/576/articles/tra-sua-viet-quat-milk-foam.jpg?v=1698403903200"},
  { id: 53, name: "Sữa Chua Việt Quất", price: 35000, category: "Hot", image: "https://lypham.vn/wp-content/uploads/2024/10/sua-chua-lac-viet-quat.jpg"},
  { id: 54, name: "Sữa Chua Xoài", price: 35000, category: "Hot", image: "https://lypham.vn/wp-content/uploads/2024/10/cach-lam-sua-chua-lac-xoai.jpg"},
  { id: 55, name: "Sữa Chua Dâu", price: 35000, category: "Hot", image: "https://lypham.vn/wp-content/uploads/2024/10/cong-thuc-sua-chua-lac-dau-tay.jpg"},
  { id: 56, name: "Trà Sữa Nướng", price: 35000, category: "Hot", image: "https://congthucphache.com/wp-content/uploads/2020/01/17456034b042481c1153.jpg"},
  { id: 57, name: "Trà Ô Long Sữa Tươi", price: 35000, category: "Hot", image: "https://phache.com.vn/upload/images/oolong-sua.jpg"},
  { id: 58, name: "Trà sữa trân châu hoàng kim", price: 35000, category: "Trà Sữa", image: "https://nguyenlieuantoan.com/assets/ckfinder/uploads/images/%E1%BA%A2NH%20TR%C3%80%20S%E1%BB%AEA/TR%C3%80%20S%E1%BB%AEA%20TR%C3%82N%20CH%C3%82U%20HO%C3%80NG%20KIM/tra-sua-nuong-tra-tran-chau-hoang-kim.jpg"},
  { id: 59, name: "Caramel Latte", price: 35000, category: "Trà Latte", image: "https://www.allrecipes.com/thmb/aAaKltGtttecKWn4uqK4ivZ6SPQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/260904_HomemadeCaramelLatte_ddmfs_3x4_3967-de97df91d502475982fe4ae9299bcf3b.jpg"},
  { id: 60, name: "Vanilla Latte", price: 35000, category: "Trà Latte", image: "https://images.ctfassets.net/v601h1fyjgba/7wGcWZgV7yaSLXrodALIuw/2496353e1ec8c39dd44adfb45e8335d3/Vanilla_Latte.jpg"},
  { id: 61, name: "Mocha Latte", price: 35000, category: "Trà Latte", image: "https://milkandpop.com/wp-content/uploads/2020/11/mocha-latte-13.jpg"},
  { id: 62, name: "Hazelnut Latte", price: 35000, category: "Trà Latte", image: "https://tyberrymuch.com/wp-content/uploads/2024/03/Hazelnut-Iced-Coffee-Recipe.jpg"},
  { id: 63, name: "Almond Latte", price: 35000, category: "Trà Latte", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfuc25KeS2TCeFK-iCSi1vPxf9OvZ71dgYvg&s"},
  { id: 64, name: "Chocolate Latte", price: 35000, category: "Trà Latte", image: "https://cdn.tgdd.vn/Files/2022/05/11/1431737/huong-dan-cach-pha-cacao-latte-don-gian-tai-nha-giai-nhiet-co-the-202205111147397113.jpg"},
  { id: 65, name: "Brown Sugar Latte", price: 35000, category: "Trà Latte", image: "https://fancifuleats.com/wp-content/uploads/2024/04/cover-iced-brown-sugar-miso-latte.jpg"},
  { id: 66, name: "Coconut Latte", price: 35000, category: "Trà Latte", image: "https://teakandthyme.com/wp-content/uploads/2022/08/iced-coconut-amarula-latte-DSC_4268-1x1-1200.jpg"},
  { id: 67, name: "Milk Tea Latte", price: 35000, category: "Trà Latte", image: "https://cookingwithcocktailrings.com/wp-content/uploads/2022/02/Iced-Black-Tea-Latte-with-Cheese-Foam-39-683x1024.jpg"},
  { id: 68, name: "Coffee Latte", price: 35000, category: "Trà Latte", image: "https://nhanvipcoffee.com.vn/wp-content/uploads/2024/06/Partners-Latte-FT-BLOG0523-09569880de524fe487831d95184495cc-1024x683.jpeg"},
  { id: 69, name: "Macchiato Latte", price: 35000, category: "Trà Latte", image: "https://liliebakery.fr/wp-content/uploads/2024/10/latte-macchiato-recette-facile-lilie-bakery-500x500.jpg"},
  { id: 70, name: "Vanilla Bean Latte", price: 35000, category: "Trà Latte", image: "https://www.vanillabeancuisine.com/wp-content/uploads/2025/07/Vanilla-Bean-Latte-7.jpg"},
  { id: 71, name: "Hạt Phỉ Latte", price: 35000, category: "Trà Latte", image: "https://www.nescafe.com/vn/sites/default/files/2023-08/Nes_Web3_RDP_RecipeHeroBanner_SaltedCaramelLatte_1066x1066.jpg"},
  { id: 72, name: "Đậu nành Latte", price: 35000, category: "Trà Latte", image: "https://www.bartender.edu.vn/wp-content/uploads/2020/04/sua-dau-nanh.jpg"},
  { id: 73, name: "Trà xanh Latte", price: 35000, category: "Trà Latte", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_783jeNr4KRLj1Kk4EsPxLIuwb6DK2npxMA&s"},
  { id: 74, name: "Caramel Macchiato Latte", price: 35000, category: "Trà Latte", image: "https://www.nescafe.com/vn/sites/default/files/2023-08/RecipeHero_IcedCaramelLatte_1066x1066.jpg"},
  { id: 75, name: "Socola Sữa Latte", price: 35000, category: "Trà Latte", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlHdmjddjJwN9mWSJHUcssYWWFZyvTBzvd1g&s"},
  { id: 76, name: "Latte Đá Xay", price: 35000, category: "Trà Latte", image: "https://www.cubes-asia.com/wp-content/uploads/2021/12/cafe-da-xay-1.jpg"},
  { id: 77, name: "Latte Kem Cheese", price: 35000, category: "Trà Latte", image: "https://bizweb.dktcdn.net/100/290/576/files/bca2d661a2fc70a4b6305b420ad911c7.jpg?v=1651899664613"},
  { id: 78, name: "Latte Sữa Tươi", price: 35000, category: "Trà Latte", image: "https://cubes-asia.com/storage/blogs/2024-12/5-cach-pha-ca-phe-sua-tuoi-khong-duong-co.jpeg"},
  { id: 79, name: "Oreo Latte", price: 35000, category: "Trà Latte", image: "https://www.cocktails-road.com/images/recipe/2023/04/cafe-latte-oreo.jpg"},
  { id: 80, name: "Trà Ô Long", price: 35000, category: "Thuần Trà", image: "https://mixuediemdien.com/wp-content/uploads/2023/07/Tra-O-Long-Bon-Mua.jpg"},
  { id: 81, name: "Trà Nhài", price: 35000, category: "Thuần Trà", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFG08MpPej8roEfaPjbj_0VDLkiMNeDPK8Gw&s"},
  { id: 82, name: "Trà Lài Đác Thơm", price: 35000, category: "Thuần Trà", image: "https://lypham.vn/wp-content/uploads/2025/04/Mot-so-luu-y-khi-lam-tra-lai-dac-thom.jpg"},
  { id: 83, name: "Trà Đen Machiato", price: 35000, category: "Hot", image: "https://dayphache.edu.vn/wp-content/uploads/2017/03/tra-den-macchiato-co-vi-chat.jpg"},
  { id: 84, name: "Trà Xanh Sữa", price: 35000, category: "Thuần Trà", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2E7e5ngNATKO_odX2VwGl98J-ZKDO6a8UTA&s"},
  { id: 85, name: "Trà Lài Mật Ong", price: 35000, category: "Thuần Trà", image: "https://maycha.com.vn/wp-content/uploads/2023/10/tra-lai-mat-ong-vang-sua.png"},
  { id: 86, name: "Trà Bạc Hà", price: 35000, category: "Thuần Trà", image: "https://cdn2.fptshop.com.vn/unsafe/tra_bac_ha_7_7ef3161f6c.jpg"},
  { id: 87, name: "Trà Quế", price: 35000, category: "Thuần Trà", image: "https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2024/11/3/photo-1730600134421-17306001347471196835446.jpeg"},
  { id: 88, name: "Trà Gừng", price: 35000, category: "Thuần Trà", image: "https://cdn.tgdd.vn/2021/03/CookProduct/tac-dung-cua-tra-gung-va-cac-cach-pha-tra-gung-don-gian-tai-nha-1-1200x676.jpg"},
  { id: 89, name: "Trà Chanh Nóng", price: 35000, category: "Thuần Trà", image: "https://images2.thanhnien.vn/528068263637045248/2023/7/14/tra-chanh-5-16893314376201391696785.jpg"},
  { id: 90, name: "Trà Tắc", price: 35000, category: "Thuần Trà", image: "https://lypham.vn/wp-content/uploads/2024/10/tra-tac-mat-ong.jpg"},
  { id: 91, name: "Trà Hoa Cúc", price: 35000, category: "Thuần Trà", image: "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/2023_10_30_638343005437061544_ava.jpg"},
  { id: 92, name: "Trà Nhài Cam", price: 35000, category: "Thuần Trà", image: "https://api.nguyenlieutrendy.com/uploads/recipe_pictures/1616401619843-Tr%C3%A0%20Chanh%20%C4%90%C3%A0o.png"},
  { id: 93, name: "Trà Chanh Đào", price: 35000, category: "Thuần Trà", image: "https://nguyenlieuantoan.com/assets/upload/news/1597288196_e870c829cda331fd68b2.jpg?v=0.0.3.1"},
  { id: 94, name: "Trà Ô Long Hoa Hồng", price: 35000, category: "Thuần Trà", image: "https://cdn.shopify.com/s/files/1/0106/7915/6799/t/3/assets/25-1629126890646.jpg"},
  { id: 95, name: "Trà Quýt Mật Ong", price: 35000, category: "Thuần Trà", image: "https://www.tteokbokki.vn/cdn/shop/products/tra-quyt-mat-ong-jeju-cholocwon-1kg_2.png?v=1661939653"},
  { id: 96, name: "Trà Quế Sữa", price: 35000, category: "Thuần Trà", image: "https://i.ytimg.com/vi/kH21aEo-BvU/maxresdefault.jpg"},
  { id: 97, name: "Trà Vải Lạnh", price: 35000, category: "Thuần Trà", image: "https://yesterdaypianocafe.com/wp-content/uploads/2021/06/yesterday_travai_3205_web.jpg"} ,
  { id: 98, name: "Trà Đào Lạnh", price: 35000, category: "Thuần Trà", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQHHXkRnwiYv9hNFKt6VZqRIYxwNZC--By4w&s"},
  { id: 99, name: "Trà Chanh Dâu", price: 35000, category: "Thuần Trà", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYrHoCecOuNXg4YRu8rDorfR-FTkv0r1KkOg&s"},
  { id: 100, name: "Trà Tắc Mật Ong", price: 35000, category: "Thuần Trà", image: "https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/164367/Originals/tra%CC%80%20ta%CC%86%CC%81c%20ma%CC%A3%CC%82t%20ong%203.jpg"},
  { id: 101, name: "Cà Phê Sữa Đá", price: 25000, category: "Cafe", image: "https://f5cafe.com/wp-content/uploads/2020/06/ca_phe_sua_da.jpg" },
  { id: 102, name: "Cà Phê Đen Đá", price: 25000, category: "Cafe", image: "https://banhmibahuynh.vn/wp-content/uploads/2025/06/Ca-phe-den-da-Madam-Win.jpg" },
  { id: 103, name: "Bạc Xỉu", price: 25000, category: "Cafe", image: "https://lypham.vn/wp-content/uploads/2024/09/cach-lam-bac-xiu-da.jpg" },
  { id: 104, name: "Cà Phê Muối", price: 25000, category: "Cafe", image: "https://vitarom.vn/wp-content/uploads/2023/10/Ca-phe-muoi-Vitarom-1-jpg.webp" },
  { id: 105, name: "Cà Phê Cốt Dừa", price: 25000, category: "Cafe", image: "https://simexcodl.com.vn/wp-content/uploads/2024/01/cach-pha-ca-phe-cot-dua-4.jpg" },
  { id: 106, name: "Cà Phê Trứng", price: 25000, category: "Cafe", image: "https://rapido.vn/wp-content/uploads/2024/02/Quan_cafe_cacao_trung_Vung_Tau_Palma_9.jpeg" },
  { id: 107, name: "Espresso", price: 25000, category: "Cafe", image: "https://file.hstatic.net/1000075078/file/blog_fced2a59673346c48240e09512312768_grande.jpg" },
  { id: 108, name: "Americano", price: 25000, category: "Cafe", image: "https://cloudassets.starbucks.com/is/image/sbuxcorp/IcedCaffeAmericano?impolicy=1by1_wide_topcrop_630&crop=180,360,1440,1440&wid=630&hei=630&qlt=85" },
  { id: 109, name: "Cappuccino", price: 25000, category: "Cafe", image: "https://guentercoffee.com/cdn/shop/articles/anleitung-cappuccino-blogheader.jpg?v=1758119315&width=1440" },
  { id: 110, name: "Mocha", price: 25000, category: "Cafe", image: "https://dayphache.edu.vn/wp-content/uploads/2016/05/ca-phe-mocha-nong.jpg" },
  { id: 111, name: "Cà Phê Dừa Đá Xay", price: 25000, category: "Cafe", image: "https://product.hstatic.net/200000825425/product/cafe_cot_dua_da_xay_4dcd8a47d7ca4ad3a4cd8bd5b788b3d7.png" },
  { id: 112, name: "Cold Brew Cam Sả", price: 25000, category: "Cafe", image: "https://simexcodl.com.vn/wp-content/uploads/2024/02/pha-cold-brew-cam-sa-4.jpg" },
  { id: 113, name: "Cold Brew Sữa Tươi", price: 25000, category: "Cafe", image: "https://cold3coffee.com.vn/wp-content/uploads/2025/07/poster-cf-1-2-283x400.png"},
  { id: 114, name: "Cà Phê Vani", price: 25000, category: "Cafe", image: "https://cdn11.bigcommerce.com/s-5ljyj9oebs/images/stencil/600x600/products/6025/27336/P072023205410_1__56263.1709562034.jpg?c=2" },
  { id: 115, name: "Cà Phê Socola", price: 25000, category: "Cafe", image: "https://horecavn.com/wp-content/uploads/2024/05/chocolate-coffee-ca-phe-socola_20240527104617.jpg" },
  { id: 116, name: "Cà Phê Bạc hà", price: 25000, category: "Cafe", image: "https://horecavn.com/wp-content/uploads/2024/05/mint-cofee-ca-phe-bac-ha_20240527104622.jpg" },
  { id: 117, name: "Cà Phê Caramel", price: 25000, category: "Cafe", image: "https://simexcodl.com.vn/wp-content/uploads/2024/03/cach-lam-ca-phe-caramel-1.jpeg" },
  { id: 118, name: "Mocha Dừa", price: 25000, category: "Cafe", image: "https://phache.com.vn/upload/news/moca-sua-dua.jpg" },
  { id: 119, name: "Cà Phê Trân Châu", price: 25000, category: "Cafe", image: "https://nguyenlieuantoan.com/assets/upload/news/1649986563_cach-lam-tran-chau-ca-phe-nha-lam.jpg?v=0.0.3.1"},
  { id: 120, name: "Cà Phê Sữa Tươi", price: 25000, category: "Cafe", image: "https://cubes-asia.com/storage/blogs/2024-12/5-cach-pha-ca-phe-sua-tuoi-khong-duong-co.jpeg"},
  { id: 121, name: "Cà Phê Sữa Tươi Sương Sáo", price: 25000, category: "Cafe", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgnd4U5v91ispSW_iKC2hiqWKx4i_TnoEwDQ&s" },
  { id: 122, name: "Cà Phê Tiramisu", price: 25000, category: "Cafe", image: "https://43factory.coffee/wp-content/uploads/2024/09/202409270209-cach-thuong-thuc-ca-phe-tiramisu-7.jpg" },
  { id: 123, name: "Cà Phê Kem", price: 25000, category: "Cafe", image: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/5/9/1042829/Cafe-Kem-Dua.jpg"},
  { id: 124, name: "Cà Phê Sữa Hạnh Nhân", price: 25000, category: "Cafe", image: "https://thucphamplaza.com/wp-content/uploads/products_img/cach-pha-ca-phe-hanh-nhan-cho-mua-dong.jpg"},
  { id: 125, name: "Trà Nhãn Sen", price: 35000, category: "Hot", image:"https://lypham.vn/wp-content/uploads/2025/02/cong-thuc-pha-che-tra-nhan-hat-sen.jpg"},
  { id: 126, name: "Trà Sữa Bá Tước", price: 35000, category: "Trà Sữa", image:"https://phache.com.vn/upload/gallery/cach-lam-tra-sua-ba-tuoc-2-1-.jpg"},
  { id: 127, name: "Trà Sữa Lài", price: 35000, category: "Trà sữa", image:"https://eggyolk.vn/wp-content/uploads/2024/10/Cach-pha-tra-sua-hoa-nhai-ngon-la-mieng.jpg"},
  { id: 128, name: "Trà Thạch Đào", price: 35000, category: "Trà Trái Cây", image:"https://onekafe.vn/wp-content/uploads/2013/08/10-8.jpg"},
  


];


let cart = JSON.parse(localStorage.getItem("cart") || "[]");

// URL backend
const backendURL = 'http://127.0.0.1:4000/api';

// -------------------------------------------------------------------
// TẤT CẢ LOGIC NẰM TRONG DOMCONTENTLOADED
// -------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
    
    // ===== KIỂM TRA ĐĂNG NHẬP (TOKEN) =====
    const token = localStorage.getItem('token');
    const currentPage = window.location.pathname;

    if (!token && currentPage.includes('index.html')) {
        // Nếu ở trang index mà KHÔNG có token -> đá về login
        alert("Bạn cần đăng nhập để sử dụng!");
        window.location.href = 'login.html';
        return; // Dừng chạy code
    }

    // ===== LOGIC ĐĂNG XUẤT =====
    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            cart = []; // Xóa giỏ hàng
            localStorage.removeItem("cart"); // Xóa dữ liệu lưu
            localStorage.removeItem("token"); // <-- Xóa token khi đăng xuất
            
            renderCart(); // Cập nhật lại giao diện giỏ
            alert("Bạn đã đăng xuất!");
            window.location.href = "login.html"; // Chuyển hướng về trang đăng nhập
        });
    }

    // ===== CHUYỂN TAB =====
    document.querySelectorAll(".tab").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".tab").forEach(b => b.classList.remove("active"));
            document.querySelectorAll(".content").forEach(c => c.classList.remove("active"));
            btn.classList.add("active");
            document.getElementById(btn.dataset.target).classList.add("active");
            renderAll(); // Gọi renderAll khi chuyển tab
        });
    });

    // ===== CHUYỂN SANG TAB THANH TOÁN =====
    const goCheckoutBtn = document.getElementById("goCheckoutBtn");
    if (goCheckoutBtn) {
        goCheckoutBtn.addEventListener("click", () => {
            document.querySelectorAll(".tab").forEach(b => b.classList.remove("active"));
            document.querySelectorAll(".content").forEach(c => c.classList.remove("active"));
            document.querySelector('[data-target="checkout"]').classList.add("active");
            document.getElementById("checkout").classList.add("active");
            renderAll(); // Gọi renderAll khi chuyển tab
        });
    }

    // ----------------------------------------------------
    // ⬇️ LOGIC FORM ĐĂNG KÝ ⬇️
    // ----------------------------------------------------
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const submitButton = registerForm.querySelector('button[type="submit"]');
            submitButton.disabled = true;
            submitButton.textContent = 'Đang xử lý...';

            const username = document.getElementById('username').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();
            const confirmPassword = document.getElementById('confirmPassword').value.trim();
            const errorBox = document.getElementById('errorMessage');
            const successBox = document.getElementById('successMessage');

            errorBox.textContent = '';
            successBox.textContent = '';

            // (Kiểm tra lỗi form... )
            if (!username || !email || !password || !confirmPassword) {
                errorBox.textContent = '❌ Vui lòng điền đầy đủ các trường.';
                submitButton.disabled = false;
                submitButton.textContent = 'ĐĂNG KÝ';
                return;
            }
            if (password !== confirmPassword) {
                errorBox.textContent = '❌ Mật khẩu không khớp.';
                submitButton.disabled = false;
                submitButton.textContent = 'ĐĂNG KÝ';
                return;
            }
            
            try {
                // 1. GỌI API ĐĂNG KÝ
                const response = await fetch(`${backendURL}/register`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, email, password })
                });

                const data = await response.json();

                if (response.ok) {
                    successBox.textContent = '✅ Đăng ký thành công! Đang tự động đăng nhập...';
                    
                    // 2. TỰ ĐỘNG GỌI API ĐĂNG NHẬP
                    try {
                        const loginResponse = await fetch(`${backendURL}/login`, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ email, password })
                        });
                        
                        const loginData = await loginResponse.json();
                        
                        if (loginResponse.ok) {
                            // 3. LƯU TOKEN
                            localStorage.setItem('token', loginData.token);
                            
                            // 4. CHUYỂN VÀO TRANG CHỦ
                            setTimeout(() => {
                                window.location.href = 'index.html'; 
                            }, 1000);
                        } else {
                            errorBox.textContent = 'Đăng ký thành công, nhưng tự động đăng nhập thất bại. Vui lòng đăng nhập thủ công.';
                            setTimeout(() => {
                                window.location.href = 'login.html';
                            }, 2000);
                        }
                    } catch (loginErr) {
                        errorBox.textContent = 'Lỗi kết nối khi tự động đăng nhập.';
                        setTimeout(() => {
                            window.location.href = 'login.html';
                        }, 2000);
                    }
                } else {
                    // Lỗi đăng ký (ví dụ: email đã tồn tại)
                    errorBox.textContent = data.message || '❌ Có lỗi xảy ra, vui lòng thử lại.';
                    submitButton.disabled = false;
                    submitButton.textContent = 'ĐĂNG KÝ';
                }
            } catch (err) {
                console.error('Lỗi fetch register:', err);
                errorBox.textContent = '❌ Không kết nối được với máy chủ!';
                submitButton.disabled = false;
                submitButton.textContent = 'ĐĂNG KÝ';
            }
        });
    }

    // ----------------------------------------------------
    // ⬇️ LOGIC FORM ĐĂNG NHẬP ⬇️
    // ----------------------------------------------------
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const submitButton = loginForm.querySelector('button[type="submit"]');
            submitButton.disabled = true;
            submitButton.textContent = 'Đang xử lý...';

            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();
            const errorBox = document.getElementById('loginErrorMessage');

            errorBox.textContent = '';

            if (!email || !password) {
                errorBox.textContent = '❌ Vui lòng điền đầy đủ các trường.';
                submitButton.disabled = false;
                submitButton.textContent = 'ĐĂNG NHẬP';
                return;
            }

            try {
                const response = await fetch(`${backendURL}/login`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password })
                });

                const data = await response.json();

                if (response.ok) {
                    // ----------------------------------------------------
                    // ⬇️ ĐÂY LÀ PHẦN LƯU TOKEN BỊ THIẾU ⬇️
                    // ----------------------------------------------------
                    localStorage.setItem('token', data.token); 
                    
                    alert('🎉 Đăng nhập thành công!');
                    window.location.href = 'index.html';
                } else {
                    errorBox.textContent = data.message || '❌ Sai tài khoản hoặc mật khẩu.';
                    submitButton.disabled = false;
                    submitButton.textContent = 'ĐĂNG NHẬP';
                }

            } catch (err) {
                console.error('Lỗi fetch login:', err);
                errorBox.textContent = '❌ Không kết nối được với máy chủ!';
                submitButton.disabled = false;
                submitButton.textContent = 'ĐĂNG NHẬP';
            }
        });
    }
    
    // ----------------------------------------------------
    // ⬇️ LOGIC THANH TOÁN (CHECKOUT) ⬇️
    // ----------------------------------------------------
    const checkoutForm = document.getElementById("checkoutForm");
    if (checkoutForm) {
      checkoutForm.addEventListener("submit", async function(e) {
        e.preventDefault();
        
        const token = localStorage.getItem('token'); // Lấy token
        if (!token) {
            alert("Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại.");
            window.location.href = 'login.html';
            return;
        }

        const data = Object.fromEntries(new FormData(this).entries());
        const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

        const orderData = {
            info: data, 
            items: [...cart], 
            total: total
        };

        try {
            const response = await fetch(`${backendURL}/checkout`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` // Gửi token
                },
                body: JSON.stringify(orderData)
            });

            const result = await response.json();

            if (response.ok) {
                alert("Đặt hàng thành công!");
                cart = []; // Xóa giỏ hàng local
                localStorage.setItem("cart", JSON.stringify(cart));
                renderOrders(); // Tải lại lịch sử đơn hàng
                renderAll(); // Cập nhật lại toàn bộ
            } else {
                alert("Lỗi đặt hàng: " + (result.message || result.msg)); // Sửa lỗi 'undefined'
            }
        } catch (err) {
            console.error('Lỗi checkout:', err);
            alert("Không thể kết nối tới máy chủ để đặt hàng.");
        }
      });
    }

    // ----------------------------------------------------
    // ⬇️ KHỞI ĐỘNG CÁC HÀM KHI TẢI TRANG ⬇️
    // ----------------------------------------------------
    renderAll();

}); // <-- DẤU ĐÓNG CỦA 'DOMContentLoaded'

// ----------------------------------------------------
// ⬇️ CÁC HÀM HỖ TRỢ (Nằm ngoài DOMContentLoaded) ⬇️
// ----------------------------------------------------

// ===== RENDER SẢN PHẨM =====
function renderProducts(listData = products) {
  const list = document.getElementById("productList");
  if (!list) return;
  list.innerHTML = `
    <div class="grid">
      ${listData.map(p => `
        <div class="card">
          <img src="${p.image}" alt="${p.name}">
          <h4>${p.name}</h4>
          <p>${p.price.toLocaleString()}₫</p>
          <button onclick="showOptions(${p.id})">Mua ngay</button>
        </div>
      `).join("")}
    </div>
  `;
}
function showOptions(id) {
  const p = products.find(x => x.id === id);
  const container = document.getElementById("productList");
  container.innerHTML = `
    <div class="optionBox">
      <h3>${p.name}</h3>
      <img src="${p.image}" alt="${p.name}" style="max-width:200px">
      <p>Giá gốc: ${p.price.toLocaleString()}₫</p>
      <label>Size:</label>
      <select id="size-${id}">
        <option value="M">M</option>
        <option value="L">L (+5k)</option>
      </select>
      <label>Đường:</label>
      <select id="sugar-${id}">
        <option value="100%">100%</option>
        <option value="70%">70%</option>
        <option value="50%">50%</option>
        <option value="30%">30%</option>
      </select>
      <label>Đá:</label>
      <select id="ice-${id}">
        <option value="100%">100%</option>
        <option value="70%">70%</option>
        <option value="30%">30%</option>
        <option value="0%">Không đá</option>
      </select>
      <label>Topping:</label>
      <select id="topping-${id}">
        <option value="Không">Không</option>
        <option value="Trân châu đen">Trân châu đen (+5k)</option>
        <option value="Thạch phô mai">Thạch phô mai (+7k)</option>
      </select>
      <br><br>
      <button onclick="addToCart(${id})">Thêm vào giỏ</button>
      <button onclick="renderProducts()">Quay lại</button>
    </div>
  `;
}
// ===== LỌC DANH MỤC =====
function filterCategory(cat) {
  if (cat === 'all') renderProducts(products);
  else renderProducts(products.filter(p => p.category === cat));
}
// ===== TÌM KIẾM =====
function searchProducts() {
  const keyword = document.getElementById("searchBox").value.toLowerCase();
  renderProducts(products.filter(p => p.name.toLowerCase().includes(keyword)));
}

// ===== THÊM VÀO GIỎ =====
function addToCart(id) {
  const p = products.find(x => x.id === id);
  let price = p.price;

  const size = document.getElementById(`size-${id}`).value;
  const sugar = document.getElementById(`sugar-${id}`).value;
  const ice = document.getElementById(`ice-${id}`).value;
  const topping = document.getElementById(`topping-${id}`).value;

  if (size === "L") price += 5000;
  if (topping === "Trân châu đen") price += 5000;
  if (topping === "Thạch phô mai") price += 7000;

  const key = `${id}-${size}-${sugar}-${ice}-${topping}`;
  const exist = cart.find(i => i.key === key);
  if (exist) exist.qty++;
  else cart.push({ key, id, name: p.name, size, sugar, ice, topping, price, qty: 1 });

  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
  showCartAlert(p.name); 
}
// ===== RENDER GIỎ HÀNG =====
function renderCart() {
  const wrap = document.getElementById("cartTableWrap");
  if (!wrap) return; 
  const totalEl = document.getElementById("checkoutTotal");
  if (!totalEl) return;
  
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  totalEl.textContent = total.toLocaleString() + "₫";

  if (!cart.length) {
    wrap.innerHTML = "<p>Giỏ hàng trống</p>";
    return;
  }
  wrap.innerHTML = `
    <table>
      <tr>
        <th>Sản phẩm</th><th>Chi tiết</th><th>Đơn giá</th>
        <th>Số lượng</th><th>Thành tiền</th><th>Hành động</th>
      </tr>
      ${cart.map(i => `
        <tr>
          <td>${i.name}</td>
          <td>Size: ${i.size}, Đường: ${i.sugar}, Đá: ${i.ice}, Topping: ${i.topping}</td>
          <td>${i.price.toLocaleString()}₫</td>
          <td>
            <button onclick="updateQty('${i.key}', -1)">-</button>
            ${i.qty}
            <button onclick="updateQty('${i.key}', 1)">+</button>
          </td>
          <td>${(i.price * i.qty).toLocaleString()}₫</td>
          <td><button onclick="removeItem('${i.key}')">Xóa</button></td>
        </tr>
      `).join("")}
    </table>
  `;
}
// ===== CẬP NHẬT SỐ LƯỢNG =====
function updateQty(key, diff) {
  const item = cart.find(i => i.key === key);
  if (!item) return;
  item.qty += diff;
  if (item.qty <= 0) cart = cart.filter(i => i.key !== key);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}
// ===== XÓA SẢN PHẨM =====
function removeItem(key) {
  cart = cart.filter(i => i.key !== key);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}
// ===== HIỂN THỊ LỊCH SỬ ĐƠN HÀNG =====
async function renderOrders() {
  const list = document.getElementById("orderList");
  if (!list) return; 
  
  const token = localStorage.getItem('token');
  if (!token) {
    list.innerHTML = "<p>Bạn cần đăng nhập để xem lịch sử.</p>";
    return;
  }

  try {
    const response = await fetch(`${backendURL}/order-history`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}` // Gửi token
        }
    });

    if (response.status === 401) {
        alert("Phiên đăng nhập hết hạn.");
        window.location.href = 'login.html';
        return;
    }

    const myOrders = await response.json(); 

    if (!myOrders.length) {
      list.innerHTML = "<p>Bạn chưa có đơn hàng nào.</p>";
      return;
    }

    list.innerHTML = myOrders.map(o => {
      const info = o.info || {};
      return `
        <div class="order">
          <p><strong>Thời gian:</strong> ${o.time}</p>
          <p><strong>Mã đơn hàng:</strong> ${o.id}</p>
          <p><strong>Khách hàng:</strong> ${info.name} - ${info.phone}</p>
          <p><strong>Địa chỉ:</strong> ${info.address}</p>
          <p><strong>Thanh toán:</strong> ${info.payment}</p>
          <ul>
            ${o.items.map(i => `
              <li>${i.qty} x ${i.name} (${i.size}, ${i.sugar} đường, ${i.ice} đá, topping: ${i.topping}) - ${i.price.toLocaleString()}₫</li>
            `).join("")}
          </ul>
          <p><strong>Tổng tiền:</strong> ${o.total.toLocaleString()}₫</p>
          <hr>
        </div>
      `;
    }).join("");

  } catch (err) {
      console.error('Lỗi renderOrders:', err);
      list.innerHTML = "<p>Không thể tải lịch sử đơn hàng.</p>";
  }
}
// ===== ALERT =====
function showCartAlert(name) {
  const alertBox = document.getElementById("cartAlert");
  if (!alertBox) return;
  alertBox.innerText = `Đã thêm ${name} vào giỏ hàng!`;
  alertBox.classList.add("show");
  setTimeout(() => {
    alertBox.classList.remove("show");
  }, 2000);
}
// ===== RENDER TOÀN BỘ =====
function renderAll() {
  renderProducts();
  renderCart();
  renderOrders();
}