// Product Colors
export type ProductColor = 'سفید' | 'مشکی' | 'قرمز' | 'سبز' | 'بنفش' | 'زرد' | 'آبی' | 'طوسی' | 'نارنجی' | 'صورتی';

// Product Size
export type ProductSize = 'کلیو' | 'گالن' | 'دبه';

// Product Tag
export type ProductTags = 'سحر' | 'نیپون' | 'رنگسازی ایران' | 'هادی';

// Product
export interface Product {
  id?: number;
  name?: string;
  price?: number;
  salePrice?: number;
  discount?: number;
  pictures?: string;
  shortDetails?: string;
  description?: string;
  stock?: number;
  new?: boolean;
  sale?: boolean;
  category?: string;
  colors?: ProductColor[];
  size?: ProductTags[];
  tags?: ProductSize[];
  variants?: any[];
}

// Color Filter
export interface ColorFilter {
  color?: ProductColor;
}

// Tag Filter
export interface TagFilter {
  tag?: ProductTags
}