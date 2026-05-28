/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  hydration?: string;
  flours?: string[];
  fermentationTime?: string;
  tags?: string[];
  image: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  description: string;
  items: MenuItem[];
}

export interface GridBlock {
  id: string;
  type: 'image' | 'text' | 'combo';
  title?: string;
  subtitle?: string;
  content?: string;
  image?: string;
  shapeClass?: string;
}

export interface Feedback {
  author: string;
  role: string;
  text: string;
  rating: number;
}
