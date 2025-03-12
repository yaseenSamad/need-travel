import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

export const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{yellow.50}',
            100: '{yellow.100}',
            200: '{yellow.200}',
            300: '{yellow.300}', // ✅ Yellow 300
            400: '{yellow.400}',
            500: '{yellow.500}',
            600: '{yellow.600}',
            700: '{yellow.700}',
            800: '{yellow.800}',
            900: '{yellow.900}',
            950: '{yellow.950}'
        },
        secondary: {
            50: '{emerald.50}',
            100: '{emerald.100}',
            200: '{emerald.200}',
            300: '{emerald.300}',
            400: '{emerald.400}', // ✅ Emerald 400
            500: '{emerald.500}',
            600: '{emerald.600}',
            700: '{emerald.700}',
            800: '{emerald.800}',
            900: '{emerald.900}',
            950: '{emerald.950}'
        },
        neutral: {
            50: '{gray.50}',
            100: '{gray.100}',
            200: '{gray.200}', // ✅ Gray 200
            300: '{gray.300}',
            400: '{gray.400}',
            500: '{gray.500}',
            600: '{gray.600}',
            700: '{gray.700}',
            800: '{gray.800}',
            900: '{gray.900}',
            950: '{gray.950}'
        },
        surface: {
            50: '{white}',
            100: '{white}',
            200: '{white}', // ✅ White
            300: '{white}',
            400: '{white}',
            500: '{white}',
            600: '{white}',
            700: '{white}',
            800: '{white}',
            900: '{white}',
            950: '{white}'
        }
    },
});
