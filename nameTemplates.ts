import {
    phoneme_b, 
    phoneme_d,
    phoneme_f,
    phoneme_g,
    phoneme_h,
    phoneme_j,
    phoneme_k,
    phoneme_l,
    phoneme_m,
    phoneme_n,
    phoneme_p,
    phoneme_r,
    phoneme_s,
    phoneme_t,
    phoneme_v,
    phoneme_w,
    phoneme_y,
    phoneme_z,
    phoneme_long_z,
    phoneme_th,
    phoneme_ng,
    phoneme_sh,
    phoneme_ch,
    phoneme_zh,
    phoneme_wh,
    phoneme_short_a,
    phoneme_short_e,
    phoneme_short_i,
    phoneme_short_o,
    phoneme_short_u,
    phoneme_long_a,
    phoneme_long_e,
    phoneme_long_i,
    phoneme_long_o,
    phoneme_long_u,
    phoneme_oo,
    phoneme_ow,
    phoneme_oy,
    phoneme_short_ar,
    phoneme_long_ar,
    phoneme_ir,
    phoneme_or,
    phoneme_ur
} from "./phonemes"

// Maybe this could be a dictionary? <number>: <array>
export const phonemeArray = [
    phoneme_b, 
    phoneme_d,
    phoneme_f,
    phoneme_g,
    phoneme_h,
    phoneme_j,
    phoneme_k,
    phoneme_l,
    phoneme_m,
    phoneme_n,
    phoneme_p,
    phoneme_r,
    phoneme_s,
    phoneme_t,
    phoneme_v,
    phoneme_w,
    phoneme_y,
    phoneme_z,
    phoneme_long_z,
    phoneme_th,
    phoneme_ng,
    phoneme_sh,
    phoneme_ch,
    phoneme_zh,
    phoneme_wh,
    phoneme_short_a,
    phoneme_short_e,
    phoneme_short_i,
    phoneme_short_o,
    phoneme_short_u,
    phoneme_long_a,
    phoneme_long_e,
    phoneme_long_i,
    phoneme_long_o,
    phoneme_long_u,
    phoneme_oo,
    phoneme_ow,
    phoneme_oy,
    phoneme_short_ar,
    phoneme_long_ar,
    phoneme_ir,
    phoneme_or,
    phoneme_ur
]
// Could build custom phonemes that include other phonemes.

// Alright how do we build a name template?
// Just go for an array, index of:
/*
[
    [phoneme_t, phoneme_d],
    [phoneme_short_a, phoneme_long_a],
    [phoneme_ng, phoneme_r]
]
*/

// Don't know what this name template is supposed to be.
export const nameTemplate_1 = [
    [phoneme_t, phoneme_d],
    [phoneme_short_a, phoneme_long_a],
    [phoneme_ng, phoneme_r]
]

// This is supposed to be "Darius"
export const nameTemplate_2  = [
    [phoneme_d, phoneme_b, phoneme_ch],
    [phoneme_long_a, phoneme_short_a, phoneme_long_ar, phoneme_short_ar],
    [phoneme_short_e],
    [phoneme_short_u],
    [phoneme_s]
]

// What do we want for a test template?
// 1) phoneme_t, phoneme_d
// 2) phoneme_short_a, phoneme_long_a
// 3) phoneme_ng, phoneme_r

// How would I do this in Python?