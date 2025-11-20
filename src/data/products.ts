// src/data/products.ts
export interface Product {
    id: number
    name: string
    category: string
    // description: string
    image: string
}

// Import image paths
//Cervical Support Braces
import cervicalBraceImg1 from '@/assets/cervical-braces/cervical-braces-1.jpg'
import cervicalBraceImg2 from '@/assets/cervical-braces/cervical-braces-2.jpg'
//Abdominal Support Braces
import abdominalBraceImg1 from '@/assets/abdominal-braces/abdominal-braces-1.jpg'
import abdominalBraceImg2 from '@/assets/abdominal-braces/abdominal-braces-2.jpg'
//CORSET
import corsetImg1 from '@/assets/corset/corset-1.jpg'
import corsetImg2 from '@/assets/corset/corset-2.jpg'
//RIB / CHEST SUPPORT/ BRACES
import ribBraceImg1 from '@/assets/rib-chest-braces/rib-chest-braces-1.jpg'
import ribBraceImg2 from '@/assets/rib-chest-braces/rib-chest-braces-2.jpg'
//Back / Spinal Support / Braces
import backBraceImg1 from '@/assets/back-spinal-braces/back-spinal-braces-1.jpg'
import backBraceImg2 from '@/assets/back-spinal-braces/back-spinal-braces-2.jpg'

const products: Product[] = [
    {
        id: 1,
        name: 'Cervical-Orthosis (Philadelphia)',
        category: 'Cervical Support Braces',
        image: cervicalBraceImg1
    },
    {
        id: 2,
        name: 'Cervical-Collar Soft with Support',
        category: 'Cervical Support Braces',
        image: cervicalBraceImg2
    },
    {
        id: 3,
        name: 'Abdominal Support 9”/22.5cm',
        category: 'Abdominal Support Braces',
        image: abdominalBraceImg1
    },
    {
        id: 4,
        name: 'Tummy Trimmer/\nAbdominal 8"/20cm',
        category: 'Abdominal Support Braces',
        image: abdominalBraceImg2
    },
    {
        id: 5,
        name: 'Abdominal (AB-Core)',
        category: 'Corset (compression garments)',
        image: corsetImg1
    },
    {
        id: 6,
        name: 'Hip (Mini Shaper)',
        category: 'Corset (compression garments)',
        image: corsetImg2
    },
    {
        id: 7,
        name: 'Rib-Belt',
        category: 'Rib / Chest Support / Braces',
        image: ribBraceImg1
    },
    {
        id: 8,
        name: 'Chest Binder',
        category: 'Rib / Chest Support / Braces',
        image: ribBraceImg2
    },
    {
        id: 9,
        name: 'Contoured Lumbo Sacral',
        category: 'Back / Spinal Support / Braces',
        image: backBraceImg1
    },
    {
        id: 10,
        name: 'Lumbo Sacral Belt',
        category: 'Back / Spinal Support / Braces',
        image: backBraceImg2
    }
]

export default products
