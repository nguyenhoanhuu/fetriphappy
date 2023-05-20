const data = [
   {
      name: 'An Giang',
      slug: 'an-giang',
      type: 'tinh',
      name_with_type: 'Tỉnh An Giang',
      code: '89',
   },
   {
      name: 'Kon Tum',
      slug: 'kon-tum',
      type: 'tinh',
      name_with_type: 'Tỉnh Kon Tum',
      code: '62',
   },
   {
      name: 'Đắk Nông',
      slug: 'dak-nong',
      type: 'tinh',
      name_with_type: 'Tỉnh Đắk Nông',
      code: '67',
   },
   {
      name: 'Sóc Trăng',
      slug: 'soc-trang',
      type: 'tinh',
      name_with_type: 'Tỉnh Sóc Trăng',
      code: '94',
   },
   {
      name: 'Bình Phước',
      slug: 'binh-phuoc',
      type: 'tinh',
      name_with_type: 'Tỉnh Bình Phước',
      code: '70',
   },
   {
      name: 'Hưng Yên',
      slug: 'hung-yen',
      type: 'tinh',
      name_with_type: 'Tỉnh Hưng Yên',
      code: '33',
   },
   {
      name: 'Thanh Hóa',
      slug: 'thanh-hoa',
      type: 'tinh',
      name_with_type: 'Tỉnh Thanh Hóa',
      code: '38',
   },
   {
      name: 'Quảng Trị',
      slug: 'quang-tri',
      type: 'tinh',
      name_with_type: 'Tỉnh Quảng Trị',
      code: '45',
   },
   {
      name: 'Tuyên Quang',
      slug: 'tuyen-quang',
      type: 'tinh',
      name_with_type: 'Tỉnh Tuyên Quang',
      code: '08',
   },
   {
      name: 'Quảng Ngãi',
      slug: 'quang-ngai',
      type: 'tinh',
      name_with_type: 'Tỉnh Quảng Ngãi',
      code: '51',
   },
   {
      name: 'Hà Nội',
      slug: 'ha-noi',
      type: 'thanh-pho',
      name_with_type: 'Thành phố Hà Nội',
      code: '01',
   },
   {
      name: 'Lào Cai',
      slug: 'lao-cai',
      type: 'tinh',
      name_with_type: 'Tỉnh Lào Cai',
      code: '10',
   },
   {
      name: 'Vĩnh Long',
      slug: 'vinh-long',
      type: 'tinh',
      name_with_type: 'Tỉnh Vĩnh Long',
      code: '86',
   },
   {
      name: 'Lâm Đồng',
      slug: 'lam-dong',
      type: 'tinh',
      name_with_type: 'Tỉnh Lâm Đồng',
      code: '68',
   },
   {
      name: 'Bình Định',
      slug: 'binh-dinh',
      type: 'tinh',
      name_with_type: 'Tỉnh Bình Định',
      code: '52',
   },
   {
      name: 'Nghệ An',
      slug: 'nghe-an',
      type: 'tinh',
      name_with_type: 'Tỉnh Nghệ An',
      code: '40',
   },
   {
      name: 'Kiên Giang',
      slug: 'kien-giang',
      type: 'tinh',
      name_with_type: 'Tỉnh Kiên Giang',
      code: '91',
   },
   {
      name: 'Hà Giang',
      slug: 'ha-giang',
      type: 'tinh',
      name_with_type: 'Tỉnh Hà Giang',
      code: '02',
   },
   {
      name: 'Phú Yên',
      slug: 'phu-yen',
      type: 'tinh',
      name_with_type: 'Tỉnh Phú Yên',
      code: '54',
   },
   {
      name: 'Lạng Sơn',
      slug: 'lang-son',
      type: 'tinh',
      name_with_type: 'Tỉnh Lạng Sơn',
      code: '20',
   },
   {
      name: 'Đà Nẵng',
      slug: 'da-nang',
      type: 'thanh-pho',
      name_with_type: 'Thành phố Đà Nẵng',
      code: '48',
   },
   {
      name: 'Sơn La',
      slug: 'son-la',
      type: 'tinh',
      name_with_type: 'Tỉnh Sơn La',
      code: '14',
   },
   {
      name: 'Tây Ninh',
      slug: 'tay-ninh',
      type: 'tinh',
      name_with_type: 'Tỉnh Tây Ninh',
      code: '72',
   },
   {
      name: 'Nam Định',
      slug: 'nam-dinh',
      type: 'tinh',
      name_with_type: 'Tỉnh Nam Định',
      code: '36',
   },
   {
      name: 'Lai Châu',
      slug: 'lai-chau',
      type: 'tinh',
      name_with_type: 'Tỉnh Lai Châu',
      code: '12',
   },
   {
      name: 'Bến Tre',
      slug: 'ben-tre',
      type: 'tinh',
      name_with_type: 'Tỉnh Bến Tre',
      code: '83',
   },
   {
      name: 'Khánh Hòa',
      slug: 'khanh-hoa',
      type: 'tinh',
      name_with_type: 'Tỉnh Khánh Hòa',
      code: '56',
   },
   {
      name: 'Bình Thuận',
      slug: 'binh-thuan',
      type: 'tinh',
      name_with_type: 'Tỉnh Bình Thuận',
      code: '60',
   },
   {
      name: 'Cao Bằng',
      slug: 'cao-bang',
      type: 'tinh',
      name_with_type: 'Tỉnh Cao Bằng',
      code: '04',
   },
   {
      name: 'Hải Phòng',
      slug: 'hai-phong',
      type: 'thanh-pho',
      name_with_type: 'Thành phố Hải Phòng',
      code: '31',
   },
   {
      name: 'Ninh Bình',
      slug: 'ninh-binh',
      type: 'tinh',
      name_with_type: 'Tỉnh Ninh Bình',
      code: '37',
   },
   {
      name: 'Yên Bái',
      slug: 'yen-bai',
      type: 'tinh',
      name_with_type: 'Tỉnh Yên Bái',
      code: '15',
   },
   {
      name: 'Gia Lai',
      slug: 'gia-lai',
      type: 'tinh',
      name_with_type: 'Tỉnh Gia Lai',
      code: '64',
   },
   {
      name: 'Hoà Bình',
      slug: 'hoa-binh',
      type: 'tinh',
      name_with_type: 'Tỉnh Hoà Bình',
      code: '17',
   },
   {
      name: 'Bà Rịa - Vũng Tàu',
      slug: 'ba-ria-vung-tau',
      type: 'tinh',
      name_with_type: 'Tỉnh Bà Rịa - Vũng Tàu',
      code: '77',
   },
   {
      name: 'Cà Mau',
      slug: 'ca-mau',
      type: 'tinh',
      name_with_type: 'Tỉnh Cà Mau',
      code: '96',
   },
   {
      name: 'Bình Dương',
      slug: 'binh-duong',
      type: 'tinh',
      name_with_type: 'Tỉnh Bình Dương',
      code: '74',
   },
   {
      name: 'Cần Thơ',
      slug: 'can-tho',
      type: 'thanh-pho',
      name_with_type: 'Thành phố Cần Thơ',
      code: '92',
   },
   {
      name: 'Thừa Thiên Huế',
      slug: 'thua-thien-hue',
      type: 'tinh',
      name_with_type: 'Tỉnh Thừa Thiên Huế',
      code: '46',
   },
   {
      name: 'Đồng Nai',
      slug: 'dong-nai',
      type: 'tinh',
      name_with_type: 'Tỉnh Đồng Nai',
      code: '75',
   },
   {
      name: 'Tiền Giang',
      slug: 'tien-giang',
      type: 'tinh',
      name_with_type: 'Tỉnh Tiền Giang',
      code: '82',
   },
   {
      name: 'Điện Biên',
      slug: 'dien-bien',
      type: 'tinh',
      name_with_type: 'Tỉnh Điện Biên',
      code: '11',
   },
   {
      name: 'Vĩnh Phúc',
      slug: 'vinh-phuc',
      type: 'tinh',
      name_with_type: 'Tỉnh Vĩnh Phúc',
      code: '26',
   },
   {
      name: 'Quảng Nam',
      slug: 'quang-nam',
      type: 'tinh',
      name_with_type: 'Tỉnh Quảng Nam',
      code: '49',
   },
   {
      name: 'Đắk Lắk',
      slug: 'dak-lak',
      type: 'tinh',
      name_with_type: 'Tỉnh Đắk Lắk',
      code: '66',
   },
   {
      name: 'Thái Nguyên',
      slug: 'thai-nguyen',
      type: 'tinh',
      name_with_type: 'Tỉnh Thái Nguyên',
      code: '19',
   },
   {
      name: 'Hải Dương',
      slug: 'hai-duong',
      type: 'tinh',
      name_with_type: 'Tỉnh Hải Dương',
      code: '30',
   },
   {
      name: 'Bạc Liêu',
      slug: 'bac-lieu',
      type: 'tinh',
      name_with_type: 'Tỉnh Bạc Liêu',
      code: '95',
   },
   {
      name: 'Trà Vinh',
      slug: 'tra-vinh',
      type: 'tinh',
      name_with_type: 'Tỉnh Trà Vinh',
      code: '84',
   },
   {
      name: 'Thái Bình',
      slug: 'thai-binh',
      type: 'tinh',
      name_with_type: 'Tỉnh Thái Bình',
      code: '34',
   },
   {
      name: 'Hà Tĩnh',
      slug: 'ha-tinh',
      type: 'tinh',
      name_with_type: 'Tỉnh Hà Tĩnh',
      code: '42',
   },
   {
      name: 'Ninh Thuận',
      slug: 'ninh-thuan',
      type: 'tinh',
      name_with_type: 'Tỉnh Ninh Thuận',
      code: '58',
   },
   {
      name: 'Đồng Tháp',
      slug: 'dong-thap',
      type: 'tinh',
      name_with_type: 'Tỉnh Đồng Tháp',
      code: '87',
   },
   {
      name: 'Long An',
      slug: 'long-an',
      type: 'tinh',
      name_with_type: 'Tỉnh Long An',
      code: '80',
   },
   {
      name: 'Hậu Giang',
      slug: 'hau-giang',
      type: 'tinh',
      name_with_type: 'Tỉnh Hậu Giang',
      code: '93',
   },
   {
      name: 'Quảng Ninh',
      slug: 'quang-ninh',
      type: 'tinh',
      name_with_type: 'Tỉnh Quảng Ninh',
      code: '22',
   },
   {
      name: 'Phú Thọ',
      slug: 'phu-tho',
      type: 'tinh',
      name_with_type: 'Tỉnh Phú Thọ',
      code: '25',
   },
   {
      name: 'Quảng Bình',
      slug: 'quang-binh',
      type: 'tinh',
      name_with_type: 'Tỉnh Quảng Bình',
      code: '44',
   },
   {
      name: 'TP. Hồ Chí Minh',
      slug: 'ho-chi-minh',
      type: 'thanh-pho',
      name_with_type: 'Thành phố Hồ Chí Minh',
      code: '79',
   },
   {
      name: 'Hà Nam',
      slug: 'ha-nam',
      type: 'tinh',
      name_with_type: 'Tỉnh Hà Nam',
      code: '35',
   },
   {
      name: 'Bắc Ninh',
      slug: 'bac-ninh',
      type: 'tinh',
      name_with_type: 'Tỉnh Bắc Ninh',
      code: '27',
   },
   {
      name: 'Bắc Giang',
      slug: 'bac-giang',
      type: 'tinh',
      name_with_type: 'Tỉnh Bắc Giang',
      code: '24',
   },
   {
      name: 'Bắc Kạn',
      slug: 'bac-kan',
      type: 'tinh',
      name_with_type: 'Tỉnh Bắc Kạn',
      code: '06',
   },
];
const dataSelection = [
   {
      label: '---Tất Cả---',
      value: '',
      index: '100',
   },
   {
      label: 'An Giang',
      value: 'An Giang',
      index: '89',
   },
   {
      label: 'Kon Tum',
      value: 'Kon Tum',
      index: '62',
   },
   {
      label: 'Đắk Nông',
      value: 'Đắk Nông',
      index: '67',
   },
   {
      label: 'Sóc Trăng',
      value: 'Sóc Trăng',
      index: '94',
   },
   {
      label: 'Bình Phước',
      value: 'Bình Phước',
      index: '70',
   },
   {
      label: 'Hưng Yên',
      value: 'Hưng Yên',
      index: '33',
   },
   {
      label: 'Thanh Hóa',
      value: 'Thanh Hóa',
      index: '38',
   },
   {
      label: 'Quảng Trị',
      value: 'Quảng Trị',
      index: '45',
   },
   {
      label: 'Tuyên Quang',
      value: 'Tuyên Quang',
      index: '08',
   },
   {
      label: 'Quảng Ngãi',
      value: 'Quảng Ngãi',
      index: '51',
   },
   {
      label: 'Hà Nội',
      value: 'Hà Nội',
      index: '01',
   },
   {
      label: 'Lào Cai',
      value: 'Lào Cai',
      index: '10',
   },
   {
      label: 'Vĩnh Long',
      value: 'Vĩnh Long',
      index: '86',
   },
   {
      label: 'Lâm Đồng',
      value: 'Lâm Đồng',
      index: '68',
   },
   {
      label: 'Bình Định',
      value: 'Bình Định',
      index: '52',
   },
   {
      label: 'Nghệ An',
      value: 'Nghệ An',
      index: '40',
   },
   {
      label: 'Kiên Giang',
      value: 'Kiên Giang',
      index: '91',
   },
   {
      label: 'Hà Giang',
      value: 'Hà Giang',
      index: '02',
   },
   {
      label: 'Phú Yên',
      value: 'Phú Yên',
      index: '54',
   },
   {
      label: 'Lạng Sơn',
      value: 'Lạng Sơn',
      index: '20',
   },
   {
      label: 'Đà Nẵng',
      value: 'Đà Nẵng',
      index: '48',
   },
   {
      label: 'Sơn La',
      value: 'Sơn La',
      index: '14',
   },
   {
      label: 'Tây Ninh',
      value: 'Tây Ninh',
      index: '72',
   },
   {
      label: 'Nam Định',
      value: 'Nam Định',
      index: '36',
   },
   {
      label: 'Lai Châu',
      value: 'Lai Châu',
      index: '12',
   },
   {
      label: 'Bến Tre',
      value: 'Bến Tre',
      index: '83',
   },
   {
      label: 'Khánh Hòa',
      value: 'Khánh Hòa',
      index: '56',
   },
   {
      label: 'Bình Thuận',
      value: 'Bình Thuận',
      index: '60',
   },
   {
      label: 'Cao Bằng',
      value: 'Cao Bằng',
      index: '04',
   },
   {
      label: 'Hải Phòng',
      value: 'Hải Phòng',

      index: '31',
   },
   {
      label: 'Ninh Bình',
      value: 'Ninh Bình',
      index: '37',
   },
   {
      label: 'Yên Bái',
      value: 'Yên Bái',
      index: '15',
   },
   {
      label: 'Gia Lai',
      value: 'Gia Lai',
      index: '64',
   },
   {
      label: 'Hoà Bình',
      value: 'Hoà Bình',
      index: '17',
   },
   {
      label: 'Bà Rịa - Vũng Tàu',
      value: 'Bà Rịa - Vũng Tàu',
      index: '77',
   },
   {
      label: 'Cà Mau',
      value: 'Cà Mau',
      index: '96',
   },
   {
      label: 'Bình Dương',
      value: 'Bình Dương',
      index: '74',
   },
   {
      label: 'Cần Thơ',
      value: 'Cần Thơ',
      index: '92',
   },
   {
      label: 'Thừa Thiên Huế',
      value: 'Thừa Thiên Huế',

      index: '46',
   },
   {
      label: 'Đồng Nai',
      value: 'Đồng Nai',
      index: '75',
   },
   {
      label: 'Tiền Giang',
      value: 'Tiền Giang',
      index: '82',
   },
   {
      label: 'Điện Biên',
      value: 'Điện Biên',
      index: '11',
   },
   {
      label: 'Vĩnh Phúc',
      value: 'Vĩnh Phúc',
      index: '26',
   },
   {
      label: 'Quảng Nam',
      value: 'Quảng Nam',
      index: '49',
   },
   {
      label: 'Đắk Lắk',
      value: 'Đắk Lắk',
      index: '66',
   },
   {
      label: 'Thái Nguyên',
      value: 'Thái Nguyên',
      index: '19',
   },
   {
      label: 'Hải Dương',
      value: 'Hải Dương',
      index: '30',
   },
   {
      label: 'Bạc Liêu',
      value: 'Bạc Liêu',
      index: '95',
   },
   {
      label: 'Trà Vinh',
      value: 'Trà Vinh',
      index: '84',
   },
   {
      label: 'Thái Bình',
      value: 'Thái Bình',
      index: '34',
   },
   {
      label: 'Hà Tĩnh',
      value: 'Hà Tĩnh',
      index: '42',
   },
   {
      label: 'Ninh Thuận',
      value: 'Ninh Thuận',
      index: '58',
   },
   {
      label: 'Đồng Tháp',
      value: 'Đồng Tháp',
      index: '87',
   },
   {
      label: 'Long An',
      value: 'Long An',
      index: '80',
   },
   {
      label: 'Hậu Giang',
      value: 'Hậu Giang',
      index: '93',
   },
   {
      label: 'Quảng Ninh',
      value: 'Quảng Ninh',
      index: '22',
   },
   {
      label: 'Phú Thọ',
      value: 'Phú Thọ',
      index: '25',
   },
   {
      label: 'Quảng Bình',
      value: 'Quảng Bình',
      index: '44',
   },
   {
      label: 'TP. Hồ Chí Minh',
      value: 'TP. Hồ Chí Minh',
      index: '79',
   },
   {
      label: 'Hà Nam',
      value: 'Hà Nam',
      index: '35',
   },
   {
      label: 'Bắc Ninh',
      value: 'Bắc Ninh',
      index: '27',
   },
   {
      label: 'Bắc Giang',
      value: 'Bắc Giang',
      index: '24',
   },
   {
      label: 'Bắc Kạn',
      value: 'Bắc Kạn',
      index: '06',
   },
];
export { data, dataSelection };