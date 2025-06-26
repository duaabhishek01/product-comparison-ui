import iphone14Image from '../assets/images/iphone14.jpg';
import samsungs22Image from '../assets/images/galaxys22.jpg';
import oneplus9Image from '../assets/images/oneplus9pro.jpg';
import gpixel6Image from '../assets/images/gpixel6.jpg';
import huaweip30Image from '../assets/images/huaweip30.jpg';
import xiaomi11Image from '../assets/images/xiaomi11pro.jpg';
import iphone16Image from '../assets/images/iphone16pro.jpg';

const products = [
  {
    id: 1,
    name: 'Apple iPhone 14',
    brand: 'Apple',
    image: iphone14Image,
    price: '39,999',
    rating: 4.6,
    features: {
      ram: '6 GB',
      camera: '12 MP Dual',
      battery: '3279 mAh',
      resolution: '1170 x 2532',
    }
  },
  {
    id: 2,
    name: 'Samsung Galaxy S22',
    brand: 'Samsung',
    image: samsungs22Image,
    price: '79,999',
    rating: 4.3,
    features: {
      ram: '8 GB',
      camera: '50 MP Triple',
      battery: '3700 mAh',
      resolution: '1080 x 2340',
    }
  },
  {
    id: 3,
    name: 'Google Pixel 6',
    brand: 'Google',
    image: gpixel6Image,
    price: '26,699',
    rating: 4.1,
    features: {
      ram: '8 GB',
      camera: '50 MP Dual',
      battery: '4614 mAh',
      resolution: '1080 x 2400',
    }
  },
  {
    id: 4,
    name: 'OnePlus 9 Pro',
    brand: 'OnePlus',
    image: oneplus9Image,
    price: '31,899',
    rating: 4.0,
    features: {
      ram: '12 GB',
      camera: '48 MP Quad',
      battery: '4500 mAh',
      resolution: '1440 x 3216',
    }
  },
  {
    id: 5,
    name: 'Huawei P30 Pro',
    brand: 'Huawei',
    image: huaweip30Image,
    price: '21,599',
    rating: 3.7,
    features: {
      ram: '8 GB',
      camera: '40 MP Quad',
      battery: '4200 mAh',
      resolution: '1080 x 2340',
    }
  },
  {
    id: 6,
    name: 'Xiaomi Mi 11',
    brand: 'Xiaomi',
    image: xiaomi11Image,
    price: '20,499',
    rating: 3.9,
    features: {
      ram: '8 GB',
      camera: '108 MP Triple',
      battery: '4600 mAh',
      resolution: '1440 x 3200',
    }
  },
  {
    id: 7,
    name: 'Apple iPhone 16 Pro',
    brand: 'Apple',
    image: iphone16Image,
    price: '69,999',
    rating: 4.9,
    features: {
      ram: '12 GB',
      camera: '24 MP Dual',
      battery: '5000 mAh',
      resolution: '1370 x 2532',
    }
  }
];
export default products;
