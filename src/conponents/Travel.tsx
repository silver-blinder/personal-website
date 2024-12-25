import type { LatLngExpression } from 'leaflet'
import L from 'leaflet' // 添加这个导入
// 添加这些图标导入
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import ThreeDPhotoCarousel from './ui/3dCarousel'
import 'leaflet/dist/leaflet.css'

// 初始化 Leaflet 默认图标
const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
})
L.Marker.prototype.options.icon = DefaultIcon

function Travel() {
  const center: LatLngExpression = [31.2989, 120.5853]

  const locations = [
    {
      name: 'Bangkok, Thailand',
      coordinates: [13.7563, 100.5018] as LatLngExpression,
      visited: '2017',
    },
    {
      name: 'Beijing, China',
      coordinates: [39.9042, 116.3912] as LatLngExpression,
      visited: '2018.8',
    },
    {
      name: 'Tokyo, Japan',
      coordinates: [35.6895, 139.6917] as LatLngExpression,
      visited: '2019.7',
    },
    {
      name: 'Haikou, Hainan',
      coordinates: [20.0458, 110.3454] as LatLngExpression,
      visited: '2023.7.4',
    },
    {
      name: 'Guangzhou, Guangdong',
      coordinates: [23.1252, 113.2644] as LatLngExpression,
      visited: '2023.7.12',
    },
    {
      name: 'Suzhou, Jiangsu',
      coordinates: [31.2989, 120.5853] as LatLngExpression,
      visited: '2023.8.19',
    },
    {
      name: 'Xinjiang, China',
      coordinates: [41.7961, 82.8755] as LatLngExpression,
      visited: '2023.9.30',
    },
    {
      name: 'Hangzhou, China',
      coordinates: [30.2741, 120.1550] as LatLngExpression,
      visited: '2023.10.20',
    },
    {
      name: 'Wuxi, Jiangsu',
      coordinates: [31.3752, 118.8096] as LatLngExpression,
      visited: '2024.4.4',
    },
  ]

  return (
    <section id="travel" className="w-full px-4 lg:px-16 xl:px-32 2xl:px-44 relative z-10 my-24 lg:my-32">
      <div className="flex lg:flex-row flex-col">
        <div className="relative lg:w-1/3 w-full">
          <div className="absolute left-1/2 h-[850px] w-[1px] bg-[#8B4513] transform -translate-x-1/2"></div>
          <div className="space-y-8">
            {locations
              .sort((a, b) => Number.parseInt(b.visited) - Number.parseInt(a.visited))
              .map((location, index) => (
                <div
                  key={index}
                  className="event relative flex items-center"
                >
                  {/* 圆点标记 */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <svg
                      className="marker"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                    >
                      <circle cx="8" cy="8" r="6" fill="#fdba74" />
                    </svg>
                  </div>

                  {/* 左侧内容 */}
                  <div className={`w-[50%] pr-8 text-right ${index % 2 === 0 ? 'invisible' : 'visible'}`}>
                    <time className="text-2xl font-bold block mb-1">
                      {location.visited}
                    </time>
                    <p className="text-lg">
                      {location.name}
                    </p>
                  </div>

                  {/* 右侧内容 */}
                  <div className={`w-[50%] pl-8 ${index % 2 === 0 ? 'visible' : 'invisible'}`}>
                    <time className="text-2xl font-bold block mb-1">
                      {location.visited}
                    </time>
                    <p className="text-lg">
                      {location.name}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center lg:w-2/3 w-full">
          <div className="p-6 rounded-3xl bg-white w-[350px] lg:w-[550px] lg:mt-0 mt-12">
            <h2 className="text-3xl text-black font-bold mb-4">Footprints</h2>
            <div className="lg:h-[500px] lg:w-[500px] h-[300px] w-[300px] rounded-lg relative overflow-hidden">
              <MapContainer
                center={center}
                zoom={3}
                style={{ height: '500px', width: '100%' }}
                scrollWheelZoom={false}
                attributionControl={true}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                />
                {locations.map((location, index) => (
                  <Marker key={index} position={location.coordinates}>
                    <Popup>{location.name}</Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>
          <div className="w-full lg:w-[90%] lg:mt-0 -mt-12">
            <ThreeDPhotoCarousel />
          </div>
        </div>
      </div>

    </section>

  )
}

export default Travel
