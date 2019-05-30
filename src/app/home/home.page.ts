import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LoadingController, MenuController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

  src: HTMLImageElement;
  items: Array<any>;

  constructor(
    public loadingCtrl: LoadingController,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private menu: MenuController
  ) { }

  ngOnInit() {
    if (this.route && this.route.data) {
      this.getData();
    }
  }

  async getData(){
    const loading = await this.loadingCtrl.create({
      message: 'Please wait...'
    });
    this.presentLoading(loading);

    this.route.data.subscribe(routeData => {
      routeData['data'].subscribe(data => {
        loading.dismiss();
        this.items = data;
      })
    })
  }

  async presentLoading(loading) {
    return await loading.present();
  }

  logout(){
    this.authService.doLogout()
    .then(res => {
      this.router.navigate(["/login"]);
    }, err => {
      console.log(err);
    })
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  changeElements() {
    var hats: Array<string> = [ '',
                                '',
                                '',
                                'https://strattonhats.com/wp-content/uploads/S36.jpg', 
                                'https://images-na.ssl-images-amazon.com/images/I/61spVNno8BL._UX679_.jpg',
                                'https://www.villagehatshop.com/photos/product/standard/4511390S74071/all/maroon-fez-with-black-tassel.jpg',
                                'https://www.rei.com/media/product/631470',
                                'https://www.villagehatshop.com/photos/product/standard/4511390S60016/-/size-s.jpg',
                                'https://kmd-assets.imgix.net/catalog/product/1/3/13640_kiraansunhat_a_naw.jpg?auto=format&fit=crop&q=30&dpr=2',
                                'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1554410702-best-hats-8-1554410697.jpg',
                                'https://www.villagehatshop.com/photos/product/standard/4511390S59716/all/propeller-beanie-hat.jpg',
                                'https://d106cmemq27pil.cloudfront.net/media/catalog/product/2/2/225.jpg',
                                'http://www.dolchefashion.com/wp-content/uploads/2017/08/beanie-hat-the-north-face-women-u0027s-classic-wool-beanie-50-%E2%9D%A4-liked-on-polyvore-obndmns-.jpg',
                              ];

    var shirts: Array<string> = ['https://kathmandu.imgix.net/catalog/product/1/5/15109_fedshirt_v3_a_nd6.jpg', 
                                  'https://kmd-assets.imgix.net/catalog/product/a/0/a0446_nfn_flindersmerinoquarterzippullover_m_a.jpg?auto=format&fit=crop&q=30&dpr=2',
                                  'https://kmd-assets.imgix.net/catalog/product/1/4/14853_kangsarlsv4_a_918.jpg?auto=format&fit=crop&q=30&dpr=2',
                                  'https://cdn-internetfusion.global.ssl.fastly.net/525564.jpg',
                                  'https://dfp2hfrf3mn0u.cloudfront.net/266/2662900050_232860_png_zoom_15.jpg',
                                  'https://kmd-assets.imgix.net/catalog/product/1/4/14455_kenlsshirt_v2_a_634.jpg?auto=format&fit=crop&q=30&dpr=2&ixlib=imgixjs-3.3.2',
                                  'https://cdn-internetfusion.global.ssl.fastly.net/553246.jpg',
                                  'https://kmd-assets.imgix.net/catalog/product/a/0/a0480_nf8_bengalstripelstee_m_a.jpg?auto=format&fit=crop&q=30&dpr=2&ixlib=imgixjs-3.3.2',
                                  'https://cdn22.bambinifashion.com/img/p/7/9/9/0/5/79905-fullsize_zoom.jpg',
                                  'https://www.wigglestatic.com/product-media/101819181/Fohn-Mountain-Web-Tshirt-T-Shirts-Grey-White-SS19-SK0184GREY-WHITEXS.jpg',
                                  'https://kmd-assets.imgix.net/catalog/product/a/0/a0479_565_logolstee_m_a.jpg?auto=format&fit=crop&q=30&dpr=2&ixlib=imgixjs-3.3.2',
                                  'https://die-form.de/media/image/12/4b/7d/taylor-tweed-tshirt-logo-T301-203-L2451-ecru-v.jpg',
                                  'https://cdn.shopify.com/s/files/1/1202/9246/products/men-s-t-shirt-n-1-8.jpeg?v=1510682945',
                                  'https://media.fjallraven.com/zoom/7323450472696_FW18_g_greenland_rewool_sweater_m_fjaellraeven_21.png',
                                  'https://shoppinginibiza.com/51312-thickbox_default/078cc2i002-400-navy-super-thin-cnk-swearts.jpg',
                                  'https://cdn.shopify.com/s/files/1/2233/9243/products/RLGMO02_280_2000x.jpg?v=1510594248',
                                  'https://www.skiwebshop.com/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/c/a/campagnolo_ski-pully_heren_blauw_e16camw16b_1-1_bv.jpg',
                                  'https://kmd-assets.imgix.net/catalog/product/1/3/13454_talas3in1jktmen_a_na4.jpg?auto=format&fit=crop&q=30&dpr=2',
                                  'https://kathmandu.imgix.net/catalog/product/1/4/14570_malazanjkt_v4_a_791.jpg',
                                  'https://kmd-assets.imgix.net/catalog/product/1/4/14508_xtalopexgtex_v4_a_n8j.jpg?auto=format&fit=crop&q=30&dpr=2',
                                  'https://kmd-assets.imgix.net/catalog/product/1/5/15091_aysenrainjkt_a_nbf.jpg?auto=format&fit=crop&q=30&dpr=2',
                                  'https://wickedstock.com/wp-content/uploads/2017/12/11.jpg',
                                  'http://www.carterpresents.org/vision/Mens-Jacket-Soul-Star-Coat-Padded-Quilted-Hooded-Funnel.jpg',
                                  'https://kmd-assets.imgix.net/catalog/product/1/4/14838_mackenziejkt_a_na8.jpg?auto=format&fit=crop&q=30&dpr=2&ixlib=imgixjs-3.3.2',
                                  'http://www.blinkpubblicita.com/gallery/Mens-Bubble-Jacket-Threadbare-Coat-Hooded-Camo-Military.jpg',
                                  'https://www.r7paranormal.com/images/U7fJiIw5LY8W/Understated-jacket-vest-men-s-kathmandu-monrovia-waterproof-v2-6U2H.jpg'
                              ]; 

    var pants: Array<string> = ['https://kmd-assets.imgix.net/catalog/product/a/0/a0501_510_nduropant_m_a.jpg?auto=format&fit=crop&q=30&dpr=2',
                                'https://kmd-assets.imgix.net/catalog/product/1/5/15105_fedcargopants_a_naa.jpg?auto=format&fit=crop&q=30&dpr=2',
                                'https://kmd-assets.imgix.net/catalog/product/1/4/14306_versoxtpants_a_913.jpg?auto=format&fit=crop&q=30&dpr=2',
                                'https://kmd-assets.imgix.net/catalog/product/a/0/a0451_902_trailhead100pant_m_a.jpg?auto=format&fit=crop&q=30&dpr=2&ixlib=imgixjs-3.3.2',
                                'https://image.dhgate.com/0x0/f2/albu/g9/M00/88/45/rBVaWFv3Z5uAI5dSABsQgjjZUw4039.jpg',
                                'https://op2.0ps.us/original/opplanet-outdoor-research-goldrush-30in-jeans-mens-242993-0260325-main',
                                'https://i.pinimg.com/originals/1c/57/fb/1c57fbafb2a5ef433de57aec3635693f.jpg',
                                'https://cdn.shopify.com/s/files/1/1595/1403/products/uow_burg_sweatpants_mens_front_full_flat.jpg?v=1539782562',
                                'http://img.fruugo.com/product/6/73/30731736_max.jpg',
                                'https://kmd-assets.imgix.net/catalog/product/1/3/13625_mocoashort_a_079.jpg?auto=format&fit=crop&q=30&dpr=2&ixlib=imgixjs-3.3.2',
                                'https://images-na.ssl-images-amazon.com/images/I/81hKM+IXixL.jpg',
                              ]; 

    var shoes: Array<string> = ['https://tshop.r10s.com/9a9/ea0/ff8c/8e6d/1084/7ba8/0277/1195e9ad0f0242ac110002.jpg',
                                'https://s3-eu-west-1.amazonaws.com/wi-ebay-pictures/EBAY/79/70/04/400797820675_2679_I_190_672_IMG5f0040.jpeg',
                                'https://tshop.r10s.com/845/df2/92b4/d86d/10ef/7a11/fdf8/1150e999130242ac110004.jpg',
                                'https://ak1.ostkcdn.com//images/products/is/images/direct/05f77affe616a6e76f7e685bb6c2ecf02cd43f59/Rockport-NEW-Cinnamon-Brown-Mens-Shoes-Size-11M-Suede-Moccasin-Slippers.jpg',
                                'https://i5.walmartimages.com/asr/1e09c45b-9202-4900-b9c7-25c6afed0cbf_1.49220a5ba6e86b3bd9bde2822471be15.jpeg',
                                'https://pumaimages.azureedge.net/images/305638/03/sv01/fnd/PNA/',
                                'https://www.cieloatloslagos.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/3/6/360265_07.jpeg',
                                'https://images-na.ssl-images-amazon.com/images/I/81zQsY3tf6L.jpg',
                              ]; 

    var randomizeHat = Math.floor(Math.random()*hats.length);
    var randomizeShirt = Math.floor(Math.random()*shirts.length);
    var randomizePants = Math.floor(Math.random()*pants.length);
    var randomizeShoes = Math.floor(Math.random()*shoes.length);
    var randomHat = hats[randomizeHat];
    var randomShirt = shirts[randomizeShirt];
    var randomPants = pants[randomizePants];
    var randomShoes = shoes[randomizeShoes];
    (<HTMLImageElement>document.getElementById("hat")).src = randomHat;
    (<HTMLImageElement>document.getElementById("shirt")).src = randomShirt;
    (<HTMLImageElement>document.getElementById("pants")).src = randomPants;
    (<HTMLImageElement>document.getElementById("shoes")).src = randomShoes;
  }

}
