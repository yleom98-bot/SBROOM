/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AsymmetricGrid from './components/AsymmetricGrid';
import InteractiveMenu from './components/InteractiveMenu';
import TastingProfiler from './components/TastingProfiler';
import CustomOrderModal from './components/CustomOrderModal';
import FindUs from './components/FindUs';
import Footer from './components/Footer';
import { MenuItem } from './types';
import { MENU_CATEGORIES } from './data';

export default function App() {
  const [isOpenOrder, setIsOpenOrder] = useState(false);
  const [preorderedItems, setPreorderedItems] = useState<MenuItem[]>([]);

  // Open the bespoke ordering modal
  const handleOpenOrder = () => setIsOpenOrder(true);
  const handleCloseOrder = () => setIsOpenOrder(false);

  // Scroll to Tasting Profiler
  const handleOpenProfiler = () => {
    const section = document.getElementById('profiler');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Toggle preordered item in the active state
  const handleToggleItem = (item: MenuItem) => {
    setPreorderedItems((prev) => {
      const exists = prev.some((x) => x.id === item.id);
      if (exists) {
        return prev.filter((x) => x.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  // Select item directly by ID (used for matcher recommend actions)
  const handleSelectItemById = (id: string) => {
    // Look up item in either take-home or other categories
    let found: MenuItem | null = null;
    for (const cat of MENU_CATEGORIES) {
      const match = cat.items.find((x) => x.id === id);
      if (match) {
        found = match;
        break;
      }
    }

    if (found) {
      handleToggleItem(found);
    }
  };

  const handleRemoveItem = (id: string) => {
    setPreorderedItems((prev) => prev.filter((x) => x.id !== id));
  };

  const handleClearPreorder = () => {
    setPreorderedItems([]);
  };

  const preorderedIds = preorderedItems.map((x) => x.id);

  return (
    <div id="app-root-container" className="min-h-screen bg-brand-cream-50 text-brand-charcoal selection:bg-brand-olive-light selection:text-brand-cream-50 scroll-smooth">
      {/* Structural Header Navigation */}
      <Header
        onOpenOrder={handleOpenOrder}
        onOpenProfiler={handleOpenProfiler}
      />

      {/* Main Content Sections */}
      <main>
        {/* Top Hero Section */}
        <Hero onOpenOrder={handleOpenOrder} />

        {/* Elegant Multi-Tiered Asymmetrical Visual Grid */}
        <AsymmetricGrid
          onOpenOrder={handleOpenOrder}
          onOpenProfiler={handleOpenProfiler}
        />

        {/* Segmented Case-Study Cuisine Menu Catalog */}
        <InteractiveMenu
          onSelectItem={handleToggleItem}
          preorderedIds={preorderedIds}
        />

        {/* Custom Sourdough Taste Advisor Engine */}
        <TastingProfiler
          onSelectItemById={handleSelectItemById}
          preorderedIds={preorderedIds}
        />

        {/* Find Us Quartier corner & hours info */}
        <FindUs />
      </main>

      {/* Footer Details */}
      <Footer />

      {/* Interactive Bespoke Bake Order Drawer */}
      <CustomOrderModal
        isOpen={isOpenOrder}
        onClose={handleCloseOrder}
        preorderedItems={preorderedItems}
        onRemoveItem={handleRemoveItem}
        onClearPreorder={handleClearPreorder}
      />
    </div>
  );
}
