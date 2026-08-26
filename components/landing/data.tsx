// data.tsx
import type { Marker } from '@/components/ui/dotted-map'

export const serviceMapMarkers: Marker[] = [
  { lat: -33.8688, lng: 151.2093, size: 0.7, pulse: true },
  { lat: -37.8136, lng: 144.9631, size: 0.45 },
  { lat: -27.4698, lng: 153.0251, size: 0.45 },
]

export const services = [
  {
    title: 'Brick Restoration',
    tags: ['REPAIR'],
    images: ['/restoration/restoration-2.png'],
    subServices: [
      {
        title: 'Tuckpointing/Repointing',
        description: 'grind out old crumby mortar and put fresh mortar in',
        subItem: []
      },
      {
        title: 'Brick Replacement',
        description: 'remove spalled, blown, or cracked bricks and replace with matching ones',
        subItem: []
      },
      {
        title: 'Linted Repair',
        description: 'replace rusted steel lintels above windows/doors that causes cracks',
        subItem: []
      },
    ],
    link: 'Explore Restoration'
  },
  {
    title: 'New Builds',
    tags: ['CONTEMPORARY', 'ARCHITECTURE'],
    images: ['/others/rockface block wall.jpg'],
    text: 'Executing clean lines and modern architectural designs with robust brickwork for high-end residential construction.',
    subServices: [
      {
        title: 'Brick Piers',
        description: null,
        subItem: [],
      },
      {
        title: 'External Brickwork',
        description: null,
        subItem: [
          { name: 'veneer walls' },
          { name: 'cavity walls' }
        ],
      },
      {
        title: 'Openings and Structural',
        description: null,
        subItem: [
          { name: 'window sills' },
          { name: 'control joints' },
          { name: 'weep holes & flashings' }
        ],
      },
      {
        title: 'Front Fence & Letterbox',
        description: null,
        subItem: [],
      },
      {
        title: 'Block Work',
        description: null,
        subItem: [
          { name: 'retaining walls' },
          { name: 'garage walls' },
          { name: 'service ducts using blocks' }
        ],
      },
    ],
    link: 'View Projects'
  },
  {
    title: 'Renovations',
    tags: ['MODERNIZATION', 'EXTENSIONS'],
    // Kept as an array (with 1 or more images) for structural consistency
    images: ['/renovation/renovation.jpg'],
    text: 'Seamless integration of new masonry with existing structures to modernize and reinforce structural integrity.',
    link: 'Learn More',
    subServices: [
      {
        title: 'New brick features',
        description: null,
        subItem: []
      },
      {
        title: 'Extensions',
        description: null,
        subItem: []
      },
      {
        title: 'Knock down & rebuild sections',
        description: null,
        subItem: []
      },
      {
        title: 'Full Re-brick',
        description: null,
        subItem: []
      },
    ]
  },
]

export const gallery = [
  ['/images/masonry-4.jpg', 'Heritage Restoration'],
  ['/images/masonry-5.jpg', 'Architectural New Build'],
  ['/images/masonry-6.jpg', 'Residential Renovation'],
] as const

export function Arrow() { return <span aria-hidden="true" className="arrow">→</span> }