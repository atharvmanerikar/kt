import React, { useMemo, useState } from 'react'
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps'

// Using a reliable GeoJSON that includes country `name` properties
const TOPO_URL = 'https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson'

export default function WorldAvailabilityMap() {
  const [hovered, setHovered] = useState(null)

  const isAvailable = useMemo(() => {
    // India and Canada are available
    const availableSet = new Set(['india', 'canada'])
    return (countryName) => availableSet.has(countryName?.toLowerCase())
  }, [])

  return (
    <div className="map-card">
      <div className="map-wrapper" aria-label="World availability map">
        <ComposableMap projectionConfig={{ scale: 160 }}>
          <ZoomableGroup center={[10, 20]} minZoom={1} maxZoom={4} zoom={1}>
            <Geographies geography={TOPO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const name = geo.properties?.name
                  const available = isAvailable(name)
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={() => setHovered(name)}
                      onMouseLeave={() => setHovered(null)}
                      style={{
                        default: {
                          // Available = green, Others = light blue
                          fill: available ? '#00C853' : '#90CAF9',
                          outline: 'none',
                          stroke: available ? '#00A846' : '#64B5F6',
                          strokeWidth: 0.5,
                        },
                        hover: {
                          fill: available ? '#00A846' : '#64B5F6',
                          outline: 'none',
                        },
                        pressed: {
                          fill: available ? '#00923C' : '#42A5F5',
                          outline: 'none',
                        },
                      }}
                    />
                  )
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>

        {/* Simple tooltip */}
        {hovered && (
          <div className="map-tooltip" role="status">
            {isAvailable(hovered) ? `${hovered}: Available` : `${hovered}: Coming Soon`}
          </div>
        )}
      </div>

      <div className="map-legend">
        <span className="legend-swatch available" /> India, Canada: Available
        <span className="legend-divider" />
        <span className="legend-swatch soon" /> Others: Coming Soon
      </div>
    </div>
  )
}
