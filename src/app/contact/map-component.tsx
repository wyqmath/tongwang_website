'use client';

import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';

export default function MapComponent() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const [isStylesLoaded, setIsStylesLoaded] = useState(false);

  // Load Leaflet CSS and wait for it to be ready
  useEffect(() => {
    const loadLeafletStyles = () => {
      return new Promise<void>((resolve) => {
        // Check if styles are already loaded
        const existingLink = document.querySelector('link[href*="leaflet"]');
        if (existingLink) {
          resolve();
          return;
        }

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        link.onload = () => resolve();
        link.onerror = () => resolve(); // Continue even if CSS fails to load
        document.head.appendChild(link);
      });
    };

    loadLeafletStyles().then(() => {
      setIsStylesLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && mapRef.current && !mapInstanceRef.current && isStylesLoaded) {
      // Fix for default markers in Leaflet with webpack - do this after styles are loaded
      delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: unknown })._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
      });

      // Initialize map with view centered on Tsinghua University Biomedical Building coordinates and zoom level
      const map = L.map(mapRef.current).setView([40.005, 116.326], 17);
      mapInstanceRef.current = map;

      // Add OpenStreetMap tile layer
      const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      });

      let markerAdded = false;

      // Wait for tile layer to be ready before adding marker
      tileLayer.on('load', () => {
        if (!markerAdded) {
          // Add a marker on the map after tiles are loaded
          const marker = L.marker([40.005, 116.326]).addTo(map);
          marker.bindPopup('Tsinghua University Biomedical Building');
          markerAdded = true;

          // Small delay to ensure everything is rendered properly
          setTimeout(() => {
            marker.openPopup();
          }, 100);
        }
      });

      tileLayer.addTo(map);

      // Fallback: if tiles don't load within 3 seconds, still add the marker
      setTimeout(() => {
        if (mapInstanceRef.current && !markerAdded) {
          const marker = L.marker([40.005, 116.326]).addTo(map);
          marker.bindPopup('Tsinghua University Biomedical Building');
          marker.openPopup();
          markerAdded = true;
        }
      }, 3000);
    }

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [isStylesLoaded]);

  return (
    <div
      ref={mapRef}
      style={{ height: '450px', borderRadius: '8px' }}
      className="w-full"
    />
  );
}
